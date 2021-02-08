import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Myinfo from "./myInfo"

/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
*/

// how to reroute!? why always refer to index js
//https://stackoverflow.com/questions/43026690/declaring-react-routes-in-a-separate-file-and-importing


//ReactDOM.render(<h1>test h1</h1>, document.getElementById("root"));
ReactDOM.render(<App />, document.getElementById("root"));

