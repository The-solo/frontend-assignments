import { useEffect, useState } from 'react'

export function useTodos(n) {
  const [todos, setTodos] = useState([]);
  const [loading, Setloading] = useState(true);

  useEffect(() => { 
    const value = setInterval(() => { //polling the data every n sec.
      axios.get("Backend URL to get random todos.")
      .then(res => {
        setTodos(res.data.todos);
        Setloading(false);
      })
    }, n*1000)

    axios.get("Backend URL to get random todos.") //Making sure it runs at least once.
      .then(res => {
        setTodos(res.data.todos);
        Setloading(false);
      })

//cleaning the previous interval if the n changes.
    return() => {
      clearInterval(value)
    }
  }, [n]); //Introducing the dependency

  return {todos, loading};
} 