import React from 'react'
import { Link } from 'react-router'
import "./style.css";

const PageNotFound = () => {
  return (
    <div style={{textAlign:"center"}} className='page'>
        <h1>Page Not Found</h1>
        <div className='notFound'>
            <Link to="/" className='link'>Go to Home Page</Link>
        </div>
            <img style={{width:"60%"}} src="https://admiral.digital/wp-content/uploads/2023/08/404_page-not-found.png" alt="" />
    </div>
  )
}

export default PageNotFound