import NewTodoForm from './components/NewTodoForm'
import TodoList from './components/TodoList'

export default function App() {
  return (
    <div className='container mx-auto p-10 flex flex-col gap-8'>
      <NewTodoForm />
      <TodoList />
    </div>
  )
}
