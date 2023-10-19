const AllOrders = ({ data }) => {
  const statusColor = (status) => {
    let statusStyle = ``;

    switch (status) {
      case "Cancelled":
        statusStyle = `bg-lightRed text-customRed`;
        break;

      case "Processing":
        statusStyle = `bg-lightBlue text-customBlue`;
        break;

      case "Pending":
        statusStyle = `bg-lightBlue text-customBlue`;
        break;

      case "Shipped":
        statusStyle = `bg-lightOrange text-customOrange`;
        break;

      case "Confirmed":
        statusStyle = `bg-lightPurpule text-customPurpule`;
        break;

      case "Completed":
        statusStyle = `bg-lightGreen text-customGreen`;
        break;

      case "Delivered":
        statusStyle = `bg-yellow-50 text-yellow-500`;
        break;

      default:
        console.log("Invalid subscription type");
    }
    return statusStyle;
  };

  return (
    <>
      <div className="border border-borderLight rounded-lg w-[1280px]">
        <div className="bg-greenLight p-5  text-customLg font-semibold text-start w-[1280px]">
          All Orders
        </div>
        <table className="ml-5">
          <thead className="py-5 text-start">
            <tr className="mx-5 px-5 py-5 text-lighterText text-customS font font-medium">
              <th className=" py-5 border-b text-start w-[260px]">User info</th>
              <th className="px-5 border-b border-l border-borderLight text-start w-[218px]">
                Adress
              </th>
              <th
                className="px-5 border-b border-l 
 border-borderLight text-start w-[191px]"
              >
                Products
              </th>
              <th className="px-5 border-b border-l  border-borderLight text-start w-[200px]">
                Order data
              </th>
              <th className="px-5 border-b border-l  border-borderLight text-start w-[184px]">
                Price
              </th>
              <th className="px-5 border-b border-l text-yel  border-borderLight text-start w-[170px]">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="px-5">
            {data.map((row) => (
              <tr
                key={row._id}
                className="mx-5 py-5 border-b text-start last:border-none text-customMiddle font-medium"
              >
                <td className=" py-5 flex flex-row gap-2 items-center">
                  <img
                    src={row.photo}
                    alt={row.name}
                    className="w-[36px] h-[36px] rounded-full"
                  />
                  {row.name}
                </td>
                <td className="px-5 py-5 border-l">{row.address}</td>
                <td className="px-5 py-5 border-l">{row.products}</td>
                <td className="px-5 py-5 border-l">{row.data}</td>
                <td className="px-5 py-5 border-l">{row.price}</td>

                <td className={`px-5 py-5 border-l  `}>
                  <div
                    className={` text-center px-3 rounded-[40px] py-1  ${statusColor(
                      row.status
                    )}`}
                  >
                    {row.status}
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

export default AllOrders;
