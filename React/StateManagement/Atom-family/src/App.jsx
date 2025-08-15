import './App.css'
import { todoAtomFamily } from './storage/atoms/atoms'
import {RecoilRoot, useRecoilValue} from 'recoil'

function App() {

  //Accessing the todso with the 
  return (
    <RecoilRoot>
      <Todo id={1}/><br/> 
      <Todo id={2}/><br/>
      <Todo id={2}/>
    </RecoilRoot>
  )
}

function Todo({id}){

  const currentTodo = useRecoilValue(todoAtomFamily(id));
  return (
    <>
      {currentTodo.title}<br/>
      {currentTodo.description}
    </>
  )
}

export default App
