import searchNotFound from "../../assets/search-not-found.png";

const NoSearchResults = () => {

  return (

    <div className="flex flex-col min-h-100 items-center justify-center">
      <img 
        alt="" 
        className="h-40"
        src={searchNotFound} 
      />

      <h2 className="font-display text-3xl">
        No Shows Found
      </h2>

      <p className="max-w-87 text-center text-muted text-sm">
        We couldn't find any shows matching your search. Try a different title or check your spelling.
      </p>
    </div>

  );

};

export default NoSearchResults;