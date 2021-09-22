import React, { useState, useEffect,useRef } from 'react'

export const TaskUseState2 = () => {
    const [hehe, setHehe] = useState({ name: "Khanh Ha", old: 21 })
    const [name, setName] = useState('')
    const flag=useRef(false)
    // const [check,setCheck] = useState(false)

    const increase = () => {
        setHehe({...hehe, name: name, old: hehe.old + 1 })

    }

    function onChangeName(e) {
        setName(e.target.value)
    }

    // useEffect(() => {
    //     if(check==true){
    //         increase()
    //     }
    //     else{
    //         setCheck(true)
    //     }
    // }, [name])
    // console.log("di cho")

    useEffect(() =>{
        if(flag.current){
            increase()
        }else{
            flag.current=true
        }
    },[name])
    console.log("con cho con")
    
    return ( 
        <div className = "text-center m-5">
        <div className = "form-floating mb-3" >
        <input type = "text"
        className = "form-control"
        name = ""
        value = { name }
        onChange = {
            onChangeName
        }
        id = "floatingInput"
        placeholder = "name" />
        <label
        for = "floatingInput" > Name </label> </div > 
        <span style = {
            { color: "green", fontWeight: "1000" }
        } > { hehe.name }--{ hehe.old } </span> <button type = ""
        className = "btn btn-success mx-3"
        onClick = { increase } > Save </button> </div >
    )
}

export default TaskUseState2

// ý nghĩa useEffect: những hàm trong ruột xủa nó sẽ được gọi ở lần render đầu tiên.
// Khi truyền tham số [name], thì mỗi lần name thay đổi, ruột hàm đó sẽ tự động gọi