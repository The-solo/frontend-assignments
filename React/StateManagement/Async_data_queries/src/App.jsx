import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil"
import { notifications, totalNotification } from "./storage/atoms/atoms"
import { useEffect } from "react"

function App() {
  //The recoil hook will only work if it's wrapped inside the <RecoilRoot> hook
  return (
    <RecoilRoot> 
      <NotificationBar/>
    </RecoilRoot>
  )
}

function NotificationBar() {
  
  const [networkCount, setNetworkCount] = useRecoilState(notifications);
  const totalNotificationCount = useRecoilValue(totalNotification);


  return (
    <div>
      <button>Home</button>

      <button>My_Network({networkCount.network > 100 ? "99+" : networkCount.network})</button>
      <button>Jobs({networkCount.jobs})</button>
      <button>Messages({networkCount.messaging})</button>
      <button>Notifications({networkCount.notifications}) </button>

      <button>Me({totalNotificationCount})</button>
    </div>
  )
}

export default App
