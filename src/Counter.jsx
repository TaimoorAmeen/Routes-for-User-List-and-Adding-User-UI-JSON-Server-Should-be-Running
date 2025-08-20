import React, { useEffect, useState } from 'react'
const Counter = ({count, data}) => {

  useEffect(()=>{
    console.log("mounting phase only");
  },[]);

  useEffect(()=>{
    console.log("update phase only");
  },[count]);
  useEffect(()=>{
        return()=>{
            console.log("unmount phase only");
        }
    },[]);
  return (
    <div>
        <h1>Counter value: {count}</h1>
        <h1>Data Value: {data}</h1>
    </div>
  )
}

export default Counter