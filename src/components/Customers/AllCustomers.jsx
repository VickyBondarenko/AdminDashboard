const AllCustomers = ({ data }) => {
  return (
    <>
      <div className="border border-borderLight rounded-lg w-[1280px]">
        <div className="bg-greenLight p-5  text-customLg font-semibold text-start w-[1280px]">
          All Customers
        </div>
        <table className="ml-5">
          <thead className="py-5 text-start">
            <tr className="mx-5 px-5 py-5 text-lighterText text-customS font font-medium">
              <th className=" py-5 border-b text-start w-[280px]">User info</th>
              <th className="px-5 border-b border-l border-borderLight text-start w-[300px]">
                Email
              </th>
              <th
                className="px-5 border-b border-l 
 border-borderLight text-start w-[200px]"
              >
                Adress
              </th>
              <th className="px-5 border-b border-l  border-borderLight text-start w-[255px]">
                Phone
              </th>
              <th className="px-5 border-b border-l  border-borderLight text-start w-[200px]">
                Register date
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
                <td className="px-5 py-5 border-l">{row.email}</td>
                <td className="px-5 py-5 border-l">{row.address}</td>
                <td className="px-5 py-5 border-l">{row.phone}</td>
                <td className="px-5 py-5 border-l">{row.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllCustomers;
