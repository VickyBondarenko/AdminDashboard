import Navigation from "./Navigation";

const SideBar = () => {
  return (
    <>
      <div className="border-r border-borderLight px-[18px] py-10 h-screenMinusHeader">
        <Navigation />
      </div>
    </>
  );
};

export default SideBar;
