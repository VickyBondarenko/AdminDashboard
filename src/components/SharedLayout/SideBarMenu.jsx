import Modal from "react-modal";
import LogOutBtn from "./LogOutBtn";
import Navigation from "./Navigation";
import IconsSVG from "../../assets/svg/symbol-defs.svg";

const SideBarMenu = ({ isOpen, setIsOpen }) => {
  const handleCloseModal = () => {
    setIsOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <>
      <div className="relative z-[1000] border-accentMain">
        <Modal
          isOpen={isOpen}
          onRequestClose={handleCloseModal}
          contentLabel="Burger Menu"
          overlayClassName="fixed top-0 right-0 bottom-0 left-0 bg-red z-[9999] pointer-events-auto backdrop-brightness-[0.7]"
          shouldCloseOnOverlayClick={true}
          className="fixed top-0  bottom-0 left-0  z-[9999]     outline-none bg-mainBg h-full"
        >
          <div className=" flex flex-col justify-between border-r border-borderLight px-[20px] py-7 h-screen">
            <div>
              <div className=" pb-10 md:pb-48 cursor-pointer">
                <svg
                  className={`w-8 h-8  fill-black stroke-black`}
                  onClick={handleCloseModal}
                >
                  <use xlinkHref={`${IconsSVG}#icon-close`} />
                </svg>
              </div>

              <Navigation />
            </div>

            <LogOutBtn />
          </div>
        </Modal>
      </div>
    </>
  );
};

export default SideBarMenu;
