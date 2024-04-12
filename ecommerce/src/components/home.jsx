import { useEffect, useState } from "react";
import '../styles/home.css'
import { Link } from "react-router-dom";
const Home = () => {
    let[product,setProduct]=useState([])
    useEffect(()=>{
        let fetchData=async()=>{
            let response=await fetch('https://dummyjson.com/products')
            let data= await response.json()
            setProduct(data.products)
        }
        fetchData()
    },[])
    return ( 
        <div className="home">
           <div className="products">
           {product.map((data)=>(
            <div className="prod">
                <div className="prodimg">
                    <img src={data.thumbnail} alt="" />
                </div>
                <div className="description">
                    <h1>{data.title}</h1>
                    <p id="prodtitle">{data.description}</p>
                    <p id="price"><span id="inner">&#8377;{(data.price*80)-((data.price*80)*10)/100}</span> M.R.P: <strike>&#8377;{data.price*80}</strike> (10% off)</p>
                    <div className="view">
                    <Link to={`/${data.id}`}><button>view</button></Link>
                    </div>
                </div>
            </div>
           ))}
           </div>
        </div>
     );
}
 
export default Home;