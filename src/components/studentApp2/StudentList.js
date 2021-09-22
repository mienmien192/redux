import React,{useEffect, useState, useContext} from 'react'
import { Footer } from './Footer'
import FormAdd from './FormAdd'
import Student from './Student'
import TaskUseContext from '../hook/TaskUseContext'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { listThem } from './ListContext'
const StudentList = () => {
    const {app,add,markCheck,getList,setStatus,removeChecked,markCheckAll,reCheckAll}=useContext(listThem)
 
    return (
        <div className="studentList">
            <ToastContainer/>
            <FormAdd
            add={add}/>
            
            { 
                getList().map((student)=>{
                    return <Student 
                    key={student.id} //phan biet tung doi 1 moi component ten student
                    student={student}
                    markCheck={markCheck}
                    
                     />
                })
            }
            <Footer
          
            list={app.list}
            setStatus={setStatus}
            removeChecked={removeChecked}
            markCheckAll={markCheckAll}
            reCheckAll={reCheckAll}
            />
            
        </div>
    )
}

export default StudentList
// ý nghĩa hàm filter