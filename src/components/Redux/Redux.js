import React,{useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { reCheckAll } from './redux/list.action';


import FormAdd from './FormAdd';
import Student from './Student';
import Footer from './Footer';
const Redux = () => {

    const list=useSelector(state=>state.list.list)
    const status=useSelector(state=>state.list.status)

    const getList=()=>{
        switch(status){
            case 'ALL':
            return list
            case 'COMPLETED':
            return list.filter(st=>(st.checked===true))   
            case 'ACTIVE':
            return list.filter(st=>(st.checked===false))  
            default:
            return list
        }
    }

    return (
        <div className="studentList">
        <ToastContainer />

        <FormAdd />
        {
          getList().map((student)=>{
              return <Student 
              key={student.id}
              student={student}

              />
          })  
      }
      <Footer list={list}/>

    </div>
    )
}

export default Redux
