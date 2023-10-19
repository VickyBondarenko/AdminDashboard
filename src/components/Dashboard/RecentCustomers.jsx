const RecentCustomers = ({ data }) => {
  return (
    // <>
    //   <table>
    //     <caption>Recent Customers</caption>
    //     <thead>
    //       <tr>
    //         <th>Name</th>
    //         <th>Email</th>
    //         <th>Spent</th>
    //         <th>Country</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {data.map((row) => (
    //         <tr key={row._id}>
    //           <td>{row.name}</td>
    //           <td>{row.email}</td>
    //           <td>{row.spent}</td>
    //           <td>{row.country}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </>

    <>
      <div className="border border-borderLight rounded-lg ">
        <div className="bg-greenLight p-5  text-customLg font-semibold ">
          Recent Customers
        </div>
        <table className="ml-5">
          <thead className="py-5 text-start">
            <tr className="mx-5 px-5 py-5 text-lighterText text-customS font font-medium">
              <th className=" py-5 border-b text-start w-[169px]">Name</th>
              <th className="px-5 border-b border-l border-borderLight text-start ">
                Email
              </th>
              <th
                className="px-5 border-b border-l
     border-borderLight text-start w-[119px]"
              >
                Spent
              </th>
              <th className="px-5 border-b border-l  border-borderLight text-start ">
                Country
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
                <td className="px-5 py-5 border-l">{row.spent}</td>
                <td className="px-5 py-5 border-l ">
                  <button className="border border-accent text-accent px-[18px] py-2 rounded-[30px]">
                    View
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

export default RecentCustomers;
