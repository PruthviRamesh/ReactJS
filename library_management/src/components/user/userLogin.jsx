import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/user/userLogin.css'
const UserLogin = () => {
    let navigate=useNavigate()
    let email=useRef()
    let password=useRef()
    let submitUser=(e)=>{
        e.preventDefault()
            //navigate to user portal
            navigate('/userPortal')
    }
    return ( 
        <div className="user_">
            <div className="userLogin">
            <h1>User Login</h1>
            <div className="userform">
                <form onSubmit={submitUser}>
                    <div className="userEmail">
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
 
export default UserLogin;