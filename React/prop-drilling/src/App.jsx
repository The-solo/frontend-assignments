import { useContext, useState } from 'react'
import './App.css'
import { CountContext } from './components/contextAPI';

//Context API isn't the solution for prop-drilling but a it's better syntaxually.
//How to fix the conext API and re-renders ? => "STATE MANAGEMENT".

function App() {
  const [count, setCount] = useState(0);
// wrapping the component inside the contextAPI 
  return (
    //Re-rendering the components that have been called here. 
    <>
      <CountContext.Provider value={count}> 
        <CountRender count={count} setCount={setCount}/>  
      </CountContext.Provider>

      <Count count={count}/>
      <Buttons count={count} setCount={setCount}/>
    </>
  )
}

function CountRender() {
  const count = useContext(CountContext); //Initizaling / passing  the state varibale as a context.
  return (
    <div>
        {count}
    </div>
  )
}


//Below are the examples of prop drilling i.e. passing the state varibale to each component that needs it.
function Count({count}) {
  return (
    <div>
        {count}
    </div>
  )
}

function Buttons({count, setCount}) {
  return (
    <>
    <button onClick={() => {
      setCount(count+1);
    }}>Incriment</button> 

    <button onClick={(() => {
      setCount(count-1);
    })}>Decriment</button>
    </>
  )
}

export default App
