import React, { useState } from 'react'
import { AiOutlineClose  } from 'react-icons/ai';
const Student = (props) => {
    const {student,remove,markCheck, updateName,markCheck1} =props
    const [name,setName]=useState(student.name)

    const StyleInput={
        textDecoration: student.checked ? "line-through":"none"
    }
    return (
        <div className="student"> 
        
            <input type="checkbox" 
           checked={student.checked} onChange={()=>markCheck(student.id)}  />

            <input type="text" name="" value={name}
             onChange={(e)=>setName(e.target.value)}
            style={StyleInput}
             onKeyPress={(e)=>{
                if(e.key==='Enter' && name){
                    updateName(student.id, name) //update name trong o input name # rong
                }
             }} />
             <AiOutlineClose className="btnRemove" onClick={()=>remove(student.id)} /> 
        </div>
    )
}

export default Student
// lay gia tri ở ô input thì gọi value sau đó onChange.
// su kien onKeyPress la khi nhan Enter thi gia tri o input se dc cap nhat lai