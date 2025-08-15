import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


let counter = 1;
function App() {
  //global state varibale with default values.
  const [todos, setTodos] = useState([{
    id : 0,
    title : "code",
    description : "Do your projects asap"
}]);


function addTodo(){
  const newTodo = [];
  for(let i=0; i<todos.length; i++){
    newTodo.push(todos[i]);
  }
  
  newTodo.push({
    id : counter++,
    title : Math.floor(Math.random()*100),
    description : Math.floor(Math.random()*100)
  })
  setTodos(newTodo);
}

  return (
    <>
    <button onClick={addTodo}>Add a todo</button>
    {todos.map(function(todo){ //Rendering the list
      return <Todo key={todo.id} title={todo.title} description={todo.description}/>
    })}
    </>
  )
}

//A todo component that takes todo and discription as an input and renders it
function Todo({title, description}){
  return(
    <div>
    <h1>{title}</h1>
    <h4>{description}</h4>
    </div>
  )
}

export default App
