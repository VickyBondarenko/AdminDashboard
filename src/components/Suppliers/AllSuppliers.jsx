import IconsSVG from "../../assets/svg/symbol-defs.svg";

const AllSuppliers = ({ data, handleOpenEditModal, isOpen, setIsOpen }) => {
  return (
    <>
      <div className="border border-borderLight rounded-lg w-[1280px]">
        <div className="bg-greenLight p-5  text-customLg font-semibold rounded-lg text-start w-[1278px]">
          All Suppliers
        </div>
        <table className="ml-5">
          <thead className="py-5 text-start">
            <tr className="mx-5 px-5 py-5 text-lighterText text-customS font font-medium">
              <th className=" py-5 border-b text-start w-[211px]">
                Suppliers info
              </th>
              <th className="px-5 border-b border-l border-borderLight text-start w-[188px]">
                Adress
              </th>
              <th
                className="px-5 border-b border-l 
 border-borderLight text-start w-[166px]"
              >
                Company
              </th>
              <th className="px-5 border-b border-l  border-borderLight text-start w-[215px]">
                Delivery
              </th>
              <th className="px-5 border-b border-l  border-borderLight text-start w-[152px]">
                Ammount
              </th>
              <th className="px-5 border-b border-l text-yel  border-borderLight text-start w-[179px]">
                Status
              </th>
              <th className="px-5 border-b border-l text-yel  border-borderLight text-start w-[129px]">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="px-5">
            {data.map((row) => (
              <tr
                key={row._id}
                className="mx-5 py-5 border-b text-start last:border-none text-customMiddle font-medium"
              >
                <td className=" py-5 ">{row.name}</td>
                <td className="px-5 py-5 border-l">{row.address}</td>
                <td className="px-5 py-5 border-l">{row.suppliers}</td>
                <td className="px-5 py-5 border-l">{row.date}</td>
                <td className="px-5 py-5 border-l">{row.amount}</td>

                <td className={`px-5 py-5 border-l  `}>
                  <div
                    className={` w-[89px] text-center rounded-[40px] py-1  ${
                      row.status === "Active"
                        ? "text-customGreen bg-lightGreen"
                        : "text-customRed bg-lightRed"
                    }`}
                  >
                    {row.status}
                  </div>
                </td>
                <td className="px-5 py-5 border-l">
                  <button
                    type="button"
                    onClick={() => handleOpenEditModal(row)}
                    className="border border-accent rounded-[30px] px-[17px] py-2 text-accent flex gap-1 text-customMiddle font-medium"
                  >
                    <svg className=" w-[14px] h-[14px] stroke-accent fill-white ">
                      <use xlinkHref={`${IconsSVG}#icon-edit-2`} />
                    </svg>
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllSuppliers;
