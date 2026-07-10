import blogpic from './assets/blogpic.webp'



function Content(){
    let myStyles = {color:'yellow',backgroundColor:'purple',padding:'10px'}
    return <>
    <div className="col-md-6 p-4">
        <img src={blogpic} alt=""  className="img-fluid rounded"/>
    </div>

    <div className="col-md-6 p-4">
        <h3 style={myStyles} className="mt-5">Blog Setting</h3>
        <p>This is our blog section</p>
        <button onClick={function(){alert('You are welcome to our webpage')}} className="btn btn-primary">Learn More</button>
    </div>
             </>
}

export default Content