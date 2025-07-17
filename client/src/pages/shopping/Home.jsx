import Slider from "react-slick";
import Banner1 from "../../assets/Banner1.png";
import Banner2 from "../../assets/Banner2.png";
import Banner3 from "../../assets/Banner3.png";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Curved from '../../components/Curved.jsx'
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
  const navigate = useNavigate();
  return (
    <div className="w-full">
      {/* Banner Carousel */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
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
<div className="max-h-96">

     <Curved
marqueeText="Fragenzo ✦ For ✦ Him ✦ For ✦ Her ✦ For ✦ You ✦"

  speed={3}
  curveAmount={-200}
  direction="right"
  interactive={true}
 className="fill-black"
/>
</div>
      <span className="flex justify-center  text-xl sm:text-2xl font-bold">
        Categories
      </span>

     <div className="w-full flex flex-wrap justify-center gap-2 sm:gap-8 md:gap-4 lg:gap-6 py-6">
  {["Men", "Women", "Unisex"].map((label) => (
    <Link
      key={label}
      to={"/shop/list"}
      className="no-underline"
    >
      <Button className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white text-black border border-gray-300 hover:bg-gray-100 shadow-md rounded-full text-base sm:text-lg font-semibold flex items-center justify-center">
        {label}
      </Button>
    </Link>
  ))}
</div>

    </div>
  );
};

export default Home;
