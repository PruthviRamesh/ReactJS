import '../../styles/admin/addBook.css'
import { useEffect, useRef } from 'react'
const AddBooks = () => {
    let thumbnail=useRef()
    let title=useRef()
    let author=useRef()
    let pagecount=useRef()
    let category=useRef()
    let submitbook=(e)=>{
        e.preventDefault()
        let book={
            title:title.current.value,
            thumbnailUrl:thumbnail.current.value,
            authors:author.current.value,
            pageCount:pagecount.current.value,
            categories:category.current.value
        }
        fetch('http://localhost:4000/books',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(book)
        })
        alert("Book added successfully")
    }
    return ( 
        <div className="addbook">
            <center><h1>Add Book</h1></center>
           <form onSubmit={submitbook}>
                <div className="row">
                <label htmlFor="">Title:</label>
                <input type="text" name="" id="" ref={title} /><br /><br />
                </div>
                <div className="row">
                <label htmlFor="">ThumbnailUrl:</label>
                <input type="text" name="" id="" ref={thumbnail} /><br /><br />
                </div>
                <div className="row">
                <label htmlFor="">Authors:</label>
                <input type="text" name="" id="" ref={author} /><br /><br />
                </div>
                <div className="row">
                <label htmlFor="">PageCount:</label>
                <input type="text" name="" id="" ref={pagecount} /><br /><br />
                </div>
                <div className="row">
                <label htmlFor="">Categories:</label>
                <input type="text" name="" id="" ref={category} /><br /><br />
                </div>
                <input type="submit" value="Submit" id="submit" />
            </form>
        </div>
     );
}
 
export default AddBooks;