import { ReactNode } from "react";
import UnderConstruction from "./UnderConstruction";

type LayoutProps = {
  children: ReactNode;
  className?: string;
  underConstruction?: boolean;
};

const Layout = ({
  children,
  className = "",
  underConstruction = false,
}: LayoutProps) => {
  if (underConstruction) {
    return <UnderConstruction />;
  }

  return (
    <div
      className={`w-full min-h-screen bg-neutral-900 p-32 xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;