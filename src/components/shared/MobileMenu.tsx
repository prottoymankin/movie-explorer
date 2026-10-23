import { X } from "lucide-react";
import { NavLink } from "react-router";

type MobileMenuProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileMenu = ({ isMenuOpen, setIsMenuOpen }: MobileMenuProps) => {

  return (

    <div className={`bg-surface duration-300 fixed h-dvh inset-0 transition z-50 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>

      <div className="flex flex-col font-medium gap-5 items-center pt-15 relative">
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

        <button
          className="absolute bg-ink/70 border border-line hover:border-accent-hover cursor-pointer flex h-8 items-center justify-center right-2 rounded-full hover:text-accent-hover top-3 w-8"
          onClick={() => setIsMenuOpen(false)}
        >
          <X className="size-4" />
        </button>
      </div>


    </div>

  );

};

export default MobileMenu;