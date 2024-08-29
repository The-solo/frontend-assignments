import ProfileCardComponent from './components/profileComponent.jsx';
import { MulticolorBGComponent } from './components/multiColorBGComponent.jsx';
import { RecoilRoot} from 'recoil'

function App() {
  return (
    <div>
      <RecoilRoot>
        {/*<ProfileCardComponent/> */}
        <MulticolorBGComponent/>
      </RecoilRoot>
    </div>
  )
}
export default App
