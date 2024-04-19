import React from "react";
import { useVirtualizer } from "@tanstack/react-virtual";

export type virtualizerProps = {
  horizontal?: boolean;
  children: React.ReactNode;
  count: number;
};

const ScrollableList = React.forwardRef<HTMLDivElement, virtualizerProps>(
  ({ children, ...props }, forwardedRef) => {
    const parentRef = React.useRef<HTMLDivElement>(null);

    const virtualizer = useVirtualizer({
      horizontal: props.horizontal ?? false,
      count: props.count,
      getScrollElement: () => parentRef.current,
      estimateSize: () => 50,
    });

    const items = virtualizer.getVirtualItems();

    return (
      <div ref={parentRef} className="bg-red-100">
        <div className="overflow-y-auto h-full">
          {/* Container with scrolling */}
          <div className="relative w-full">
            {/* Inner container for positioning */}
            <div
              className={`absolute top-0 left-0 w-full transform translate-y-${
                items[0]?.start ?? 0
              }px`}
            >
              {/* {items.map((virtualRow) => (
                <div
                  key={virtualRow.key}
                  data-index={virtualRow.index}
                  ref={virtualizer.measureElement}
                  className={`py-4 px-0 border-b border-gray-200`}
                >
                  <div className="flex items-center justify-between">
                    <div>Row {virtualRow.index}</div>
                    <div>{children}</div>
                  </div>
                </div>
              ))} */}
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default ScrollableList;
