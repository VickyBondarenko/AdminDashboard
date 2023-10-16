const RecentCustomers = ({ data }) => {
  return (
    <>
      <table>
        <caption>Recent Customers</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Spent</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.spent}</td>
              <td>{row.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default RecentCustomers;
