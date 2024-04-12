import { Link } from 'react-router-dom';
import '../style/nav.css'
const Nav = () => {
    return ( 
        <div className="nav">
           <div className="logo">
            <Link to="/"><img width={70} height={50} src="/images/logo.png" alt="" /></Link>
           </div>
           <div className="search">
            <input type="text" name="" id="" placeholder="Search"/>
           </div>
           <div className="options">
                <Link to="/addvideo">Add Video</Link>
                <Link to="">Sign in</Link>
           </div>
        </div>
     );
}
 
export default Nav;