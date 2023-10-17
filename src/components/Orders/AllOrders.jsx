const AllOrders = ({ data }) => {
  return (
    <>
      <table>
        <caption>All Orders</caption>
        <thead>
          <tr>
            <th>User info</th>
            <th>Adress</th>
            <th>Products</th>
            <th>Order data</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row._id}>
              <td>{row.name}</td>
              <td>{row.address}</td>
              <td>{row.products}</td>
              <td>{row.data}</td>
              <td>{row.price}</td>

              <td>{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AllOrders;
