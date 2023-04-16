import { useDispatch } from 'react-redux'
import { deleteTodo, toggleTodo } from '../redux/todoSlice'

export default function Todo({ id, completed, text }) {
  const dispatch = useDispatch()

  const todoStyle = completed ? 'opacity-50 line-through' : ''

  function handleDeleteTodo() {
    if(confirm(`Are you sure want to delete this todo [${text}]?`)) {
        dispatch(deleteTodo(id))
    }
  }

  return (
    <div className="flex gap-8 items-center p-2 even:bg-gray-200">
      <label className="flex gap-2 items-center grow hover:cursor-pointer">
        <input
          type="checkbox"
          defaultChecked={completed}
          onChange={() => dispatch(toggleTodo(id))}
        />
        <span className={todoStyle}>{text}</span>
      </label>
      <button
        className="bg-red-500 text-white duration-100 hover:bg-red-600 rounded px-2 py-1 ml-auto"
        onClick={() => handleDeleteTodo()}
      >
        Delete
      </button>
    </div>
  )
}
