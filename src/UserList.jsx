import React from 'react';
import { Link } from 'react-router';
import { useEffect, useState } from "react";
const UserList = () => {
  const[userData, setUserData] = useState([]);
  const[loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    getUserData();
  },[]);

  const getUserData = async() => {
      const url = "http://localhost:3000/users";
      let response = await fetch(url);
      response = await response.json();
      console.log(response);
      setUserData(response);
      setLoading(false);
  }

  return (
    <div>

        <ul className="user-list user-list-head">
          <li>Name</li>
          <li>Age</li>
          <li>Email</li>
        </ul>
        {
          !loading ?
          userData.map((item,index) => (
            <ul key={index} className="user-list">
                <li>{item.name}</li>
                <li>{item.age}</li>
                <li>{item.email}</li>
            </ul>
          ))
          : <h1>Data Loading....</h1>
        }
    </div>
  );  
}

export default UserList;