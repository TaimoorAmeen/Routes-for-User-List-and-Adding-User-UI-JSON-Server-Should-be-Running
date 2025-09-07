import AddUser from "./AddUser";
import "./App.css";
import UserList from "./UserList";
import { Routes,Route, NavLink } from "react-router";
const App = () => {
  return(
    <div>
      <ul className="nav-list">
        <li>
          <NavLink className="list-links" to="/">List</NavLink>
        </li>
        <li>
          <NavLink className="list-links" to="/add">Add User</NavLink>
        </li>
      </ul>
      {/* <h1>Make Routes and Pages to Add User and User List UI</h1> */}
      {/* <UserList/> */}
      <Routes>
        <Route path="/" element={<UserList/>}/>
        <Route path="/add" element={<AddUser/>}/>
      </Routes>
    </div>
  )
};

export default App;
