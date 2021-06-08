// import React, {useState, useEffect} from 'react';
import React from 'react'
class Content extends React.Component {
state ={
  login: this.props.login,
  bio: this.props.bio
}

componentDidUpdate(prevProps, prevState) {
  if(prevProps !== this.props)
 { this.setState({
    login: this.props.login,
    bio: this.props.props.bio
  })}
}
render (){
  return (
        <div>

       <h3>login:{this.state.login}</h3>
        <div>message: {this.state.bio}</div>
      </div>  
    )}
}
export default Content;