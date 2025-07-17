import Slider from "react-slick";
import Banner1 from "../../assets/Banner1.png";
import Banner2 from "../../assets/Banner2.png";
import Banner3 from "../../assets/Banner3.png";
import { Button } from "../../components/ui/button";
import CircularGallery from '../../components/Circular.jsx'
import { Link } from "react-router-dom";
import Curved from '../../components/Curved.jsx'
import { useNavigate } from "react-router-dom";

const Home = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
  };

  const banners = [Banner1, Banner2, Banner3];
  const navigate=useNavigate()
  const gotolist=()=>{
   navigate('/shop/list')
  }
  return (
    <div className="w-full">
      {/* Banner Carousel */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] overflow-hidden">
        <Slider {...settings} className="w-full h-full">
          {banners.map((banner, index) => (
            <div key={index} className="w-full h-full">
              <img
                src={banner}
                alt={`Banner ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
<div className="hidden md:block max-h-96 overflow-hidden">

     <Curved
marqueeText="Fragenzo ✦ For ✦ Him ✦ For ✦ Her ✦ For ✦ You ✦"

  speed={3}
  curveAmount={-200}
  direction="right"
  interactive={true}
  className="text-black"
/>
</div>
 <span className="flex justify-center text-xl sm:text-2xl font-bold">
  Categories
</span>

<div className="w-full flex flex-wrap justify-center gap-2 md:gap-4 lg:gap-6 py-6">
  {["Men", "Women", "Unisex"].map((label) => (
    <Link key={label} to="/shop/list" className="no-underline">
      <Button className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white text-black border border-gray-300 hover:bg-gray-100 shadow-md rounded-full text-base sm:text-lg font-semibold flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
        {label}
      </Button>
    </Link>
  ))}
</div>

<span className="flex justify-center font-bold text-xl sm:text-2xl">
  Collaboration
</span>

<div className="grid grid-cols-4 gap-4 place-items-center py-6">
  {[
    "Chanel",
    "Dior",
    "Gucci",
    "Armani",
    "Versace",
    "Tom Ford",
    "Hugo Boss",
    "Burberry",
    "Hermès",
    "Jo Malone",
    "Bvlgari",
    "Prada",
    "Lacoste",
    "Mont Blanc",
    "Coach",
    "more...",
  ].map((brand) => (
    <span
      key={brand}
      className="w-20 h-20 bg-white text-black border border-gray-300 hover:bg-gray-100 shadow-lg text-sm font-semibold flex items-center justify-center text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
    >
      {brand}
    </span>
  ))}
</div>



<span className="flex justify-center font-bold text-xl sm:text-2xl pt-20">
Featured Products</span>


<div className="relative w-full h-[50vh] sm:h-[30vh] md:h-[70vh] lg:h-[85vh] xl:h-[100vh] max-h-[800px] overflow-hidden"onClick={gotolist}>
  <CircularGallery
    bend={3}
    textColor="#000"
    borderRadius={0.05}
    scrollEase={0.02}
  />
</div>



    </div>
  );
};

export default Home;
