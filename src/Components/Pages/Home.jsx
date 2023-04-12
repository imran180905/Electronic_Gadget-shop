import { Link } from "react-router-dom";
import image from "../../assets/hero.jpg";

const Home = () => {
  return (
    <section>
      <div className="bg-gray-200 text-center flex flex-col items-center max-sm:py-20 lg:py-44">
        <div className="text-gray-900 ">
          <p className="text-2xl md:text-4xl lg:text-6xl font-bold lg:leading-tight lg:max-w-3xl title-text w-full">
            Welcome To HeroGadget
          </p>
          <p className=" mx-auto text-xs sm:text-base md:text-lg max-w-2/3 md:max-w-xl max-w-2xl mt-4 mb-6">
            Best E-commerce platform for buying high quality Smart Home
            Appliances at extremely affordable Price.
          </p>
        </div>
        <div className="">
          <Link to="/Shop">
            <button
              className=" btn-primary
            "
              type="button"
            >
              Shop Now
            </button>
          </Link>
          <Link to="/about">
            <button type="button" className="btn-outlined">
              Learn More
            </button>
          </Link>
        </div>
      </div>
      <div className=" flex justify-center items-center">
        <img
          src={image}
          className=" w-4/5 h-auto mb-12 -mt-12 lg:-mt-36 rounded-lg shadow-md bg-gray-500"
        ></img>
      </div>
    </section>
  );
};
export default Home;
