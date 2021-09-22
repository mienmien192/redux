import React from 'react'
import { useDispatch } from 'react-redux'
import { setStatus } from '../Redux/redux/list.action'

export const Footer = () => {
    const dispatch = useDispatch
    return (
        <div className="d-flex justify-content-between py-4">
           <div>
               <input type="checkbox" />
               <span className="ml-2"> 3 items
               </span>
           </div>
           <div >
               <button className="btn btn-success btn-add"
                onClick={() => dispatchEvent(setStatus())}
              >All</button>
               <button className="btn btn-success btn-add"
               >Remove</button>
               <button className="btn btn-success btn-add"
               onClick={() => dispatchEvent(setStatus())}
              >no checked</button>
               <button className="btn btn-success btn-add"
               onClick={() => dispatchEvent(setStatus())}
               >checked</button>
           </div>
        </div>
    )
}
