import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    
    <nav
      className="backdrop-blur-xl bg-surface/80 border border-line fixed flex items-center justify-between xl:left-1/2 xl:max-w-6xl px-6 py-3 xl:rounded-full xl:top-5 xl:-translate-x-1/2 w-full"
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
        onClick={() => setIsMenuOpen(prev => !prev)}
      >
        { isMenuOpen ? <X /> : <Menu /> }
      </button>
      
    </nav>

  );

};

export default Navbar;