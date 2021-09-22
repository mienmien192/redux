import React, { useState } from 'react'

const FormAdd = (props) => {
    const {add} = props
    const [name,setName]=useState('')
    function handleAdd(e){
        e.preventDefault()
        add(name)
        setName('')
    } 
    
    return (    
        
        <form className="d-flex mb-4" onSubmit={handleAdd}>
        <input className="form-control me-2" type="search" value={name} onChange={(e)=>setName(e.target.value)} 
        placeholder="Add Ur Name" aria-label="Search"/>
        <button className="btn btn-success" type="submit">Save</button>
      </form>
    )
}

export default FormAdd