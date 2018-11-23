
const initState = {
    listSite: [],
}
const site = (state = initState, action = {})=>{
    switch(action.type){
        case 'GET_LIST_SITE':
            let listSite = [...state.listSite]
            listSite = listSite.concat(action.data.data ? action.data.data : [])
            return {...state, listSite: listSite, }
        default: 
            return state
    }
}
export default site