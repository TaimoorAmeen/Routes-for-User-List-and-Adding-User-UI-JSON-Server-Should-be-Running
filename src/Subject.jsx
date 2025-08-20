import React, { useContext, useState } from 'react'
import { SubjectContext } from './ContextData'

const Subject = () => {
  const subject = useContext(SubjectContext);
  return (
    <div style={{backgroundColor:"skyblue", padding:"10px"}}>
        <h1>Subject: {subject}</h1>
    </div>
  )
}

export default Subject