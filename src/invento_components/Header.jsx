
import { useContext } from "react"
// to consume what is inside a provider
//1. import hook: useContext(whichcontext)
import { ProductContext } from "../context/ProductContext2";

const Header = () => {
  const { products } = useContext(ProductContext);

  return (

    
            <div className="row header">
              <div className="col text-center">
                <h1 className="mb-3"> Product Inventory </h1>
                <button type="button" className="btn btn-primary">
                  Count <span className="badge  mine">{products.length}</span>
                </button>
              </div>
            </div>

  
  )
}

export default Header