import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  /*return (
    <div>
      <CardWrapper innerComponent={<TextComponent/>}></CardWrapper>  
    </div>
  ) 
  */ 
//The better way of doing this is to use "Real wrapper".
  return (
    <div> 
      <CardWrapper>   
      Hi there
      </CardWrapper>
    </div>
  ) //childern components.
}

/*function TextComponent() {
  return (
    <div>
      Hello there
    </div>
  )
} */

//wrapper, which takes another component as an input.
function CardWrapper({childern}){ 
  return <div style={{
    border : "2px dotted black",
    padding : 20
    }}>
    {childern}
  </div>
}

// Wrapper card = The structure of the outer card and the inside is something,
//other ppl can write. 
export default App
