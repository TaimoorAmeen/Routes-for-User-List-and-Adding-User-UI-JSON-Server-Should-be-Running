import React, { Fragment } from 'react'
import { Link, Outlet } from 'react-router'
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
                <Link className="link" to='/'>Home</Link>
              </li>
              <li>
                <Link className="link" to='/login'>Login</Link>
              </li>
              <li>
                <Link className="link" to='/about'>About</Link>
              </li>
              <li>
                <Link className="link" to='/college'>College</Link>
              </li>
          </ul>
          
        </div>
    </div>
    <Outlet/>
    </Fragment>
  )
}

export default Navbar