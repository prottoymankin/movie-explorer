import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import type { Show } from "../types/show.types";
import { getSearchShows, getShows } from "../services/shows.services";
import MovieCards from "../components/movies/MovieCards";
import Loader from "../components/shared/Loader";
import Pagination from "../components/movies/Pagination";
import NoSearchResults from "../components/movies/NoSearchResults";
import toast from "react-hot-toast";

const Movies = () => {

  const [shows, setShows] = useState<Show[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Show[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    const value = e.target.value;
    if (!value) setIsLoading(false);
    setSearchQuery(value);
  };

  const displayedShows = searchQuery.trim() ? searchResults : shows;

  const showsPerPage = 12;

  const totalPage = Math.ceil(displayedShows.length / showsPerPage);

  const pages = Array.from(
    { length: totalPage },
    (_, index) => index + 1
  );

  const hanndlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * showsPerPage;
  const currentShows = displayedShows.slice(startIndex, startIndex + showsPerPage);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const data = await getShows();
        setShows(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          toast.error(error.message);
        } else {
          toast.error("An unexpected error occured.");
        }
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchShows();
  }, []);

  useEffect(() => {
    const query = searchQuery.trim();

    if (!query) return;

    const timer = setTimeout(async () => {
      try {
        const result = await getSearchShows(query);
        setSearchResults(result);
        setCurrentPage(1);
      } catch (error:unknown) {
        if (error instanceof Error) {
          toast.error(error.message);
        }
        toast.error("An unexpected error occured.");
      } finally {
        setIsLoading(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

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
            onChange={handleSearch}
            placeholder="Search by title e.g. John Wick"
            type="text" 
          />
        </div>

        {
          isLoading ? (
            <Loader />
          ) : currentShows.length > 0 ? (
            <div className="py-10">
              <MovieCards shows={currentShows} />

              {
                totalPage > 1 && (
                  <Pagination
                    pages={pages}
                    onPageChange={hanndlePageChange}
                  />
                )
              }
            </div>
          ) : (
            <NoSearchResults />
          )
        }

      </div>

    </div>

  );

};

export default Movies;