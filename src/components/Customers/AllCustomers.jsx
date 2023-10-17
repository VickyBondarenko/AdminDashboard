const AllCustomers = ({ data }) => {
  return (
    <>
      <table>
        <caption>All Customers</caption>
        <thead>
          <tr>
            <th>User info</th>
            <th>Email</th>
            <th>Adress</th>
            <th>Phone</th>
            <th>Register date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row._id}>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.address}</td>
              <td>{row.phone}</td>
              <td>{row.data}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AllCustomers;
