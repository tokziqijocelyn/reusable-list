import React from "react";

type Props = {
  footer: string;
};

const Footer = ({ footer }: Props) => {
  return (
    <div className="p-3 border-t-1 border-grey-400">
      <div>{footer}</div>
    </div>
  );
};

export default Footer;
