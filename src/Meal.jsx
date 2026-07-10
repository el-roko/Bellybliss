import {useState, useEffect} from "react"
import "./assets/meal.css";


import Header from "./meal_components/Header"
import Hero from "./meal_components/Hero"
import Categories from "./meal_components/Categories"
import Footer from "./meal_components/Footer"

const Meal = () => {

    //how to send get request in react app and use the data that comes back
    const [categories, setCategories] = useState([]); // categories coming from api endpoints will be stored here. initially it is empty array
    const [loading, setLoading] = useState(false); //tracking if there is ongoing request been sent. so that we will be able to tell the user
    const [error, setError] = useState(false); // to determine if there is error with the server



    //a function that connects to an api
            function fetchMealCategories(){
                setLoading(true)
                setError(false)
                fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
                .then(function(res){
                    return res.json();
                })
                .then(function(data){
                    setLoading(false)
                    setError(false)
                    setCategories(data.categories);
                })
                .catch(function(err){
                    setLoading(false)
                    setError(true)
                    setCategories([])
                })
            }



    //this hook is used to commuinicate with an external system 
    useEffect(()=>{
        fetchMealCategories()
    },[]);


  return (
    <>
        
        <Header/>
        <Hero/>
        <Categories categories={categories} error={error} loading={loading}/>
        <Footer/>
    </>
  )
}

export default Meal