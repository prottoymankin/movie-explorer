import { useState } from "react";
import type { Show } from "../../types/show.types";
import MovieCard from "./MovieCard";
import MovieDetailsModal from "./MovieDetailsModal";

type MovieCardsProps = {
  shows: Show[]
};

const MovieCards = ({ shows }: MovieCardsProps) => {

  const [selectedShow, setSelectedShow] = useState<Show | null>(null)

  const getSelectedShow = (show: Show | null) => {
    setSelectedShow(show);
  };

  return (

    <>
      <div className="gap-4 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 rounded-2xl">
        {
          shows.map(show => (
            <MovieCard
              key={show.id}
              show={show}
              onShowDetails={getSelectedShow}
            />
          ))
        }
      </div>

      {
        selectedShow && (
          <MovieDetailsModal
            show={selectedShow}
            onShowDetails={getSelectedShow}
          />
        )
      }
    </>

  );

};

export default MovieCards;