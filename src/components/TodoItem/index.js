const TodoItem = props => {
  const {todo, deleteItem} = props
  const {id, title} = todo

  const itemDelete = () => {
    deleteItem(id)
  }

  return (
    <li>
      <p>{title}</p>
      <button onClick={itemDelete} type="button">
        Delete
      </button>
    </li>
  )
}
export default TodoItem
