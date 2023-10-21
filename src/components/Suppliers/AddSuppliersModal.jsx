import Modal from "react-modal";

import IconsSVG from "../../assets/svg/symbol-defs.svg";
import AddSupplierForm from "./AddSupplierForm";

const AddSupplierModal = ({ isOpen, setIsOpen }) => {
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
          contentLabel="AddProductModal"
          overlayClassName="fixed top-0 right-0 bottom-0 left-0 bg-red z-[9999] pointer-events-auto backdrop-brightness-[0.7]"
          shouldCloseOnOverlayClick={true}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-[9999] rounded-[12px]     outline-none bg-mainBg w-[335px] h-[542px] md:h-[412px] md:w-[536px]"
        >
          <div className="px-5 py-10 md:px-10 relative">
            <div className="absolute right-[14px] top-[14px]  ">
              <svg
                className={`w-[26px] h-[26px]  fill-black hover:stroke-accent stroke-black cursor-pointer`}
                onClick={handleCloseModal}
              >
                <use xlinkHref={`${IconsSVG}#icon-close`} />
              </svg>
            </div>
            <h2 className="text-customXxl font-semibold">
              Add a new suppliers
            </h2>
            <AddSupplierForm handleCloseModal={handleCloseModal} />
          </div>
        </Modal>
      </div>
    </>
  );
};

export default AddSupplierModal;
