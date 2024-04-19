import React from "react";
import { VirtualItem, Virtualizer } from "@tanstack/react-virtual";

export type VirtualItemProp = {
  items: VirtualItem[];
  virtualizer: Virtualizer<HTMLDivElement, Element>;
  children: React.ReactNode;
};

const ScrollableListItem = ({ 
  items, 
  virtualizer, 
  children }: VirtualItemProp) => {
  return (
    <div>
      {items.map((virtualRow) => (
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
      ))}
    </div>
  );
};

export default ScrollableListItem;
