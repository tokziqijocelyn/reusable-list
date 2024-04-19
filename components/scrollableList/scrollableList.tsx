import React from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
// import "../../global.css";
import "../global.css";

export type virtualizerProps = {
  horizontal?: boolean;
  children: React.ReactNode;
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
};

const ScrollableList = React.forwardRef<HTMLDivElement, virtualizerProps>(
  ({ children, width = "full", height = "400px", ...props }, forwardedRef) => {
    const parentRef = React.useRef<HTMLDivElement>(null);

    const childrenArray = React.Children.toArray(children);

    const virtualizer = useVirtualizer({
      horizontal: props.horizontal ?? false,
      count: childrenArray.length,
      getScrollElement: () => parentRef.current,
      estimateSize: () => 50,
    });

    const items = virtualizer.getVirtualItems();

    return (
      <>
        <div
          ref={parentRef}
          style={{
            height: height,
            width: width,
            overflow: "auto",
          }}
          className="bg-red-100"
        >
          <div
            style={{
              height: `${virtualizer.getTotalSize()}px`,
              width: "100%",
              position: "relative",
            }}
          >
            {items.map((virtualItem) => {
              const child = childrenArray[virtualItem.index];
              const { children } = React.isValidElement(child)
                ? child.props
                : { children: null };

              return (
                <div
                  key={virtualItem.key}
                  data-index={virtualItem.index}
                  ref={virtualizer.measureElement}
                >
                  <div className="bg-blue-100">{children}</div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
);

export default ScrollableList;
