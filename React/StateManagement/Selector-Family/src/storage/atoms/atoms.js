import { atomFamily, selectorFamily } from 'recoil'
import { axios } from 'axios'

export const todoAtomFamily = atomFamily({
    key : 'todoAtomFamily',
    default : selectorFamily({
        key : 'todoSelectorFamily',
    //below is a function which return another function which return the below body.
        get : (id) => async ({get}) => {
    //In selector we used async as well but in this case we are using a "dynamic selector"
            const res = await axios.get("utl to the backend with id"=$({id}));
            return res.data.value;
        },
    })
});


//NOTE : Atom family return Multiple atoms. Each atom with specific id in this case.