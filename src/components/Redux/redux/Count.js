import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { plus, minus, plus10, minus10 } from './list.action'

const Count = () => {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()
    return (
        <>
        <div className="d-flex mt-5 justify-content-center">
            <button type="button"
            className="btn btn-success"
            onClick={()=>
                dispatch(minus())
            }>-</button>

            <h1><span className="badge bg-secondary">{count}</span></h1>
            <button type="button"
            className="btn btn-success"
            onClick={()=>
                dispatch(plus())
            }>+</button>

        </div>
        <div className="d-flex mt-5 justify-content-center">
            <button type="button"
                className="btn btn-success"
                onClick={()=>
                    dispatch(minus10())
                }>-</button>
            <h1><span className="badge bg-secondary">{count}</span></h1>
           
            <button 
            type="button"
            className="btn btn-success"
            onClick={ ()=>
                dispatch(plus10())
            }>+</button>

        </div>
        </>
    )
}

export default Count
