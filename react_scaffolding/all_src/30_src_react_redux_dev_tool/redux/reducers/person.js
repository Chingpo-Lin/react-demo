import {ADD_PERSON} from '../constant'

// initial people list
const initState = [{id:'001',name:'tom',age:18}]

export default function personReducer(preState=initState,action) {
    console.log("personreducer@#")
    const {type,data} = action
    switch (type) {
        case ADD_PERSON: // if add person
            return [data, ...preState]
        default:
            return preState
    }
}