import { useEffect, useState } from "react";
import ProductFilter from "../../components/Filter";
import ShopProductCard from "../../components/Shoping-productCard";
import { ArrowUpDownIcon } from "lucide-react";
import { sortOptions } from "../../config/RegisterformControlls";
import { useSearchParams } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
} from "../../components/ui/dropdown-menu";
import { Button } from "../../components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllFilteredProducts,
  fetchProductDetails,
} from "../../redux/Shop/product-slice";
import ProductDetails from "../../components/Product-details";
import { addToCart, fetchCartItems } from "../../redux/Shop/Cart-slice";

function createSearchParamsHelper(filterParams) {
  const queryParams = [];

  for (const [key, value] of Object.entries(filterParams)) {
    if (Array.isArray(value) && value.length > 0) {
      const paramValue = value.join(",");
      queryParams.push(`${key}=${encodeURIComponent(paramValue)}`);
    }
  }

  return queryParams.join("&");
}

const Listing = () => {
  const dispatch = useDispatch();
 
  const { productList, productDetails } = useSelector(
    (state) => state.shopProducts
  );
  const {user}=useSelector(state=>state.auth)
  const { cartItems } = useSelector((state) => state.shopCart);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false); // ✅

  const handleSort = (value) => {
    setSort(value);
  };

  const handleFilter = (getSectionId, getCurrentOption) => {
    let cpyFilters = { ...filters };
    const indexOfCurrentSection = Object.keys(cpyFilters).indexOf(getSectionId);

    if (indexOfCurrentSection === -1) {
      cpyFilters = {
        ...cpyFilters,
        [getSectionId]: [getCurrentOption],
      };
    } else {
      const indexOfCurrentOption =
        cpyFilters[getSectionId].indexOf(getCurrentOption);

      if (indexOfCurrentOption === -1)
        cpyFilters[getSectionId].push(getCurrentOption);
      else cpyFilters[getSectionId].splice(indexOfCurrentOption, 1);
    }

    setFilters(cpyFilters);
    sessionStorage.setItem("filters", JSON.stringify(cpyFilters));
  };



  useEffect(() => {
    setSort("price-lowtohigh");
    setFilters(JSON.parse(sessionStorage.getItem("filters")) || {});
  }, []);

  useEffect(() => {
    if (filters && Object.keys(filters).length > 0) {
      const createQueryString = createSearchParamsHelper(filters);
      setSearchParams(new URLSearchParams(createQueryString));
    }
  }, [filters]);

  useEffect(() => {
    if (filters !== null && sort !== null)
      dispatch(
        fetchAllFilteredProducts({ filterParams: filters, sortParams: sort })
      );
  }, [dispatch, sort, filters]);
console.log(productDetails);

  
  const handleGetProductDetails = (getCurrentProductId) => {
    if (!getCurrentProductId) {
      console.error("❌ No product ID provided to fetchProductDetails");
      return;
    }

    console.log("📦 Get product details:", getCurrentProductId);
    dispatch(fetchProductDetails(getCurrentProductId)).then(() => {
      setOpenDetailsDialog(true); // ✅ Open the dialog after details are fetched
    });
  };

  const handleAddToCart = (getCurrentProductId) => {
    console.log("Add to cart:", getCurrentProductId);
    dispatch(addToCart({userId:user?.id ,productId:getCurrentProductId,quantity:1})).then((data)=>{
 
      if(data?.payload?.success){
           dispatch(fetchCartItems(user?.id))
      }
      
    })
  };

  const handleBuyNow = (product) => {
    console.log("Buy now:", product);
  };


  return (
    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 p-4 md:p-6">
      <ProductFilter filters={filters} handleFilter={handleFilter} />
      <div className="bg-background w-full rounded-lg shadow-sm">
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="text-lg font-extrabold">All Products</h2>
          <div className="flex items-center gap-3">
            <span className="text-muted-foreground">
              {Array.isArray(productList) ? productList.length : 0} Products
            </span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <ArrowUpDownIcon className="h-4 w-4" />
                  <span>Sort by</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuRadioGroup value={sort} onValueChange={handleSort}>
                  {sortOptions.map((sortItem) => (
                    <DropdownMenuRadioItem
                      value={sortItem.id}
                      key={sortItem.id}
                    >
                      {sortItem.label}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {Array.isArray(productList) && productList.length > 0 ? (
            productList.map((productItem) => (
              <ShopProductCard
                key={productItem._id}
                product={productItem}
                handleAddToCart={handleAddToCart}
                handleBuyNow={handleBuyNow}
                handleGetProductDetails={handleGetProductDetails} // ✅ Pass the handler
                     cartItems={cartItems.items || []} // ✅ pass cart items
               
              />
            ))
          ) : (
            <p className="col-span-full text-center text-muted-foreground">
              No products found.
            </p>
          )}
        </div>
      </div>

      {/* ✅ PRODUCT DETAILS POPUP */}
      <ProductDetails
        open={openDetailsDialog}
        setOpen={setOpenDetailsDialog}
        productDetails={productDetails}
        cartItems={cartItems.items || []}
       
      />
    </div>
  );
};

export default Listing;
