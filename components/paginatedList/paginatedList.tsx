import React, { forwardRef, useEffect } from "react";
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

    const [items, setItems] = React.useState<React.ReactNode[]>(childrenArray);
    const arrayCount: number = childrenArray.length;
    const [currentPage, setCurrentPage] = React.useState<number>(1);
    const [itemsPerPage, setItemsPerPage] = React.useState<number>(
      props.itemsPerPage
    );

    // so there is no re-render of the items
    useEffect(() => {
      setItems(childrenArray);
    }, []);

    useEffect(() => {
      console.log("render of itemslist", items);
    }, [items]);

    // Getting the indexes required per page
    const indexOfLastPost = currentPage * itemsPerPage;

    //indexOfFirstPost doesn't go beyond the actual number of elements.
    const indexOfFirstPost = Math.min(
      (currentPage - 1) * itemsPerPage,
      items.length - 1
    );

    const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);

    // const currentPosts = items.slice(3, );

    // useEffect(() => {
    //   console.log("render of currentPosts", currentPosts);
    //   console.log("indexOfFirstPost", indexOfFirstPost);
    //   console.log("indexOfLastPost", indexOfLastPost);
    // }, [currentPosts]);

    const paginate = (pageNumber: number) => {
      setCurrentPage(pageNumber);
    };
    const previousPage = () => {
      if (currentPage !== 1) {
        setCurrentPage(currentPage - 1);
      }
    };

    const nextPage = () => {
      if (currentPage !== Math.ceil(items.length / itemsPerPage)) {
        setCurrentPage(currentPage + 1);
      }
    };

    return (
      <div className="">
        {props.header && <Header header={props.header} />}
        <div className={cn(paginatedVariant({ variant }))}>
          {currentPosts.map((item, index) => {
            // const child = items[index];

            // console.log("child", child);

            // //            console.log("child", index);
            // const { children } = React.isValidElement(child)
            //   ? child.props
            //   : { children: null };
            // return <div key={index}>{children}</div>;

            return <div key={index}>{item}</div>;
          })}
        </div>

        <div className="flex justify-end">
          <PageNumbers
            itemsPerPage={itemsPerPage}
            totalItems={arrayCount}
            paginate={paginate}
            previousPage={previousPage}
            nextPage={nextPage}
            currentPage={currentPage}
          />
        </div>

        {children}
      </div>
    );
  }
); // Add closing parenthesis here

export default PaginatedList;
