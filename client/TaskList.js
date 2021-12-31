import React, { Component } from 'react';
import { render } from 'react-dom';

// const openTaskListDummy = [
//   id: {
//     title: 'Task 1',
//     status: false,
//     // date: 
//   },
//   {
//     title: 'Task 2',
//     status: false,
//     // date: 
//   },
//   {
//     title: 'Task 3',
//     status: false,
//     // date: 
//   },
// ];

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // make this an array that will store objects
      openTaskList: [],
      completedTaskList: [],
    }

    this.addTaskHandler = this.addTaskHandler.bind(this);
    this.completedTaskHandler = this.completedTaskHandler.bind(this);
    this.deleteTaskHandler = this.deleteTaskHandler.bind(this);
  }
  /** 
   * everything outside the contructor is attached 
   * to the constructed objects prototype 
  */

  addTaskHandler (event) {
    // alert('Your task has been added to the task list.')
    /** value will take whatever value inside the getElementById
     * assigning the user input to 
     * */
    const addTask = document.getElementById('addTask').value
    // const addTaskDescription = document.getElementById('addTaskDescription').value

    // this is needed when button/onClick is within a form tag (I think)
    event.preventDefault()

    // const currDate = Date();
    this.setState({openTaskList: 
      [ 
        ...this.state.openTaskList,
        {
          id: addTask + 1,
          title: addTask,
          // description: addTaskDescription,
          status: false,
          // date: currDate,
        }
      ]
    })
    console.log(...this.state.openTaskList)
  
    // console.log(this.state.openTaskList)

    document.getElementById('addTask').value = '';
  }
  
  completedTaskHandler (event) {
    console.log('complete click')
    // spread the props in state to copy them
    // const newState = {...this.state};
    // delete newState.addTaskList(whatevers been called)
    event.preventDefault()

    this.setState({completedTaskList: [ ...this.state.openTaskList,
      {
        id: this.openTaskList.id,
        title: this.openTaskList.title,
        // description: this.openTaskList.description, 
        status: true,
        // date: currDate,
      }
    ]})
  }

  deleteTaskHandler (event) {
    console.log('delete click')
    alert('Your task has been deleted.');
    // context of 'this' is the button that was clicked
    // console.log(this)
    event.preventDefault()
    
    const deleteTask = document.getElementById(index).value
    
    console.log('task deleted: ', deleteTask)
    this.setState({},() => {
         // this.state.openTaskList.splice(index, 1) ??
      
    })

  }

  render() {
    const openTasks = this.state.openTaskList.map((task, index) => {
      // console.log(task);
      /** 
       * since we are running the map function to display the elements 
       * (objects) in the openTaskList property, we can add a unique key 
       * to each of the div. key is specific to jsx and can't be seen 
       * inside the browser DOM tree 
       * 
       * using index for unique keys is not recommended if the order 
       * of items changes
       * */
      // console.log(task)
      // created a property within object element of state array openTaskList
      // task.index = index;

      return(
        <div id={index} className='openTaskItem'>
          <p>{task.title}</p>
          {/* <p>{task.description}</p> */}
          <button onClick={this.completedTaskHandler}>
            Complete Task
          </button>
          <button onClick={(e) => this.deleteTaskHandler(e.target.index)}>
            Delete Task
          </button>
        </div>
      )
    })

    return (
      <div className='taskList'>
        <form>
          {/* input inherently has the value property */}
          <input id='addTask' type='text' />
          {/* <input id='addTaskDescription' type='text'/> */}
          <button onClick={this.addTaskHandler}>
            Add Task
          </button>
          <div>
            {/* {openDummyTasks} */}
            {openTasks}
          </div>
        </form>
      </div>
    )
  }
}

export default TaskList;