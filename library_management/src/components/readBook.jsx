import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import '../styles/readBook.css'
const ReadBook = ({cart,setCart}) => {
    let[book,setBook]=useState([])
    let location=useLocation()
    let path=location.pathname.startsWith('/userPortal')
    let params=useParams()
    let book_id=params.id
    useEffect(()=>{
        let fetchData=async()=>{
            let response=await fetch(`http://localhost:4000/books/${book_id}`)
            let data=await response.json()
            setBook(data)
        }
        fetchData()
    })
    return ( 
        <div className="main">
         <div className="readbook">
           <div className="first">
            <img src={book.thumbnailUrl} alt=""  height={200} width={200}/>
           </div>
           <div className="second">
            <h1>{book.title}</h1>
            <p>{book.shortDescription}</p>
            <p>{book.longDescription}</p>
            {path?<button className="back"><Link to='/userPortal/books'>Back</Link></button>:<button className="back"><Link to='/adminPortal/books'>Back</Link></button>}
            {path &&<button className="backy back"><Link onClick={()=>setCart([...cart,book])}>Add to favourites</Link></button>}
           </div>
        </div>
        </div>
     );
}
 
export default ReadBook;