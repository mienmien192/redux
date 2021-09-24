import React from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { setCheckAll,setStatus,removeChecked } from './redux/list.action'
const Footer = ({list}) => {
   const dispatch = useDispatch()
   const checkAll=useSelector(state=>state.list.checkAll)
    return (
        <div className="d-flex justify-content-between mt-5">
            <div>
                <input type="checkbox" checked={checkAll}
                onChange={()=>
                    {
                        dispatch(setCheckAll())
                }}
                 />
                <span className="ml-5">{
                     list.length
                } items</span>
            </div>
            <div>
                <button className="btn btn-primary mx-3"
                onClick={()=>dispatch(setStatus('ALL'))}
                >All</button>
                <button className="btn btn-primary mx-3"
                onClick={()=>dispatch(removeChecked())}
                >Remove</button>
                <button className="btn btn-primary mx-3"
                onClick={()=>dispatch(setStatus('ACTIVE'))}
                >Active</button>
                <button className="btn btn-primary mx-3"
                onClick={()=>dispatch(setStatus('COMPLETED'))}
                >Completed</button>
            </div>
        </div>
    )
}

export default Footer
