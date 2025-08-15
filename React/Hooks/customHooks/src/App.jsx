import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import { useTodos } from './Hooks/useTodos';
import { useCount } from './Hooks/useCount';
import { useDebouncing } from './Hooks/useDebouncing';


function Track({todos}) {
  return <div>
    {todos.title}<br></br>
    {todo.discription}
  </div>
}

function App() {

  const [value, setValue] = useState(0);
  const debounceValue = useDebouncing(value, 500);

  useEffect(() =>{
    fetch("")
  }, [debounceValue])

  //const [todos, loading] = useTodos(5); //n is harcoded so we are good.
  const [count, setCount] = useState(0);
  useCount(() => {
    setCount(c => c + 1);
  }, 1000)
  return (
    <>
    {/*loading ? "Loading...." :  todos.map(todo => <Track todo={todo}/>)*/}
      {/*Timer is at {count} */}


      Debounded value is {debounceValue}
      <input type="text" onChange={e => setValue(e.target.value)}/>
    </>
  )
}

export default App
