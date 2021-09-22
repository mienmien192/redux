import React,{createContext, useEffect, useState} from 'react'
export const listThem=createContext()
const ListContext = (props) => {
    const [app, setApp]= useState({
        list:[
            {
                id:1,
                name:"Nguyen Meo",
                checked:false
            },
            {
                id:2,
                name:"Tran Ha",
                checked:true
            },
            {
                id:3,
                name:"Mien Mien",
                checked:false 
            }
        ],
        checkAll:false,
        status:'ALL'
})
const add=(name)=>{
    //...:giu tat ca trang thai ve checkAll status chi cap nhat list
    //object dc viet trong dau ngoac nhon
    setApp({...app,list:[...app.list,{id:Date.now(),name,checked:false}]})
}
const markCheck=(id)=>{
    const temp=app.list.map(student=>(student.id === id)?{...student,checked:!student.checked}:student)
    setApp({...app,list:temp})
}
const getList=()=>{
    switch(app.status){
        case 'ALL':
            return app.list
        case 'ACTIVE':
            return app.list.filter(student=>(student.checked===false))
        case 'COMPLETED':
            return app.list.filter(student=>(student.checked===true)) 
            default:
                return app.list
    }
}
const setCheckAll=(newCheckAll)=>{
    setApp({...app,checkAll:newCheckAll})
}
const setStatus=(newStatus)=>{
    setApp({...app,status:newStatus})
}
const removeChecked=()=>{
    const temp=app.list.filter(student=>(student.checked===false))
    setApp({...app,list:temp})
}
const markCheckAll=()=>{
    const temp=app.list.filter(student=>(student.checked==!app.checkAll))
    setApp({...app,list:temp,checkAll:!app.checkAll})
}
const reCheckAll=()=>{
    let newCheckAll=true
    if(app.list.length===0){
        newCheckAll=false
    }else{
        app.list.map((student)=>{
            if(student.checked===false){
                newCheckAll=false
            }
        })
    }
    setCheckAll(newCheckAll)
}
useEffect(()=>{
    reCheckAll()

},[app.list])
    return(
        <listThem.Provider value={{app,add,markCheck,getList,setStatus,removeChecked,markCheckAll,reCheckAll }}>
            {props.children}
        </listThem.Provider>
    )
}
export default ListContext