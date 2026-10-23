import { Search } from "lucide-react";

const Movies = () => {

  return (

    <div className="px-5">

      <div className="pt-30 lg:pt-35 max-w-7xl mx-auto">
        
        <h2 className="font-display text-[clamp(50px,7vw,60px)]">
          browse movies
        </h2>

        <div className="mb-6 mt-4 relative">
          <Search  className="absolute left-5 size-5 text-muted top-1/2 -translate-y-1/2"/>

          <input
            className="border border-line focus:border-accent max-w-xl outline-0 pl-15 py-4 rounded-full text-sm sm:text-base w-full" 
            placeholder="Search by title e.g. John Wick"
            type="text" 
          />
        </div>

      </div>

    </div>

  );

};

export default Movies;