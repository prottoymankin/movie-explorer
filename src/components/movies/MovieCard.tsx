import type { Show } from "../../types/show.types";
import star from "../../assets/star.png";
import noImage from "../../assets/no-image.jpg";

type MovieCardProps = {
  show: Show;
  onShowDetails: (show: Show | null) => void;
};

const MovieCard = ({ show, onShowDetails }: MovieCardProps) => {

  return (

    <>
      <div className="bg-surface-2 border border-line flex flex-col overflow-hidden rounded-2xl">
        
        <div className="h-60 w-full overflow-hidden">
          <img
            src={show.image?.original || noImage}
            alt={show.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex-1 flex flex-col gap-4 p-4">
          <h2 className="font-semibold line-clamp-1 text-xl">{show.name}</h2>

          <p className="flex-1 line-clamp-2 text-sm">
            {show.summary?.replace(/<[^>]*>/g, "") || "There is no summary available."}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex gap-1 items-center">
              <img 
                alt="" 
                className="h-3"
                src={star} 
              />

              <p className="text-sm">{show.rating?.average ?? "N/A"}</p>
            </div>

            <p className="text-sm">{show.premiered || "N/A"}</p>
          </div>

          <button
            className="active:scale-95 bg-accent hover:bg-accent-hover cursor-pointer duration-200 font-semibold py-2 rounded-full text-accent-ink transition w-full"
            onClick={() => onShowDetails(show)}
          >
            See Details
          </button>
        </div>

      </div>
    </>

  );

};

export default MovieCard;