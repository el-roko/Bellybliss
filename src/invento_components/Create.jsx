

import { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductContext2';

const Create = () => {
  const { addProduct } = useContext(ProductContext);
  const [data, setData] = useState({
    id: '',
    productname: '',
    qty: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.productname.trim() || !data.qty.trim()) {
      alert('Please fill in all fields');
      return;
    }

    const newProduct = {
      id: data.id || Math.floor(Math.random() * 100000),
      productname: data.productname.trim(),
      qty: data.qty.trim(),
    };

    addProduct(newProduct);
    setData({ id: '', productname: '', qty: '' });
    console.log('Form submitted:', newProduct);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="row text-center formy">
      <div className="col-md-6 offset-md-3">
        <h3>Add Product</h3>
      </div>
      <div className="col-md-8 offset-md-2">
        <form onSubmit={handleSubmit} className="py-3 px-5 brr">
          <div className="row my-4">
            <div className="col-md-7">
              <input
                type="text"
                className="form-control"
                placeholder="product name"
                name="productname"
                value={data.productname}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-3">
              <input
                type="number"
                className="form-control"
                placeholder=" Qty"
                name="qty"
                value={data.qty}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-2 text-end">
              <input
                type="submit"
                value="Add Product"
                className="btn btn-primary mine"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create