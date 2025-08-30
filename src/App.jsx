import React from "react";
import { Link, Navigate, Outlet, Route, Routes } from "react-router";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Navbar from "./Navbar";
import PageNotFound from "./PageNotFound";
import College from "./College";
import Student from "./Student";
import Department from "./Department";
import CollegeDeatails from "./CollegeDeatails";

function DashboardLayout() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
}
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
        </Route>

        <Route path="/college" element={<College />}>
          <Route index element={<Student />}></Route>
          <Route path="department" element={<Department />}></Route>
          <Route path="details" element={<CollegeDeatails />}></Route>
        </Route>
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
