import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormAdd from './FormAdd';
import Student from './Student';
import { Footer } from '../Layout/Footer';
const Redux = () => {
    const list=useSelector(state=>state.list)
    
    return (
        <div className="studentList">
            <ToastContainer />
           
            <FormAdd />
            {
              list.list.map((student)=>{
                  return <Student 
                  key={student.id}
                  student={student}
                 
                   />
              })  
            }
            <Footer
        
            />
        </div>
    )
}

export default Redux
