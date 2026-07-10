
   
   
   const Content = ({count, fruits,products, updater}) => {
        // count = 25 // props must not be mutated by the childreen

        //function that handles click of decrease button 
        function handle_decrease(){
        updater(count--)
    console.log(count)
        }

        function increase(){
         updater(count++)
          console.log(count)
        }

        return (

            <div>
             <p>Count: {count}</p>
             {/* loop through array fruits: .map() */}
             <p>Available fruits</p>
            <ul>
             {
              fruits.map(function(fruit,index){
                return <li key={index}> {fruit} </li>
              })
             }
                </ul>

                <h2 className="text-center">Available Products</h2>
                <table className="table table striped">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        products.map(function(pro){
                          return (
                            <tr>  
                              <td>{pro.id}</td>
                              <td>{pro.name}</td>
                              <td>{pro.price}</td>                            
                            </tr>
                          )
                        })
                      }
                    </tbody>
                </table>
                <button className="btn btn-primary mt-4 mx-auto" onClick={increase}>Increase</button><br />
                {/* calling a function that respond to an event dont put parentesis */}
                <button className="btn btn-danger mt-4 mx-auto" onClick={handle_decrease}>Decrease</button>
            </div>
        )

    }

    export default Content