import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/meal.css'
import Meal from './Meal'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Layout/> */}
    {/* a root component that shows blogger app */}
    {/* <Blogger/> */}
    {/* <Playground/> */}
    {/* <Banking/> */}
    <ProductProvider>
      <Invento/>
    </ProductProvider> 
     {/* <Meal/>  */}
  </StrictMode>,
)
