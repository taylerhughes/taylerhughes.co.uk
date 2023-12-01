import React, { FC } from "react";

const Opener: FC<React.PropsWithChildren<{}>> = ({ children }) => (
  <p className="col-span-12 lg:col-span-10 text-fluid-lg/[1.5] mb-[clamp(1rem,10cqw,6rem)] font-[300]">
    {children}
  </p>
);

export default Opener;
