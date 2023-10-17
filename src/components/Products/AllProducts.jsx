const AllProducts = ({ data }) => {
  return (
    <>
      <table>
        <caption>All Products</caption>
        <thead>
          <tr>
            <th>Product Info</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Suppliers</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row._id}>
              <td>{row.name}</td>
              <td>{row.category}</td>
              <td>{row.stock}</td>
              <td>{row.suppliers}</td>
              <td>{row.price}</td>
              <td>Action</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AllProducts;
