import React, { Fragment } from 'react'
import { Link, NavLink, Outlet } from 'react-router'
import "./style.css";
const Navbar = () => {
  return (
    <Fragment>
      <div className='header'>
        <div>
            <Link className='link' to='/'><h2>Logo</h2></Link>
        </div>
        <div>
          <ul>
              <li>
                {/* Actice class is added automatically in NavLink this is very helpful for styling */}
                <NavLink className={({isActive}) => isActive? 'custom-active':'link'} to='/'>Home</NavLink>
              </li>
              <li>
                <NavLink className={({isActive}) => isActive? 'custom-active':'link'} to='pk/user/login'>Login</NavLink>
              </li>
              <li>
                <NavLink className="link" to='pk/user/about'>About</NavLink>
              </li>
              <li>
                <NavLink className="link" to='/college'>College</NavLink>
              </li>
              <li>
                <NavLink className="link" to="/users">Users</NavLink>
              </li>
              <li>
                <NavLink className="link" to="/users/list?">List</NavLink>
              </li>
          </ul>
          
        </div>
    </div>
    <Outlet/>
    </Fragment>
  )
}

export default Navbar