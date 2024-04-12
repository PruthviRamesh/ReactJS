import '../../styles/admin/addUser.css'
import { useRef } from "react"
const AddUsers = () => {
    let firstname=useRef()
    let lastname=useRef()
    let email=useRef()
    let phone=useRef()
    let submituser=(e)=>{
        e.preventDefault()
        let user={
            firstName:firstname.current.value,
            lastName:lastname.current.value,
            email:email.current.value,
            phone:phone.current.value
        }
        fetch('http://localhost:4000/user',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(user)
        })
        alert("User added successfully")
    }
    return ( 
        <div className="addusers">
            <center><h1>Add User</h1></center>
           <form onSubmit={submituser}>
                <div className="row">
                <label htmlFor="">FirstName:</label>
                <input type="text" name="" id="" ref={firstname} /><br /><br />
                </div>
                <div className="row">
                <label htmlFor="">LastName:</label>
                <input type="text" name="" id="" ref={lastname} /><br /><br />
                </div>
                <div className="row">
                <label htmlFor="">Email:</label>
                <input type="text" name="" id="" ref={email} /><br /><br />
                </div>
                <div className="row">
                <label htmlFor="">Phone:</label>
                <input type="text" name="" id="" ref={phone} /><br /><br />
                </div>
                <input type="submit" value="Submit" id="submit" />
            </form>
        </div>
     );
}
 
export default AddUsers;