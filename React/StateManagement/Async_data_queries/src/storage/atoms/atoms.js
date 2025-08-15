import { atom, selector } from 'recoil'


//The default value cannot be a function for an atom.
//But a seletor which is async Can.
//Selector's can be a one way to incorporat the async date into recoil data flow.


//An atom
export const notifications = atom({
    key : "netoworkAtom",

    default : { 
      key : "networkAtomSelector",
      get : async () => { //A Async function wrapped inside the selector as a default value.
        const res = await axios.get("URl TO THE BACKEND")
        return res.data
      }
    }
});


//A selctor which is used for a async backend calls
export const totalNotification = selector({
    key : "totalNotification",
    get : ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network +
        allNotifications.jobs +
        allNotifications.notifications +
        allNotifications.messaging 
    }
});
