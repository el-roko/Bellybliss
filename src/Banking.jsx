
    import {useState} from "react" 


import AccountBalance from "./banking_components/AccountBalance"
import Form from "./banking_components/Form"
import Hi from "./banking_components/Hi"
import Hello from "./banking_components/Hello"

    
    const Banking = () => {
        // var balance = 0; we cant store it in a variable cos it will bwe changing
        // the balance state has to be here in the parent bcos more than one componenets needs it
        const [balance, setBalance] = useState(0)  // we send a request to an api endpoint that returns the balance
      return (
        <div className="container">
           <div className="row">
                <div className="col-md-12">
                     <h1>Bankie Bank</h1>
                </div>                                     
           </div>
            {/* other compone nets assembled here */}
            {
                balance > 1000 ? <p className="alert alert-success">You are doing well.</p> : <p className="alert alert-danger">You are broke.</p>
            }
                    <AccountBalance balance={balance}/>             
                     <Form balance={balance} setBalance={setBalance}/>

                     <hr />

                     <Hi/>
                     <Hello/>
             
        </div>
      )
    }
    
    export default Banking
    