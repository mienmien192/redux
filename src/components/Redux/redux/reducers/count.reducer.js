const initiaState = 1
const countReducer=(state=initiaState, action)=>{
    switch(action.type){
        case 'PLUS':
            return state+1
        case 'MINUS':
            return state-1
        case 'PLUS10':
            return state+10
        case 'MINUS10':
            return state-10    
        default:
            return state
    }
    
}
export default countReducer

