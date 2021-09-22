import React from 'react'

export const Footer = ({removeChecked,setStatus, checkAll, markCheckAll, list}) => {
    return (
        <div className="d-flex justify-content-between py-4">
           <div>
               <input type="checkbox" checked={checkAll} 
               onChange={markCheckAll}/>
               <span className="ml-2"> {
                   list.filter(st=>(st.checked===true)).length
               } items
               </span>
           </div>
           <div >
               <button className="btn btn-success btn-add"
               onClick={()=>setStatus('ALL')}>All</button>
               <button className="btn btn-success btn-add"
               onClick={removeChecked}>Remove</button>
               <button className="btn btn-success btn-add"
               onClick={()=>setStatus('ACTIVE')}>Active</button>
               <button className="btn btn-success btn-add"
               onClick={()=>setStatus('COMPLETED')}>Completed</button>
           </div>
        </div>
    )
}
