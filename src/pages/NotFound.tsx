import { Link } from "react-router";
import error404 from "../assets/error-404.png";

const NotFound = () => {

  return (

    <div className="flex flex-col gap-5 h-dvh items-center justify-center">
      <img 
        alt=""
        className="h-40" 
        src={error404} 
      />
      
      <h2 className="font-display text-5xl leading-6">
        Bro Got Lost 
      </h2>

      <p className=" text-muted">
        Bro really thought this page existed.
      </p>

      <Link
        className="active:scale-95 bg-accent hover:bg-accent-hover cursor-pointer duration-200 font-semibold py-2 px-4 rounded-full text-accent-ink transition"
        to={"/"}
      >
        Get Me Outta Here
      </Link>
    </div>

  );

};

export default NotFound;