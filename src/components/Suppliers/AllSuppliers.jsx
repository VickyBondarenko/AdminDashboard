const AllSuppliers = ({ data }) => {
  return (
    <>
      <table>
        <caption>All Suppliers</caption>
        <thead>
          <tr>
            <th>Suppliers info</th>
            <th>Adress</th>
            <th>Company</th>
            <th>Delivery date</th>
            <th>Ammount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row._id}>
              <td>{row.name}</td>
              <td>{row.address}</td>
              <td>{row.suppliers}</td>
              <td>{row.date}</td>
              <td>{row.amount}</td>
              <td>{row.status}</td>
              <td>action</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AllSuppliers;
