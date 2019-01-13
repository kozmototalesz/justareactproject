import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './store'; 
import ContactComponent from './components/ContactComponent/ContactComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
            <ContactComponent></ContactComponent>
        </div>
      </Provider>
    )
  }
}

export default App;
