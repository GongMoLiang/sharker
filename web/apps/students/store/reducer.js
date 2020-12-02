const defaultStore = {
    current: 1
}

const reduer = (store = defaultStore, action)=>{

    if(action.type === "CHANGEPAGE"){
        return {
            ...store,
            current: action.page
        }
    }
    return store
}

export default reduer