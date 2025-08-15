
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { countAtom, EvenSelector } from './store/atoms/count';

function App() {
  return (
    //Re-rendering the components here
    <> 
      <RecoilRoot>
        <Count/>
      </RecoilRoot>
    </>
  )
}

function Count() { 
  //This one doesn't need a state-mangment and hence it does not re-render. 
  return (
    <div>
       <CountRender/> 
       <Buttons/>
       <IsEven/>
    </div>
  )
}

function CountRender() {
  const count = useRecoilValue(countAtom); //Getting a value from countAto
  return (
    <div>
      <b>
        {count}
      </b>
    </div>  
  )
}

function IsEven() {
  const isEven = useRecoilValue(EvenSelector); //Using Even Selector
  //conditional looping syntax in JS below
  return <div>
      {(isEven) ? "It is Even" : null}
  </div>
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);//since we only need setCount we use "useSetRecoilState".
  //We can pass the current "VALUE" of as an argument to the function and update the current "VALUE".
  //As result the button component has stopped re-rendering.
  return (
    <>
    <button onClick={() => {
      setCount(function(count){
        return count+1;
      });
    }}>Incriment</button> 

    <button onClick={(() => {
      setCount(function(count){
        return count-1;
      });
    })}>Decriment</button>
    </>
  )
}

export default App
