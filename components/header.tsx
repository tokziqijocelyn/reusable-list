import React from "react";

type Props = {
  header: string;
};

const Header = ({ header }: Props) => {
  return (
    <div className="p-3 border-b-1 border-grey-400">
      <div>{header}</div>
    </div>
  );
};

export default Header;
