import React from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import './App.css';
import {BrowserRouter} from 'react-router-dom';



import Main from './components/MainComponent';

class App extends React.Component {

  render() {
    
    return (
      <BrowserRouter>
      <div className="App">
        <Main />
      </div>
      </BrowserRouter>
    );
  }
}





export default App;
