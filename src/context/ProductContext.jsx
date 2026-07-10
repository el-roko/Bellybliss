import {createContext, useState} from "react";

// creare context: createContext()

export const productContext = createContext();  // empty tank

//2. provider : a supercomponent

export const ProductProvider = ({children}) => {
    //send a request to an api endpoint that returns all products inside inventory db table
    var response = [
        {
            id: 1,
            productname: "black Glassess",
            qty: 2
        },
        {
            id: 2,
            productname: "yellow Jean",
            qty: 5
        }
    ]
    const [products, setProducts] = useState()

    return (
        <productContext.provider value={{products,setProducts}}>  
            {children};
        </productContext.provider>
    )
}