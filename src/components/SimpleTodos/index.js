import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {
    todoList: initialTodosList,
    userInput: '',
    editTodoTitle: '',
  }

  changeTitleFuction = () => {
    this.setState()
  }

  deleteItem = id => {
    const {todoList} = this.state
    const updateTodoList = todoList.filter(eachTodo => eachTodo.id !== id)
    this.setState({todoList: updateTodoList})
  }

  includedTodoUser = event => {
    const userEnterTodo = event.target.value
    this.setState({userInput: userEnterTodo})
  }

  addTodo = () => {
    const {userInput} = this.state
    const inputArray = userInput.split(' ')
    const num = parseInt(inputArray.slice(-1))
    const multibleTodo = inputArray.slice(0, -1)
    if (num.toString() !== 'NaN') {
      for (let i = 0; i < num; i += 1) {
        const newTodo = {
          id: uuid(),
          title: multibleTodo.join(' '),
        }
        this.setState(preveState => ({
          userInput: '',
          todoList: [...preveState.todoList, newTodo],
        }))
      }
    } else if (userInput !== '') {
      const newTodo = {
        id: uuid(),
        title: userInput,
      }
      this.setState(preveState => ({
        userInput: '',
        todoList: [...preveState.todoList, newTodo],
      }))
    }
  }

  savedTodo = (editTodoId, todoContent) => {
    const {todoList} = this.state
    const filterTodo = todoList.map(eachTodo => {
      if (editTodoId === eachTodo.id) {
        const updateTodo = {...eachTodo, title: todoContent}
        return updateTodo
      }
      return eachTodo
    })
    this.setState({todoList: filterTodo})
  }

  todoEdited = editTodId => {
    const {todoList} = this.state
    const enterEditTodo = todoList.find(eachTodo => editTodId === eachTodo.id)
    this.setState({editTodoTitle: enterEditTodo.title})
  }

  updateTodoFunc = editValue => {
    this.setState({editTodoTitle: editValue})
  }

  render() {
    const {todoList, userInput, editTodoTitle} = this.state
    console.log(todoList)

    return (
      <div className="bg-cont">
        <div className="card-cont">
          <h1 className="head">Simple Todos</h1>
          <div className="input-container">
            <input
              onChange={this.includedTodoUser}
              className="input"
              id="userInput"
              type="text"
              value={userInput}
              placeholder="Enter Todos"
            />
            <button onClick={this.addTodo} className="add-btn" type="button">
              Add
            </button>
          </div>
          <ul className="todos-list">
            {todoList.map(eachTodo => (
              <TodoItem
                key={eachTodo.id}
                todo={eachTodo}
                deleteItem={this.deleteItem}
                todoEdited={this.todoEdited}
                savedTodo={this.savedTodo}
                editTodoTitle={editTodoTitle}
                updateTodoFunc={this.updateTodoFunc}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
