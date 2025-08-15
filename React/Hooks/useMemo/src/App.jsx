import { useEffect, useMemo, useState } from 'react'
import './App.css'
import axios from 'axios' 

function App() {

  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(0);

//wrap the heavy operation inside the useMemo to minimize the re-renders.
//useMemo makes sure the this logic runs only when input value is changed.
  let count = useMemo(() => {
    let count = 0;
    for(let i=1; i<=inputValue; i++){
      count+=i;
    }
    return count;
  }, [inputValue])
  //You can use useCallback as well but it depends, either works fine.

  function ChnageCounter(){
    setCounter(counter+1);
  }

  return (
    <div>
     <input onChange={function(e){
      setInputValue(e.target.value);
     }}></input><br></br>
     sum from 1 to {inputValue} is {count}<br></br>

    <button onClick={ChnageCounter}>
      counter {counter}
      </button>
    </div>
  )



//Below logic is used to change the value of id variable upon clicking the button
//and then the request goes with specifc id 
  /*
  const [selectedId, setSelectedId] = useState(5);
  return (
    <div>
      <button onClick={function(){
        setSelectedId(1);
      }}>1</button>

      <button onClick={function(){
        setSelectedId(2);
      }}>2</button>

      <button onClick={function(){
        setSelectedId(3);
      }}>3</button>

      <button onClick={function(){
        setSelectedId(4);
      }}>4</button>

      <Todo id={selectedId}/>
    </div>
  ) */ 
}

//Todo component
function Todo({id}){
  const [todo, setTodo] = useState([]);//local state

  useEffect(() =>{
    axios.get("https://sum-server.100xdevs.com/todo?id="+id) //axios is used to fetch the data from backend.
    .then(function(response){
      setTodo(response.data.todo);
    })
  }, [id]);

  return(
    <div>
      <h1>{todo.title}</h1>
      {todo.description}
    </div>
  )
}

export default App
