import { useSelector } from 'react-redux'
import Todo from './Todo'

export default function TodoList() {
  const todos = useSelector((state) => state.todo)

  return (
    <div className='flex flex-col gap-2'>
      <h1 className="text-2xl font-extrabold tracking-widest border-b-2 pb-2">React + Redux Todo List</h1>
      <div className="opacity-50">{todos.length === 0 && 'No Todo Found'}</div>
      <div className='flex flex-col gap-2'>
        {todos.map((todo) => {
          return <Todo key={todo.id} {...todo}/>
        })}
      </div>
    </div>
  )
}
