import { useState,useEffect } from "react";
import '../styles/books.css'
import { useLocation, useNavigate } from "react-router-dom";
const Books = () => {
    let location=useLocation()
    let path=location.pathname.startsWith('/adminPortal')
    let[books,setBooks]=useState([])
    let navigate=useNavigate()
    useEffect(()=>{
        let fetchdata=async()=>{
            let response=await fetch('http://localhost:4000/books')
            let data=await response.json()
            setBooks(data)
        }
        fetchdata()
    },[books])
    let ReadBook=(id)=>{
        if(path){
            navigate(`/adminPortal/books/${id}`)
        }
        else{
            navigate(`/userPortal/books/${id}`)
        }
    }
    let handleDelete=(id,title)=>{
        fetch(`http://localhost:4000/books/${id}`,{
            method:'DELETE'
        })
        alert(`${title} got deleted `)
    }
    return ( 
        <div className="book">
            <center><h1>Books Collection</h1></center>
            <div className="book_list">
                {books.map((data)=>(
                    <div className="books">
                        <img src={data.thumbnailUrl} height={200} width={250}/>
                        <div className="book_details">
                            <div id="titly">
                            <span className="title">{data.title}</span><br />
                            <span>{data.authors}</span><br />
                            </div>
                            <button onClick={()=>ReadBook(data.id)} className="btn">Read Book</button>
                            {path && <button onClick={()=>handleDelete(data.id,data.title)} className="btn1">Delete Book</button>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Books;