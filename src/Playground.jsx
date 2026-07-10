import pic from "./assets/ride.jpg"
import Header from "./playground_components/Header"
import Content from "./playground_components/Content"
import Footer from "./playground_components/Footer"
  //i want to use hook useState() I need to import it from react 
  import {useState} from "react" 
   
   const Playground = () => {
    // we sent a request to an api and we got back appname

    var appname = "Blogger";
   
    // var count = 0; //bcos count will be changing we cannot keep it in a variable, we keep it in a state
    //count++ is a crime:we dont update a state directly
     const[count,setCount] =  useState(0) // count is the container, setCount is the only one that can change count
    var fruits = ["Kiwi","Banana","Blueberry","Apple"];
    var products = [
        {
            id:1,
            name: "Apple cidar Vinegar",
            price:2000
        },
        {
            id:2,
            name: "Yellow Garri",
            price:1000
        },
        {
            id:3,
            name: "Brown Sugar",
            price:2000
        },
        {
            id:4,
            name: "Corn Flakes",
            price:3000
        }
    ];

    //state is used to store data that could change, react will update itself any where the state is used

    function sayHello(){
        alert("Hello Mr. Akpan");
    }

        return (

            <div>
                <Header xyz={appname} abc={count}/>
                <Content count={count} fruits={fruits} products={products} updater = {setCount}/>
                <Footer/>


               {/* how to display image that is inside public folder  */}
               <img src="/assets/img/home-bg.jpg" alt="Bg-pic" className="img-fluid" />

               {/* how to display image that is inside SRC folder */}
               <img src={pic} alt="another pic" />
                
            </div>
        )

    }

    export default Playground