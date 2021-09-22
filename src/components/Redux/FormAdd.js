import React ,{useState}from 'react'
import {useDispatch} from "react-redux"
//react-redux cung cấp hàm dispatch
import { addStudent } from './redux/list.action'

const FormAdd = () => {
    const [name,setName]=useState('')
    const dispatch=useDispatch()

    const handleAdd=(e)=>{
        e.preventDefault()
        dispatch(addStudent({id:Date.now(),name,checked:false}))
        setName('')
    }
    
    return (
        <form className="d-flex mb-5" onSubmit={handleAdd} >
        
        <input className="form-control me-2" type="search" 
        value={name}
        onChange={(e)=>setName(e.target.value)}
        placeholder="Add Your Name" aria-label="Search"/>
        <button className="btn btn-success" type="submit">Saves</button>
      </form>
    )
}

export default FormAdd
   