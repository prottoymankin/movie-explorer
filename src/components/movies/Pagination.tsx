type PaginationProps = {
  pages: number[];
  onPageChange: (page: number) => void;
};

const Pagination = ({ pages, onPageChange }: PaginationProps) => {

  return (

    <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
      {pages.map((page) => (
        <button
          className="bg-accent hover:bg-accent-hover cursor-pointer font-medium h-10 rounded-lg text-accent-ink text-lg w-10" 
          key={page}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>

  );
  
};

export default Pagination;