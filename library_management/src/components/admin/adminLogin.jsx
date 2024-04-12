import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/admin/adminLogin.css'
const AdminLogin = () => {
    let navigate=useNavigate()
    let email=useRef()
    let password=useRef()
    let submitAdmin=(e)=>{
        e.preventDefault()
        let admin={
            email:"admin@gmail.com",
            password:12345
        }
        if(email.current.value==admin.email && password.current.value==admin.password)
        {
            //navigate to admin portal
            navigate('/adminPortal')
        }
        else{
            alert("Invalid admin credentials")
        }
    }
    return ( 
        <div className="admin">
            <div className="adminLogin">
            <h1>Admin Login</h1>
            <div className="adminform">
                <form onSubmit={submitAdmin}>
                    <div className="adminEmail">
                        <input ref={email} type="email" name="" id="" placeholder="enter your email address"/>
                    </div>
                    <div className="password">
                        <input ref={password} type="password" name="" id="" placeholder="enter your password" />
                    </div>
                    <div className="loginBtn">
                        <button>Login</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
     );
}
 
export default AdminLogin;