import React,{useState,useEffect,useRef} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import { deleteStudent,markChecked,editStudent } from './redux/list.action'
import {useDispatch} from "react-redux"

const Student = (props) => {
    const {student}=props
    const dispatch = useDispatch()
    const [name,setName]=useState(student.name)
    const StyleInput={
        textDecoration: student.checked ? "line-through":"none"
    }
    console.log(student.id)
    return (
        <div className="student">
            <input type="checkbox" checked={student.checked} 
            onChange={()=>{
                dispatch(markChecked(student.id))
            }}
            
            />
            <input type="text" value={name}
            onChange={(e)=>setName(e.target.value)}
            style={StyleInput}
            onKeyPress={(e)=>{
                if(e.key==='Enter' && name){
                    dispatch(editStudent({id:student.id,name}))
                }
            }}
            />
            <AiOutlineClose className="btnRemove"
            onClick={()=>{
                dispatch(deleteStudent(student.id))
                //goi ham dispatch
            }}
            />
        </div>
    )
}

export default Student
