import '../../styles/admin/users.css'
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from 'react-router-dom';
const Users = () => {
    let[User,setUser]=useState([])
    let navigate=useNavigate()      
    useEffect(()=>{
        let fetchdata=async()=>{
            let response=await fetch('http://localhost:4000/user')
            let data=await response.json()
            setUser(data)
        }
        fetchdata()
    },[User])
    let Adduser=()=>{
        navigate(`/adminPortal/addBooks`)
    }
    let handleDelete=(id,firstName,lastName)=>{
        fetch(`http://localhost:4000/user/${id}`,{
            method:'DELETE'
        })
        alert(`${firstName+" "+lastName} got deleted `)
    }
    return ( 
        <div className="users">
           <center> <h1>Users List</h1></center>
            <div className="user1">
                {User.map((data)=>(
                    <div className="userdetails">
                        <h3>User {data.id}</h3>
                        <p>FirstName : {data.firstName}</p>
                        <p>LastName : {data.lastName}</p>
                        <p>Email : {data.email}</p>
                        <p>Phone : {data.phone}</p>
                        <button onClick={()=>Adduser()} className='adduser'>Add user</button>
                        <button onClick={()=>handleDelete(data.id,data.firstName,data.lastName)} className='deleteuser'>Delete user</button>
                        <br />
                        <hr />
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Users;