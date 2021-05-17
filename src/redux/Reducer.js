const initialState = {
    show: true,
    scrollPos: 0,
    flag: false,
    size: window.innerWidth
}

const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_SIZE' :
            return {...state, size: action.payload}
        case 'CHANGE_FLAG' :
            return {...state, flag: action.payload}
        // case 'CHANGE_SHOW' :
        //     return {...state, show: action.payload}
        // case 'CHANGE_SCROLLPOS' :
        //     return {...state, scrollPos: action.payload}
        default :
            return state
    }
}

export default Reducer


