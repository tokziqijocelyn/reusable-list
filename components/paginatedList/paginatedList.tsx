import React, { forwardRef } from "react";
import "../../global.css";
import PageNumbers from "./pageNumbers";
import Header from "../header";
import { cn } from "../../lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

//disabled style
// const accordionVariants = cva("bg-header", {
//   variants: {
//     variant: {
//       default: "text-contentText",
//       disabled: "text-disabledText ",
//     },
//   },
//   defaultVariants: {
//     variant: "default",
//   },
// });

const paginatedVariant = cva("flex", {
  variants: {
    variant: {
      default: "flex flex-col flex-grow:1",
      horizontal: "flex flex-row flex-grow:1",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface PaginatedListProps
  extends VariantProps<typeof paginatedVariant> {
  itemsPerPage: number;
  children: React.ReactNode;
  header?: string;
  horizontal?: boolean;
}

const PaginatedList = forwardRef<HTMLDivElement, PaginatedListProps>(
  ({ children, variant, ...props }, forwardRef) => {
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
        {props.header && <Header header={props.header} />}
        <div className={cn(paginatedVariant({ variant }))}>
          {currentPosts.map((item, index) => {
            const child = childrenArray[index];
            const { children } = React.isValidElement(child)
              ? child.props
              : { children: null };
            return <div key={index}>{children}</div>;
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
  }
); // Add closing parenthesis here

export default PaginatedList;
