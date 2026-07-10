import {useState} from "react"

const Form = ({balance, setBalance}) => {
    //a state to track amount they typed: useState hook
    const [amount, setAmount] = useState("")
    function withdraw(){
        if(amount == ""){
            alert("oga, how much you want?");
            return false;
        }
        if(amount > balance){
            alert("Oga, insufficient account balance")
        }
        var amount_to_withdraw = Number(amount);
        var currentBalance = balance - amount_to_withdraw;
        setBalance(currentBalance)
    }

    function deposite(){
          if(amount == ""){
            alert("oga, how much you want?")
            return false;
          }  
          var amount_to = Number(amount);
        //   var currentBalance = balance + amount_to
          setBalance(currentBalance)
         return false;
    }
  return (
    <div className="row">
        <div className="col-md-8 py-4 offset-md-2">
            <div className="mb-2">
                {/* how to manage input in react */}
                <input type="number" className="form-control" value={amount}  onChange={function(e){
                    setAmount(e.target.value);
                    // console.log(e.target.value);
                }}/>
            </div>
            <div className="mb-2">
                <button className="btn btn-danger mt-3 mx-2" onClick={withdraw}>Withdraw</button>
                <button className="btn btn-primary mt-3" onClick={deposite}>Deposite</button>
            </div>
        </div>
    </div>
  )
}

export default Form