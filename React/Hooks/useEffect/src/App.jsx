import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
//hook
  useEffect(() => {
    setInterval(() =>{
      fetch("https://sum-server.100xdevs.com/todos")
      .then(async function(res){
        const json = await res.json();
        setTodos(json.todos); //Re-render.
      })
    }, 5000) ///SetInterval cause's the re-render every 5 sec.
  }, []) //Dependency array suggests todo's re-renders only once after the refresh.

  return (
    <>
    {todos.map(todo => <Todo key={todo.id} title ={todo.title} description= {todo.description}/>)}
    </>
  )
}
function Todo({title, description}){
  return (
    <div>
      <h1>
        {title}
      </h1>
      <h3>
        {description}
      </h3>
    </div>
  )
}

export default App
