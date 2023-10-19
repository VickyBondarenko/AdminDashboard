import IconsSVG from "../../assets/svg/symbol-defs.svg";
import EditProductModal from "./EditModal";

const AllProducts = ({
  data,
  handleDeleteProduct,
  handleOpenEditModal,
  isOpen,
  setIsOpen,
}) => {
  return (
    <>
      <div className="border border-borderLight rounded-lg w-[1280px]">
        <div className="bg-greenLight p-5  text-customLg font-semibold text-start w-[1280px]">
          All Products
        </div>
        <table className="ml-5">
          <thead className="py-5 text-start">
            <tr className="mx-5 px-5 py-5 text-lighterText text-customS font font-medium">
              <th className=" py-5 border-b text-start w-[260px]">
                Product Info
              </th>
              <th className="px-5 border-b border-l border-borderLight text-start w-[218px]">
                Category
              </th>
              <th
                className="px-5 border-b border-l
     border-borderLight text-start w-[191px]"
              >
                Stock
              </th>
              <th className="px-5 border-b border-l  border-borderLight text-start w-[200px]">
                Suppliers
              </th>
              <th className="px-5 border-b border-l  border-borderLight text-start w-[184px]">
                Price
              </th>
              <th className="px-5 border-b border-l text-yel  border-borderLight text-start w-[170px]">
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
                <td className="px-5 py-5 border-l">{row.category}</td>
                <td className="px-5 py-5 border-l">{row.stock}</td>
                <td className="px-5 py-5 border-l">{row.suppliers}</td>
                <td className="px-5 py-5 border-l">{row.price}</td>

                <td className={`px-5 py-5 border-l  `}>
                  <div className={` flex gap-2 `}>
                    <button
                      type="button"
                      className="border border-accent rounded-full p-2"
                      onClick={() => handleOpenEditModal(row)}
                    >
                      <svg className=" w-4 h-4 stroke-green-500 fill-white ">
                        <use xlinkHref={`${IconsSVG}#icon-edit-2`} />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDeleteProduct(row._id)}
                      className="border border-red-600 rounded-full p-2"
                    >
                      <svg className=" w-4 h-4 stroke-red-600 fill-white ">
                        <use xlinkHref={`${IconsSVG}#icon-trash-2`} />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllProducts;
