import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import type { Show } from "../types/show.types";
import { getShows } from "../services/shows.services";
import MovieCards from "../components/movies/MovieCards";
import Loader from "../components/shared/Loader";
import Pagination from "../components/movies/Pagination";

const Movies = () => {

  const [shows, setShows] = useState<Show[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const showsPerPage = 12;

  const totalPage = Math.ceil(shows.length / showsPerPage);

  const pages = Array.from(
    { length: totalPage },
    (_, index) => index + 1
  );

  const hanndlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * showsPerPage;
  const currentShows = shows.slice(startIndex, startIndex + showsPerPage);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const data = await getShows();
        setShows(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.log(error.message);
        } else {
          console.log("An unexpected error occured.");
        }
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchShows();
  }, []);

  return (

    <div className="px-5">

      <div className="pt-30 lg:pt-35 max-w-7xl mx-auto">
        
        <h2 className="font-display text-[clamp(50px,7vw,60px)]">
          browse movies
        </h2>

        <div className="mt-4 relative">
          <Search  className="absolute left-5 size-5 text-muted top-1/2 -translate-y-1/2"/>

          <input
            className="bg-surface/80 border border-line focus:border-accent max-w-xl outline-0 pl-15 py-4 rounded-full text-sm sm:text-base w-full" 
            placeholder="Search by title e.g. John Wick"
            type="text" 
          />
        </div>

        {
          isLoading ? (
            <Loader />
           ): (
            <div className="py-10">
              <MovieCards shows={currentShows} />

              <Pagination
                pages={pages}
                onPageChange={hanndlePageChange}
              />
            </div>
           )
        }

      </div>

    </div>

  );

};

export default Movies;