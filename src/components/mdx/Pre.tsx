import React from "react";

const Pre: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return <pre>{children}</pre>;
};

export default Pre;
