import React from "react";
import Header from "../header";
import Footer from "../footer";

type Props = {
  header?: string;
  footer?: string;
  children: React.ReactNode;
};

const DefaultList = ({ header, footer, children }: Props) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <div className="bg-white p-2 rounded border-red-100">
      {header && <Header header={header} />}

      {childrenArray.map((child, index) => (
        <div key={index}>{child}</div>
      ))}

      {footer && <Footer footer={footer} />}
    </div>
  );
};

export default DefaultList;
