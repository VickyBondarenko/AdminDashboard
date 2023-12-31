import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import Header from "./Header";
import SideBar from "./Sidebar";

const SharedLayout = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1440px)",
  });

  return (
    <>
      <div className="max-w-screen">
        <Header />
        <div className="flex flex-row">
          {isDesktop && <SideBar />}
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default SharedLayout;
