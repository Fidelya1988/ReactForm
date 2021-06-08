import React from 'react'
import './App.css';
import Content from './Content';
import LoginForm from './Form/Form';

function App(props) {
  debugger;
  return (
    <div className="App">
      <div>
        <LoginForm login={props.state.data.login} bio={props.state.data.bio} dispatch={props.dispatch}/>
        
      </div>
     <Content login={props.state.data.login} bio={props.state.data.bio} subscribe={props.subscribe}/>
    </div>
  );
}

export default App;
