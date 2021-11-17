import React, { Component } from 'react';
import { render } from 'react-dom';
// import { hot } from 'react-hot-loader/root';

const openTaskList = [
  {
    title: 'Task 1',
    status: false,
  },
  {
    title: 'Task 2',
    status: false,
  },
  {
    title: 'Task 3',
    status: false,
  },
];

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // make this an array
      openTaskList: [],
      completedTaskList: [],
    }
  }

  addTaskHandler (event) {
    // 

  }
  
  completedTaskHandler (event) {
    // spread the props in state to copy them
    // const newState = {...this.state};
    // delete newState.addTaskList(event.target.id)
    // this.setState({})
  }

  render() {

    const openDummyTasks = openTaskList.map((task) => {
      console.log(task);
      return(
        <div>
          <p>{task.title}</p>
          <button>Complete Task</button>
          <button>Delete Task</button>
        </div>
      )
    })

    return (
      <div>
        <input type='text' />
        <button>Add Task</button>
        {openDummyTasks}
      </div>
    )
  }
}

export default TaskList;