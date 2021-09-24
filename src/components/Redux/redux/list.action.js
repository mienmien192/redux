export const deleteStudent = (id) =>{
    return {
        type:'DELETESTUDENT',
        payload:id
    }
}

export const addStudent= (student) =>{
    return {
        type:'ADDSTUDENT',
        payload: student
    }
}
export const markChecked=(id)=>{
    return{
        type:'MARK_CHECKED',
        payload:id
    }
}
export const editStudent = ({id,name}) =>{
    return {
        type:'EDITSTUDENT',
        payload: {id,name}
    }
}

export const plus = () =>{
    return {
        type:'PLUS'
    }
}

export const minus = () =>{
    return {
        type:'MINUS',
      
    }
}

export const plus10 = () =>{
    return {
        type:'PLUS10',
      
    }
}
export const minus10 = () =>{
    return {
        type:'MINUS10',
  
    }
}
export const setCheckAll=()=>{
    return{
        type:'CHECKALL'
    }
}
export const reCheckAll=()=>{
    return{
        type:'RECHECKALL'
    }
}
export const setStatus=(status)=>{
    return{
        type:'SETSTATUS',
        payload:status
    }
}
export const removeChecked=()=>{
    return{
        type:'REMOVECHECKED'
    }
}

