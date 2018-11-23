
const initState = {
    listPlace: [],
}
const place = (state = initState, action = {})=>{
    switch(action.type){
        case 'GET_LIST_PLACE':
            let listPlace = [...state.listPlace]
            listPlace = listPlace.concat(action.data.data ? action.data.data : [])
            return {...state, listPlace: listPlace, }
        default: 
            return state
    }
}
export default place