import React, { Component } from 'react';
import { render } from 'react-dom';
import TaskList from './TaskList';
import "./style.css";



class App extends Component {  

  render() {
    return (
      // properties allow you to ref a specific div in your CSS file
      <div className='App'>
        Treat-Yo-Self
        <TaskList />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'))