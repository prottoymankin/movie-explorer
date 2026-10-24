import type { Show } from "../../types/show.types";
import MovieCard from "./MovieCard";

type MovieCardsProps = {
  shows: Show[]
};

const MovieCards = ({ shows }: MovieCardsProps) => {

  return (

    <div className="gap-4 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-10 rounded-2xl">
      {
        shows.map(show => (
          <MovieCard
            key={show.id}
            show={show}
          />
        ))
      }
    </div>

  );

};

export default MovieCards;