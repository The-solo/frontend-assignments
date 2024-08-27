import ProfileCardComponent from './components/profileComponent.jsx';
import { RecoilRoot} from 'recoil'

function App() {
  return (
    <div>
      <RecoilRoot>
        <ProfileCardComponent/>
      </RecoilRoot>
    </div>
  )
}
export default App
