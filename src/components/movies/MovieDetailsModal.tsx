import { X } from "lucide-react";
import type { Show } from "../../types/show.types";
import star from "../../assets/star.png";
import { useEffect } from "react";
import noImage from "../../assets/no-image.jpg";

type MovieDetailsModalProps = {
  show: Show;
  onShowDetails: (show: Show | null) => void;
};

const MovieDetailsModal = ({ show, onShowDetails }: MovieDetailsModalProps) => {

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (

    <div 
      className="bg-black/80 fixed flex inset-0 items-center justify-center min-h-dvh w-full z-50"
      onClick={() => onShowDetails(null)}
    >
      
      <div 
        className="bg-surface border border-line h-dvh lg:h-130 lg:max-w-3xl px-10 py-5 relative rounded-xl scrollbar-none space-y-5 w-full overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >

        <button
          className="absolute bg-ink/70 border border-line hover:border-accent-hover cursor-pointer flex h-8 items-center justify-center right-2 rounded-full hover:text-accent-hover top-3 w-8"
          onClick={() => onShowDetails(null)}
        >
          <X className="size-4" />
        </button>

        <div className="flex flex-col lg:flex-row gap-5 items-center">
          <div className="h-80 overflow-hidden rounded-xl w-fit">
            <img 
              alt="" 
              src={show.image?.original || noImage} 
              className="h-full"
            />
          </div>

          <div className="lg:flex-1 space-y-5 w-full">
            <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl">
              {show.name}
            </h2>

            <div className="gap-5 grid grid-cols-2">
              <div className="space-y-1">
                <p className="font-semibold text-muted text-xs">
                  Release Date
                </p>

                <p className="hyphens-auto text-justify text-sm">
                  {show.premiered || "N/A"}
                </p>
              </div>

              <div className="space-y-1">
                <p className="font-semibold text-muted text-xs">
                  Rating
                </p>

                <div className="flex gap-1 items-center">
                  <img 
                    alt="" 
                    className="h-3"
                    src={star} 
                  />

                  <p className="hyphens-auto text-justify text-sm">
                    {show.rating.average || "N/A"}
                  </p>
                </div>
              </div>
            </div>

            <div className="gap-5 grid grid-cols-2">
              <div className="space-y-1">
                <p className="font-semibold text-muted text-xs">
                  Runtime
                </p>
                
                <p className="hyphens-auto text-justify text-sm">
                  {
                    show.runtime ? `${show.runtime} Minutes` : "N/A"
                  }
                </p>
              </div>

              <div className="space-y-1">
                <p className="font-semibold text-muted text-xs">
                  Language
                </p>

                <p className="hyphens-auto text-justify text-sm">
                  {show.language || "N/A"}
                </p>
              </div>
            </div>

            <div className="space-y-1">
              <p className="font-semibold text-muted text-xs">
                Genres
              </p>
              
              <p className="hyphens-auto text-justify text-sm">
                { show.genres.join(", ") || "N/A"}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <p className="font-semibold text-muted text-xs">
            Summary
          </p>

          <p className="hyphens-auto text-justify text-sm">
            {show.summary?.replace(/<[^>]*>/g, "") || "There is no summary available."}
          </p>
        </div>

      </div>

    </div>

  );

};

export default MovieDetailsModal;