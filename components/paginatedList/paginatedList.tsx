import React, { forwardRef } from "react";
import "../../global.css";
import PageNumbers from "./pageNumbers";

export type PaginatedListProps = {
  itemsPerPage: number;
  children: React.ReactNode;
};


const PaginatedList = ({ children, ...props }: PaginatedListProps) => {
  // Storage of info of pages
  // So that user can pass their own children
  const childrenArray = React.Children.toArray(children);
  const arrayCount = childrenArray.length;
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(props.itemsPerPage);

  // Getting the indexes required per page
  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentPosts = childrenArray.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(childrenArray.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <div>
        {currentPosts.map((item, index) => {
          const child = childrenArray[index];
          const { children } = React.isValidElement(child)
            ? child.props
            : { children: null };
          return (
            <div key={index} className="bg-blue-500 p-5">
              {children}
            </div>
          );
        })}

        <PageNumbers
          itemsPerPage={itemsPerPage}
          totalItems={arrayCount}
          paginate={paginate}
          previousPage={previousPage}
          nextPage={nextPage}
        />
      </div>
    </div>
  );
};

export default PaginatedList;
