const IncomeExpenses = ({ data }) => {
  return (
    <>
      <div className="border border-borderLight rounded-lg w-[335px]  md:w-[704px] xl:w-[630px]">
        <div className="bg-greenLight p-5  text-customLg font-semibold text-start w-[335px] md:w-[704px] xl:w-[630px]">
          Income/Expenses
        </div>
        <table className="ml-4">
          <thead className="py-5 text-start">
            <tr className="mx-5 px-5 my-5 text-lighterText text-customS font font-medium border-b ">
              <div className="py-5">Today</div>
            </tr>
          </thead>
          <tbody className="px-5">
            {data.map((row) => (
              <tr
                key={row._id}
                className="py-5 border-b text-start last:border-none text-customMiddle font-medium"
              >
                <td
                  className={`md:pr-5 py-5 flex flex-row gap-2 items-center pr-5 `}
                >
                  <div
                    className={`w-20  text-center py-1 rounded-[40px] ${
                      row.amount > 0
                        ? "text-customGreen bg-lightGreen"
                        : "text-customRed bg-lightRed"
                    }`}
                  >
                    {row.amount > 0 ? "Income" : "Expense"}
                  </div>
                </td>
                <td className="md:px-5 py-5 w-[118px] md:w-[470px] xl:w-[395px]">
                  {row.name}
                </td>
                <td
                  className={`md:pl-5 py-5 xl:pl-5 text-right ${
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
