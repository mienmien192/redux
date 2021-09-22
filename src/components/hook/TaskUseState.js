import React, { useState } from 'react'

export const TaskUseState = () => {
    const [count, setCount] = useState(0)

    function decrease() {
        setCount(prev => prev - 1)
        setCount(prev => prev - 1)
    }

    const increase = () => {
        setCount(prev => prev + 1)
        setCount(prev => prev + 1)
    }
    return ( 
    <div className = "text-center m-5" >
        <button type = "" className = "btn btn-success mx-3"
        onClick = { decrease } > - </button> 
        <span style = {
            { color: "green", fontWeight: "1000" }
        } > { count } </span> <button type = ""
        className = "btn btn-success mx-3"
        onClick = { increase } > + </button> 
        </div >

    )
}

export default TaskUseState