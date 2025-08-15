import { atomFamily, atom } from 'recoil'
import { TODOS } from '../../todos'


//Syntax for writting a atomFamily that can be used by multiple components if they have access to id.
//Atom family return a function which is an atom.

export const todoAtomFamily = atomFamily({

    //Atoms cannot have the "async backend" calls for that you need a selectorFamily.
    //We are not actually hitting the backend here,
    // we are using the data from a local file but usually we make a backend call
    key : "todoAtomFamily",
    default : id => {
        return TODOS.find(x => x.id === id)
    },
});

const todoAtom = atom({
    key : "todoAtom",
    default : 1
});