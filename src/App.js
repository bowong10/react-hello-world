import React, {Component} from 'react';
import Header from './Header'
import Content from './Content'

import logo from './logo.svg';
import './App.css';
import bwhale from './image/belugawhale.jpg'
import Conditional from './Conditional'


/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>hehed</h1>
        <img src={bwhale}></img>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/


class App extends Component { // or extends React.Component
  constructor(){
    super();
    this.state = {  
            birdtype: "parrot",
            birdname: "normigi",
            isLoading: true,
            unreadMessages: ["message 1", "you've got mail"]
    };
  }
/*
  componentDidMount a lifeCycle method allows you to run some code when the component first mount to the dom
*/
  componentDidMount(){
    setTimeout(()=> {
                this.setState({isLoading:false})
                  }, 1500
              )
  }

  render() {
    return (
      <div>
        <Conditional isLoading={this.state.isLoading}/>
      
        <div className="App">
          {
            //<h1>{this.state.birdname}</h1>
          }

          <Header />
          <Content />
        </div>
      
      </div>
    );
  }
}


export default App;