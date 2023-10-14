import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
// import Sidebar from "./Sidebar";

const SharedLayout = () => {
  return (
    <>
      <div className=" w-full">
        <Header />
        <div className="flex flex-row">
          {/* <Sidebar /> */}
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default SharedLayout;
