import { Link } from "react-router";
import heart from "../../assets/heart.png";
import logo from "../../assets/logo.png";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";

const Footer = () => {

  return (

    <footer className="border-t border-t-line px-5 text-muted text-sm">

      <div className="flex flex-col md:flex-row gap-8 justify-between max-w-7xl mx-auto py-5">
        <div className="space-y-5">
          <Link
            className="flex gap-2 items-center"
            to={"/"}
          >
            <img
              className="h-10"
              src={logo} 
              alt="" 
            />

            <span className="font-display text-text text-3xl">
              MOVIE<span className="text-accent">EXPLORER</span>
            </span>
          </Link>

          <p className="max-w-xs">
            Browse, search and discover shows. Ratings, summaries and details in one place.
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-base text-text">Quick Links</h4>
          
          <div className="flex flex-col gap-1">
            <Link className="hover:text-accent-hover" to={"/"}>Home</Link>
            <Link className="hover:text-accent-hover" to={"/"}>Movies</Link>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-base text-text">Social</h4>

          <div className="flex gap-2 items-center">
            <a 
              aria-label="Github"
              className="border border-line flex h-10 items-center justify-center rounded-full w-10"
              href="https://github.com/prottoymankin"
              target="_blank"
            >
              <FaGithub className="size-5" />
            </a>

            <a 
              aria-label="Github"
              className="border border-line flex h-10 items-center justify-center rounded-full w-10"
              href="https://www.facebook.com/Prottoy.Mankin/"
              target="_blank"
            >
              <FaFacebookF className="size-4" />
            </a>

            <a 
              aria-label="Github"
              className="border border-line flex h-10 items-center justify-center rounded-full w-10"
              href="https://www.linkedin.com/in/prottoymankin/"
              target="_blank"
            >
              <TiSocialLinkedin className="size-5" />
            </a>
          </div>
        </div>
      </div>

      <div 
        className="border-t border-t-line flex flex-col md:flex-row gap-5 justify-between max-w-7xl mx-auto text-center md:text-left w-full py-5"
      >
        <p>
          © {new Date().getFullYear()} MOVIEEXPLORER. All rights reserved.
        </p>

        <p className="flex gap-1 items-center justify-center">
          <img 
            alt=""
            className="h-5" 
            src={heart}
          />

          Created by Protoy Mankin
        </p>
      </div>
      
    </footer>

  );

};

export default Footer;