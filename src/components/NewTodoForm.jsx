import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todoSlice'

export default function NewTodoForm() {
  const [newTodo, setNewTodo] = useState('')
  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault()
    if(newTodo === '') return
    dispatch(addTodo(newTodo))
    setNewTodo('')
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-2">
      <label className="flex flex-col gap-2">
        New Todo:
        <input
          className="border p-2"
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder='New Todo Here...'
        />
      </label>
      <button className='rounded p-2 font-bold bg-sky-500 text-white hover:bg-sky-600 duration-100'>Add</button>
    </form>
  )
}
