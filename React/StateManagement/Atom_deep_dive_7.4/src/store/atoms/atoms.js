import { atom, selector } from 'recoil'

export const networkAtom = atom({
    key : "networkAtom",
    default : 10,
});

export const jobAtom = atom({
    key : "jobAtom",
    default : 0,
});

export const messageAtom = atom({
    key : "messageAtom",
    default : 1,
});

export const notificationAtom = atom({
    key : "notificationAtom",
    default : 3,
});


//Selector for getting total notifications
export const totalNotifications = selector({
    key : "totoalNotifications",
    get : ({get}) => {
        const first = get(networkAtom);
        const second = get(messageAtom);
        const third = get(notificationAtom);
        const fourth = get(jobAtom);
        return first+second+third+fourth;
    }
});



  
