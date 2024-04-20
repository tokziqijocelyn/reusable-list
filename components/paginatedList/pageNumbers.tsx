import React from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

type PageProps = {
  itemsPerPage: number;
  totalItems: number;
  paginate: (pageNumber: number) => void;
  previousPage: () => void;
  nextPage: () => void;
};

const PageNumbers = ({
  itemsPerPage,
  totalItems,
  paginate,
  previousPage,
  nextPage,
}: PageProps) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex flex-row">
      <ul className="pagination">
        <li onClick={previousPage} className="page-number">
          <ChevronLeft />
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => paginate(number)}
            className="p-2 rounded curser-pointer border-primary border-1 text-primary"
          >
            {number}
          </li>
        ))}
        <li onClick={nextPage} className="page-number">
          <ChevronRight />
        </li>
      </ul>
    </div>
  );
};

export default PageNumbers;
