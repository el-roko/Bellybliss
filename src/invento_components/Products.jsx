

import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext2';

const Products = () => {
  const { products, removeProduct } = useContext(ProductContext);

  return (
    <div className="row products text-center">
      <div className="col-md-6 offset-md-3">
        <h3>Products Inventory </h3>
      </div>
      <div className="col-md-8 offset-md-2">
        <table className="table">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.productname}</td>
                <td>{product.qty}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeProduct(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products