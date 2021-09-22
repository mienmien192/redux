import React from 'react'
import { useTheme } from './ListContextTheme'
const TaskUseContext = () => {
    const [list,add]=useTheme() 
    console.log(list)

    //dang dung bien toan cuc
    return (
        <div>
            {
                list.map((name,index)=>{
                    return <h1 key={index}>{name}</h1>
                })
            }
            <button className="btn btn-success" onClick={()=>add("Tom")}>Thêm</button>
        </div>
    )
}

export default TaskUseContext
//dừng ở 1:15:00