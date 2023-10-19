const IncomeExpenses = ({ data }) => {
  return (
    <>
      <div className="border border-borderLight rounded-lg w-[630px]">
        <div className="bg-greenLight p-5  text-customLg font-semibold text-start w-[630px]">
          Income/Expenses
        </div>
        <table className="ml-5">
          <thead className="py-5 text-start">
            <tr className="mx-5 px-5 my-5 text-lighterText text-customS font font-medium border-b ">
              <div className="py-5">Today</div>
            </tr>
          </thead>
          <tbody className="px-5">
            {data.map((row) => (
              <tr
                key={row._id}
                className="mx-5 py-5 border-b text-start last:border-none text-customMiddle font-medium"
              >
                <td className={` py-5 flex flex-row gap-2 items-center pr-5 `}>
                  <div
                    className={`px-[18px] py-1 rounded-[40px] ${
                      row.amount > 0
                        ? "text-customGreen bg-lightGreen"
                        : "text-customRed bg-lightRed"
                    }`}
                  >
                    {row.amount > 0 ? "Income" : "Expense"}
                  </div>
                </td>
                <td className="px-5 py-5 ">{row.name}</td>
                <td
                  className={`py-5 pl-5 text-right ${
                    row.amount > 0 ? "text-customGreen " : "text-customRed"
                  }`}
                >
                  {row.amount}
                </td>
                {/* <td className="px-5 py-5 ">{!row.country && "Ukraine"}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default IncomeExpenses;
