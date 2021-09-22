import React,{useEffect, useState} from 'react'
import { Footer } from './Footer'
import FormAdd from './FormAdd'
import Student from './Student'
import TaskUseContext from '../hook/TaskUseContext'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
//1 loạt trạng thái state list dgl state nội bộ (local)
//biến state nội bộ thành trạng thái toàn cục(global)
//state local chỉ truyền từ cha sang con
//hook useContext để giải quyết vấn đề
//useContext là một hooks trong React Hooks cho phép chúng ta có thể làm việc với React Context trong một functional component.
const StudentList = () => {
    const [list, setList]= useState([
        {
            id:1,
            name:"Nguyen Meo",
            checked:true
        },
        {
            id:2,
            name:"Tran Ha",
            checked:true
        },
        {
            id:3,
            name:"Mien Mien",
            checked:true
        },
    ])
    
    const [status, setStatus]= useState('ALL')
    const [searchKey, setSearchKey]= useState('') 
    // searchKey ban dau = rong
    const getList=()=>{
        if(searchKey){
            //if searchKey co gia tri thi phai filter ra 1 lan nua
            return list.filter((student)=>{
                return student.name.toLowerCase().includes(searchKey.toLowerCase())
                //student.name (các tham số truyền vào/ra) sẽ chuyển sang chữ thường
                //.include sẽ xem xét chữ mình search có chứa trong student.name hay không
            })
        }
        if(status==='ALL'){
            return list
        }else if(status==='ACTIVE'){
            return list.filter(student=>(student.checked===false))
        }else if(status==='COMPLETED'){
            return list.filter(student=>(student.checked===true))
        }
        else{
            return list
        }
        
    }
    function add(student){
        setList([...list,student])
        toast.success('Add Successfully')
    }
    function remove(id){
        const temp = list.filter(student=>(student.id !==id)) //filter điều kiện lọc 
        setList(temp)
        toast.success('Remove Successfully')
    }
    const markCheck = (id)=>{
        const temp = list.map(student=>
            (student.id ===id)?{...student, checked:!student.check}:!student) //cu phap cau lenh if( ? là câu lệnh ìf,  else là :)
        setList(temp)
    }
    
    const updateName=(id,name)=>{
        const temp = list.map(student=>
            (student.id ===id)?{...student, name:name}:!student) //tim cac student co id do va cap nhat lai gia tri da thay doi.
        setList(temp)
    }
    // dung ham map thay cho vong for
    const removeChecked=()=>{
        const temp = list.filter(student=>(student.checked === false)) 
        setList(temp)
    }
    const [check, setCheck] = useState(false)
    const markCheckAll =()=>{
        setCheckAll(!checkAll);
        const temp = list.map(student=>({...student,checked:!checkAll}))
        setList(temp);
        
    }

    const [checkAll, setCheckAll] = useState(false)
    const markCheck1 =(id)=>{
        const temp = list.map(student=>(student.id === id) ?
         {...student, checked:!student.checked}:student);
        setList(temp);
        
    }
    const reCheckAll=()=>{
        let newCheckAll=true
        if(list.length===0){
            newCheckAll=false
        }else{
            list.map(student=>{
                if(student.checked===false){
                    newCheckAll=false
                }
            })

        }setCheckAll(newCheckAll)     
    }
    useEffect(()=>{
        reCheckAll()
    }, [list])
    return (
        <div className="studentList">
            <ToastContainer/>
            <input className="form-control me-2 mb-3" type="search" value={searchKey}
            onChange={(e)=>{
                setSearchKey(e.target.value)
                getList() //hien thi du lieu thay doi  khi search
            }}
            placeholder="Search key" aria-label="Search"/>
            <FormAdd add={add} />
            { 
                getList().map((student)=>{
                    return <Student 
                    key={student.id} //phan biet tung doi 1 moi component ten student
                    student={student}
                    markCheck={markCheck}
                    markCheck1={markCheck1}
                    updateName={updateName}
                    remove={remove}

                     />
                })
            }
            <Footer
            removeChecked={removeChecked}
            setStatus={setStatus}
            checkAll={checkAll}
            markCheckAll={markCheckAll}
            list={list}
            />
            <TaskUseContext/>
        </div>
    )
}

export default StudentList
// ý nghĩa hàm filter