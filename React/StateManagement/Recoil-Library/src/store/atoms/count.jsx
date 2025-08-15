import { atom, selector } from 'recoil'

//Selector are different from atoms

//we are declaring the state here 
export const countAtom = atom({
    key : "countAtom",
    default : 0
});

//Selector 
export const EvenSelector = selector({
    key : "EvenSelector",
    get : (props) => {
        const count = props.get(countAtom); //count depends on countAtom
        return (count % 2 == 0);
    }
});
