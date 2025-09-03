import React from 'react'
import { Link } from 'react-router';
const List = () => {
    const userData = [
    {id:1,name:"Taimoor Ameen"},
    {id:2,name:"Dawood Ameen"},
    {id:3,name:"Ahmad Ameen"},
    {id:4,name:"Bruce"},
    {id:5,name:"Peter"},
    {id:6,name:"Tony"}
  ];
  return (
    <div>
        <h1>User List Page</h1>
        {
            userData.map((item)=>(
                <div key={item.id} style={{margin:"20px"}}>
                    <h4><Link to={"/users/"+item.id}>{item.name}</Link></h4>
                </div>
            ))
        }
    </div>
  )
}

export default List