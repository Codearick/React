import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [sno, setSno] = useState(1)
  const [isDone, setIsDone] = useState(false)


  const handleInput = (e) => {
    setTodo(e.target.value);
  }

  const handleAdd = () => {
    setSno(sno + 1);
    setTodos([...todos, {sno, todo, isDone: false }]);
    setTodo("");
  }

  const handleEdit = () => {

  }

  const handleDelete = () => {

  }
  
  const checkDone = (e) => {
    setIsDone(e.target.checked)
  }

  return (
    <>
      <Navbar />
      <div className="container bg-violet-200 min-h-[80vh] mx-auto my-5 rounded-xl p-5">
        <div className="addtodo my-5">
          <h2 className='text-lg font-bold'>Add a Todo</h2>
          <input type="text" value={todo} onChange={handleInput} className='w-1/2 h-10 rounded-sm outline-[rgb(0,0,0)]' />
          <button onClick={handleAdd} className='bg-violet-600 hover:bg-violet-700 hover:font-bold hover:transition-all  px-4 py-1 rounded-xl mx-6 text-white cursor-pointer'>
            Add
          </button>
        </div>

        <h2 className='text-lg font-bold'>Your Todos</h2>
        <div className="todos">
          {todos.map(item => (
            <div key={item.sno} className="todo flex align-center gap-5 my-5">
            <div className="checkbox"><input onChange={checkDone} checked={isDone} type="checkbox" name={item.sno} id={`checkbox-${item.sno}`} /></div>
            <div className="sno">{item.sno}</div>
            <div className={isDone?"line-through":""}>
              {item.todo}
            </div>
            <div className="buttons flex gap-4">
              <button onClick={handleEdit} className='bg-violet-600 hover:bg-violet-700 hover:font-bold hover:transition-all px-4 py-1 rounded-xl text-white cursor-pointer'>Edit</button>
              <button onClick={handleDelete} className='bg-violet-600 hover:bg-violet-700 hover:font-bold hover:transition-all px-4 py-1 rounded-xl text-white cursor-pointer'>Delete</button>
            </div>
           </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
