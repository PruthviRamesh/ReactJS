import { Route, Routes } from "react-router-dom";
import Home from "../home";
import Books from "../books";
import AddBooks from "./addBook";
import AddUsers from "./addUsers";
import Users from "./users";
import ReadBook from "../readBook";
import NavBar from "../navbar";
const AdminPortal = () => {
    return ( 
        <div className="adminportal">
           <NavBar/>
           <Routes>
            <Route element={<Home/>} path='/'/>
            <Route element={<Books/>} path='/books'/>
            <Route element={<Users/>} path='/users'/>
            <Route element={<AddBooks/>} path='/addBooks'/>
            <Route element={<AddUsers/>} path='/addUsers'/>
            <Route element={<ReadBook/>} path='/books/:id'/>
           </Routes>
        </div>
     );
}
 
export default AdminPortal;