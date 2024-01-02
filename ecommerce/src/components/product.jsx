import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import '../styles/product.css'
const Product = ({cart,setcart}) => {
    let[product,setProduct]=useState([])
    let params=useParams()
    let para=params.id
    useEffect(()=>{
        let fetchData=async()=>{
            let response=await fetch(`https://dummyjson.com/products/${para}`)
            let data= await response.json()
            setProduct(data)
        }
        fetchData()
    },[])
    // let addCart=()=>{
    //   let count=1
    //   console.log(cart);
    //   cart.map(x=>{
    //    if(x.id){
    //     alert("already there")
    //    }
    //    else{
    //     setcart([{...cart,product}])
    //     console.log(cart);
    //    }
    //   })
    // }
    return ( 
        <div className="singleproduct">
          <div className="pro_">
          <div className="pro_img">
            <img className="proimg" src={product.thumbnail} alt="" />
          </div>
          <div className="pro_desc">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p id="price"><span id="inner">&#8377;{(product.price*80)-((product.price*80)*10)/100}</span> M.R.P: <strike>&#8377;{product.price*80}</strike> (10% off)</p>
            <Link to='/' className="backbtn"><button>Back</button></Link>
            <Link className="addbtn"><button onClick={()=>setcart([...cart,product])}>Add to Cart</button></Link>
          </div>
          </div>
        </div>
     );
}
 
export default Product;