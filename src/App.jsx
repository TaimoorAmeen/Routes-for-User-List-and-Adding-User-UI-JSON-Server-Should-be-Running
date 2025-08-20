import {Navigate, Route, Routes } from "react-router";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import College from "./College";
import Navbar from "./Navbar";
import Student from "./Student";
import Department from "./Department";
import CollegeDetails from "./CollegeDetails";

const App = () => {  
  return(
    <div>

      <Navbar/>
    
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/about" element={ <About/> }/>
        <Route path="/login" element={ <Login/>}/>

        <Route path="/college" element={ <College/>}>
          <Route path="student" element={<Student/>}/>
          <Route path="department" element={<Department/>}/>
          <Route path="details" element={<CollegeDetails/>}/>
        </Route>
        
        <Route path="/*" element={<Navigate to="/login"/>}/>
      </Routes>
    </div>
  )
}

export default App;