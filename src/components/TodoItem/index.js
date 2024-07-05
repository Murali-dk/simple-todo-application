import {useState} from 'react'

import './index.css'

const TodoItem = props => {
  const {
    todo,
    deleteItem,
    todoEdited,
    savedTodo,
    editTodoTitle,
    updateTodoFunc,
  } = props
  const {id, title} = todo

  const [checked, setChecked] = useState(false)
  const [editing, setEditing] = useState(false)

  const itemDelete = () => {
    deleteItem(id)
  }

  const editTodos = () => {
    todoEdited(id)
    setEditing(true)
  }

  const changingTodo = event => {
    updateTodoFunc(event.target.value)
  }

  const saveTodo = () => {
    setEditing(false)
    savedTodo(id, editTodoTitle)
  }

  const userAction = event => {
    setChecked(event.target.checked)
  }

  const style = checked === false ? null : 'checked-todo'

  return (
    <li className="todos-item">
      {editing ? (
        <input
          value={editTodoTitle}
          onChange={changingTodo}
          className="edit-todo"
          type="text"
        />
      ) : (
        <div className="content-and-checkbox-cont">
          <input onChange={userAction} id={id} type="checkbox" />
          <p id={id} className={`todo-content ${style}`}>
            {title}
          </p>
        </div>
      )}
      <div>
        {editing ? (
          <button type="button" className="edit-btn" onClick={saveTodo}>
            Save
          </button>
        ) : (
          <button type="button" className="edit-btn" onClick={editTodos}>
            Edit
          </button>
        )}
        <button className="delete-btn" onClick={itemDelete} type="button">
          Delete
        </button>
      </div>
    </li>
  )
}
export default TodoItem
