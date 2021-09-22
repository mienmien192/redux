import React , {useReducer} from 'react'
const reducer = (state, action)=>{
    switch(action){
        case 'PLUS':
            return state+1
        case 'MINUS':
            return state-1
        default:
            return state
    }
}
const reducer2 = (state, action)=>{
    switch(action){
        case 'PLUS10':
            return state+10
        case 'MINUS10':
            return state-10
        default:
            return state
    }
}
const TaskUseReducer = () => {
    const [count, dispatch] = useReducer(reducer,0)
    const [count2, dispatch2] = useReducer(reducer2,0)
    return (
        <>
        <div className="d-flex mt-5 justify-content-center">
            <button className="btn btn-success"
            onClick={()=>{
                dispatch('MINUS')
            }}>-</button>
            <h1><span class="badge bg-secondary">{count}</span></h1>
            <button className="btn btn-success"
            onClick={()=>{
                dispatch('PLUS')
            }}>+</button>

        </div>
        <div className="d-flex mt-5 justify-content-center">
            <button className="btn btn-success"
            onClick={()=>{
                dispatch2('MINUS10')
            }}>-</button>
            <h1><span class="badge bg-secondary">{count2}</span></h1>
            <button className="btn btn-success"
            onClick={()=>{
                dispatch2('PLUS10')
            }}>+</button>

        </div>
        </>
    )
}

export default TaskUseReducer
//42'