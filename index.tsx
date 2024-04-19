// import React from "react";
// import { useVirtualizer } from "@tanstack/react-virtual";

// export interface listProps extends React.HTMLAttributes<HTMLDivElement> {
//   header?: string;
//   footer?: string;
//   scrollable: boolean;
//   //dim: "fixed" | "dynamic";
//   //pagination?
//   pages?: number;
//   horizontal?: boolean;
//   children: React.ReactNode;
//   data: unknown[];
// }

// const List = (props: listProps) => {
//   return (
//     <div className="bg-white rounded p-2">
//       {props.header && <HeaderFooter title={props.header} />}
//       <div>{props.children}</div>

//       {/* {props.scrollable ? (
//         <div>
//           <Virtualizer data={props.data}>{props.children}</Virtualizer>
//         </div>
//       ) : (
//         <div>
//           {props?.data.map((item, index) => {
//             return (
//               <div key={index} className="flex flex-row">
//                 {props.children}
//               </div>
//             );
//           })}
//         </div>
//       )} */}

//       {props?.data.map((item, index) => {
//         return (
//           <div key={index} className="flex flex-row">
//             {props.children}
//           </div>
//         );
//       })}

//       {props.footer && <HeaderFooter title={props.footer} />}
//     </div>
//   );
// };

// const HeaderFooter = ({ title }: { title: string }) => {
//   return (
//     <div className="p-2 flex flex-col">
//       <h1 className="text-3xl">{title}</h1>
//       <hr />
//     </div>
//   );
// };

// export type virtualizerProps = {
//   data: unknown[];
//   horizontal?: boolean;
//   children: React.ReactNode;
// };


// const Virtualizer = React.forwardRef<HTMLDivElement, virtualizerProps>(
//   ({ children, data, ...props }, forwardedRef) => {
//     const count = data.length;
//     const parentRef = React.useRef<HTMLDivElement>(null);

//     const virtualizer = useVirtualizer({
//       horizontal: props.horizontal ?? false,
//       count,
//       getScrollElement: () => parentRef.current,
//       estimateSize: () => 50,
//     });

//     const items = virtualizer.getVirtualItems();

    
//     return (
//       <div ref={parentRef} className="bg-red-100">
//         <div className="overflow-y-auto h-full">
//           {/* Container with vertical scroll */}
//           <div className="relative w-full">
//             {/* Inner container for positioning */}
//             <div
//               className={`absolute top-0 left-0 w-full transform translate-y-${
//                 items[0]?.start ?? 0
//               }px`}
//             >
//                 {/* Logic of the children is dealt elsewhere*/}
//               {items.map((virtualRow) => (
//                 <div
//                   key={virtualRow.key}
//                   data-index={virtualRow.index}
//                   ref={virtualizer.measureElement}
//                   className={`py-4 px-0 border-b border-gray-200`}
//                 >
//                   <div className="flex items-center justify-between">
//                     <div>Row {virtualRow.index}</div>
//                     <div>{children}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// );

// export default List;

// test if I can get recent one or not
export type exampleType ={
    example: number
    // another: string
}
export * from "./components"