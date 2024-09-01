import ProfileCardComponent from './components/profileComponent.jsx';
import { MulticolorBGComponent } from './components/multiColorBGComponent.jsx';
import { RecoilRoot} from 'recoil'
import { ParagraphGenerator } from './components/ParagraphGenerator.jsx';


//Comment out the other components. 

function App() {
  return (
    <div>
      <RecoilRoot>
        {/*<ProfileCardComponent/> */}
        { /* <MulticolorBGComponent/> */}
        <ParagraphGenerator/>
      </RecoilRoot>
    </div>
  )
}
export default App
