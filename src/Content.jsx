// import React, {useState, useEffect} from 'react';
import React from 'react'
const Content =(props)=>{

  return (
        <div>

       <h3>{props.login}</h3>
        <div>message: {props.bio}</div>
      </div>  
    )
}
export default Content;