import { Link } from "react-router";
import heroBg from "../../assets/hero-bg.svg";

const Hero = () => {

  return (

    <div className="flex flex-col items-center justify-center min-h-dvh relative text-center">
      
      <div className="absolute inset-0 -z-10">
        <img 
          alt="" 
          className="h-full object-cover w-full"
          src={heroBg} 
        />
      </div>

      <h1 className="font-display leading-none text-[clamp(65px,10vw,100px)]">
        Find your next<br/>favorite show
      </h1>

      <p className="font-medium max-w-130 mb-8 mt-3 text-lg text-muted">
        Search thousands of series, check ratings and release years, and read the full story before you press play.
      </p>

      <Link
        className="bg-accent hover:bg-accent-hover duration-300 font-semibold px-8 py-4 rounded-full text-accent-ink transition"
        to={"/movies"}
      >
        Start Exploring
      </Link>
      
    </div>

  );

};

export default Hero;