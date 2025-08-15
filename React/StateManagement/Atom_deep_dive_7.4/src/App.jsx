import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { jobAtom, messageAtom, networkAtom, notificationAtom, totalNotifications } from "./store/atoms/atoms"

function App() {
  //The recoil hook will only work if it's wrapped inside the <RecoilRoot> hook
  return (
    <RecoilRoot> 
      <NotificationBar/>
    </RecoilRoot>
  )
}

function NotificationBar() {

  const networkNotifyCount = useRecoilValue(networkAtom);//complete replacement of useState.
  const jobNotifyCount = useRecoilValue(jobAtom);
  const messageNotifyCount = useRecoilValue(messageAtom);
  const notificationCount = useRecoilValue(notificationAtom);

  const totalNotificationCount = useRecoilValue(totalNotifications);

  return (
    <div>
      <button>Home</button>
      <button>My_Network({networkNotifyCount > 100 ? "99+" : networkNotifyCount})</button>
      <button>Jobs({jobNotifyCount})</button>
      <button>Messages({messageNotifyCount})</button>
      <button>Notifications({notificationCount}) </button>
      <button>Me({totalNotificationCount})</button>
    </div>
  )
}

export default App
