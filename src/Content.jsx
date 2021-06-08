// import React, {useState, useEffect} from 'react';
import React from 'react'
class Content extends React.Component {
// constructor (props){
//   super(props);
//   this.login=props.login;
//   this.bio =props.bio
// }

  // const [login,setLogin] = useState(props.login);
  // const [bio,setBio] = useState(props.bio);
  
  // useEffect(()=>{
  
  //   setLogin(props.login)
  //  setBio(props.bio) 
  //    },[props]

  // )
  // console.log(login, bio)
render (){
  return (
        <div>

       <h3>login:{this.props.biologin}</h3>
        <div>message: {this.props.bio}</div>
      </div>  
    )}
}
export default Content;