import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { Menu } from "lucide-react";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav
        className="backdrop-blur-xl bg-surface/80 border border-line fixed flex items-center justify-between left-5 xl:left-1/2 max-w-7xl px-6 py-3 right-5 rounded-full top-5 xl:-translate-x-1/2 xl:w-full z-20"
      >

        <Link
          className="flex gap-2 items-center"
          to={"/"}
        >
          <img
            className="h-10"
            src={logo} 
            alt="" 
          />

          <span className="font-display text-3xl">
            MOVIE<span className="text-accent">EXPLORER</span>
          </span>
        </Link>

        <div className="sm:flex font-medium gap-5 hidden items-center">
          <NavLink
            className={({isActive}) => `${isActive ? "text-text" : "text-muted"} duration-200 hover:text-text transform`}
            to={"/"}
          >
            HOME
          </NavLink>

          <NavLink
            className={({isActive}) => `${isActive ? "text-text" : "text-muted"} duration-200 hover:text-text transform`}
            to={"/movies"}
          >
            MOVIES
          </NavLink>
        </div>

        <button 
          className="cursor-pointer sm:hidden"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu />
        </button>
        
      </nav>

      <MobileMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </>
  );

};

export default Navbar;