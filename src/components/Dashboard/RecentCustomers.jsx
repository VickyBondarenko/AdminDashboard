import { useState } from "react";
import AdressModal from "./AdressModal";

const RecentCustomers = ({ data }) => {
  const [isAdressModalOpen, setIsAdressModalOpen] = useState(false);

  const handleOpenAdressModal = () => {
    setIsAdressModalOpen(true);
  };

  return (
    <>
      <div className="border border-borderLight rounded-lg  md:w-[704px] xl:w-[630px] overflow-x-scroll md:overflow-visible">
        <div className="bg-greenLight p-5  text-customLg  rounded-t-lg font-semibold w-[437px] md:w-[702px] xl:w-[628px]">
          Recent Customers
        </div>
        <table className="ml-5">
          <thead className="py-5 text-start">
            <tr className="mx-5 px-5 py-5 text-lighterText text-customXxs md:text-customS font font-medium">
              <th className=" py-5 border-b text-start w-[109px] md:w-[178px] xl:w-[149px]">
                Name
              </th>
              <th className="px-5 border-b border-l border-borderLight text-start w-[154px] md:w-[226px] xl:w-[205px]">
                Email
              </th>
              <th
                className="px-5 border-b border-l
     border-borderLight text-start w-[85px] md:w-[129px] xl:w-[117px]"
              >
                Spent
              </th>
              <th className="px-5 border-b border-l  border-borderLight text-start md:w-[131px] xl:w-[119px]">
                Adress
              </th>
            </tr>
          </thead>
          <tbody className="px-5">
            {data.map((row) => (
              <tr
                key={row._id}
                className="mx-5 py-5 border-b text-start last:border-none text-customXxs md:text-customMiddle font-medium"
              >
                <td className=" py-5 flex flex-col md:flex-row gap-2 items-center">
                  <img
                    src={
                      row.photo ? row.photo : `https://i.imgur.com/1As0akH.png1`
                    }
                    alt={row.name}
                    className="w-[36px] h-[36px] rounded-full"
                  />
                  {row.name}
                </td>
                <td className="px-5 py-5 border-l">{row.email}</td>
                <td className="px-5 py-5 border-l">{row.spent}</td>
                <td className="px-5 py-5 border-l ">
                  <button
                    onClick={handleOpenAdressModal}
                    className="border border-accent text-accent px-[18px] py-2 rounded-[30px]"
                  >
                    View
                  </button>
                  <AdressModal
                    isOpen={isAdressModalOpen}
                    setIsOpen={setIsAdressModalOpen}
                    adress={row.email}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RecentCustomers;
