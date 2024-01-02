import '../styles/navbar.css'
import { Link, useLocation } from "react-router-dom";
const NavBar = () => {
    let location=useLocation()
    let path=location.pathname.startsWith('/adminPortal')
    return ( 
        <div className="navbar">
            <div className="fixy">
            <div className="heading">
               <center><span>Holiday Schedule: Book Sanctuary will be closed on Sunday.</span></center>
            </div>
           <div className='back1'>
           <div className='img'>
            <img src="/main-logo-green.svg" alt="" />  
            <h1>Book Sanctuary</h1>
            </div>
           <div className="links">
            {
                path?
                <div className="path">
                    <Link to='/adminPortal/'>Home</Link>
                    <Link to='/adminPortal/books'>Books</Link>
                    <Link to='/adminPortal/users'>Users</Link>
                    <Link to='/adminPortal/addBooks'>AddBooks</Link>
                    <Link to='/adminPortal/addUsers'>AddUsers</Link>
                    <Link to='/adminLogin'>Logout</Link>
                </div>
                :
                <div>
                    <Link to='/userPortal/'>Home</Link>
                    <Link to='/userPortal/books'>Books</Link>
                    <Link to='/userPortal/favourites'>Favourites</Link>
                    <Link to='/userLogin'>Logout</Link>
                </div>

            }
            </div>
             </div>
            </div>
        </div>
     )
}
 
export default NavBar;