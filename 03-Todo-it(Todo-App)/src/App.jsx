import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { MdModeEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([]);
  const [showFinished, setShowFinished] = useState(true);
  let i = 0;
  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(todoString);
      setTodos(todos);
    } else {
      // Initialize todos state with an empty array if no todos are stored in local storage
      setTodos([]);
    }
  }, []);

  useEffect(() => {
    saveToLS();
  }, [todos]);

  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const toggleFinished = () => {
    setShowFinished(!showFinished);
  }

  const handleInput = (e) => {
    setTodo(e.target.value);
  }

  const handleAdd = () => {
    if (todo.trim() !== "") {
      setTodos([...todos, { id: uuidv4(), todo, isDone: false }]);
    }
    setTodo("");
  }

  const handleEdit = (id) => {
    let t = todos.filter(item => item.id === id)
    setTodo(t[0].todo);
    setTodos(todos.filter(item => item.id !== id))
  }

  const handleDelete = (id) => {
    setTodos(todos.filter(item => item.id !== id))
  }

  const handleCheckBox = (id) => {
    setTodos(todos.map(item => {
      if (item.id === id) {
        return { ...item, isDone: !item.isDone };
      }
      return item;
    }))
  }

  return (
    <>
      <Navbar />
      <div className="container bg-violet-200 min-h-[80vh] mx-3 md:w-1/2 md:mx-auto my-5 rounded-xl p-5">
        <h1 className='font-bold text-center text-xl'>Todo-it - Manage your tasks in one place!</h1>
        <div className="addtodo my-5 flex flex-col">
          <h2 className='text-lg font-bold my-2'>Add a Todo</h2>
          <input type="text" value={todo} onChange={handleInput} className='w-full h-10 rounded-lg outline-[rgb(0,0,0)] p-2' />
          <div className='my-4'>
            <button onClick={handleAdd} className=' w-full bg-violet-600 hover:bg-violet-700 hover:font-bold hover:transition-all  px-4 py-1 rounded-xl text-white cursor-pointer'>
              Save
            </button>
          </div>
        </div>
        <input type="checkbox" onChange={toggleFinished} checked={showFinished} name="" id="" /> Show Finished

        <h2 className='text-lg font-bold'>Your Todos</h2>
        <div className="todos md:mx-8">
          {todos.length === 0 && <div className='text-l h-[20vh]'>No Todos to Display</div>}
          {todos.map(item => ((showFinished || !item.isDone) &&
            <div key={item.id} className="todo flex align-center justify-between md:gap-5 md:my-5 ">
              <div className='flex md:gap-5 gap-3'>
              <div className="sno">{++i}</div>
                <div className="checkbox">
                  <input className='w-4 h-4 border-gray-300 rounded-full focus:ring-purple-500 focus:ring-2' type="checkbox" onChange={() => handleCheckBox(item.id)} checked={item.isDone} name={item.id} id={`checkbox-${item.id}`} />
                  <label htmlFor={`checkbox-${item.id}`} className="ms-2 text-sm font-medium text-gray-900"></label>
                </div>
                <div className={item.isDone ? "line-through font-bold overflow-auto" : "" + "font-bold overflow-auto"}>
                  {item.todo}
                </div>
              </div>
              <div className="buttons flex gap-4">
                <button onClick={() => handleEdit(item.id)} className='bg-violet-600 hover:bg-violet-700 hover:font-bold hover:transition-all px-4 py-1 rounded-xl text-white cursor-pointer'><MdModeEdit /></button>
                <button onClick={() => handleDelete(item.id)} className='bg-violet-600 hover:bg-violet-700 hover:font-bold hover:transition-all px-4 py-1 rounded-xl text-white cursor-pointer'><AiFillDelete /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
