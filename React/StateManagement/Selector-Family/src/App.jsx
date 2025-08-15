import './App.css'
import { todoAtomFamily } from './storage/atoms/atoms'
import {RecoilRoot, useRecoilValue} from 'recoil'

function App() {

  //Accessing the todso with the 
  return (
    <RecoilRoot>
      <Todo id={1}/><br/> 
      <Todo id={2}/><br/>
    </RecoilRoot>
  )
}

function Todo({id}){

  const [todo, setTodo] = useRecoilValue(todoAtomFamily(id));
      //for a loader use "useRecoilStateLoadable" here instead of useRecoilValue
      //If you use this the todo is no longer a component but an object that return { content, state which is a loading bar }.
      //If only need value then you can use the "useRecoilStateValue" and remove the setTodo 
  return (
    <>
      {todo.title}<br/>
      {todo.description}
    </>
  )
}

export default App