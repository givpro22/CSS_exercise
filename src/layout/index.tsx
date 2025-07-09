import type { ReactNode } from "react";
import Header from "./Header";
import Navbar from "./Navbar";

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Navbar />
    </>
  );
}

export default Layout;
