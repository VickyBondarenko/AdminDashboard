const IncomeExpenses = ({ data }) => {
  return (
    <>
      <table>
        <caption>Income/Expenses</caption>
        <caption>Today</caption>
        <tbody>
          {data.map((row) => (
            <tr key={row._id}>
              <td>{row.amount > 0 ? "Income" : "Expense"}</td>
              <td>{row.name}</td>
              <td>{row.amount}</td>
              <td>{row.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default IncomeExpenses;
