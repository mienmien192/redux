const initState = {
    list: [{
            id: 1,
            name: "Haji",
            checked: false
        },
        {
            id: 2,
            name: "Harley",
            checked: false
        },
        {
            id: 3,
            name: "Haheo",
            checked: false
        }
    ],
    checkAll: false,
    status: 'ALL'
}
const listReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETESTUDENT':
            return {...state,list:state.list.
                filter(st=>st.id !==action.payload)}
        case 'ADDSTUDENT':
            {
                const newList = [...state.list, action.payload]
                return {...state, list: newList } //cap nhat lai

            }
        case 'MARK_CHECKED':
            {
                const newList=state.list.map(st=>{
                    if(st.id===action.payload){
                        st.checked=!st.checked
                    }
                    return st
                })
                return {...state,list:newList}
            }
        case 'EDITSTUDENT':{
            const newList = state.list.map(st=>{
                if(st.id===action.payload.id){
                    st.name=action.payload.name
                }
                return st
            })
            return {...state,list:newList}
        }
        case 'CHECKALL':{
            const list=state.list.map(st=>({...st,checked:!state.checkAll}))
            return {...state,list,checkAll:!state.checkAll}
        }
        case 'REMOVECHECKED':{
            const list=state.list.filter(st=>(st.checked===false))
            return {...state,list}
        }
        case 'RECHECKALL':{
            let newCheckAll
            if(state.list.length==0){
                newCheckAll=false
            }else{
                newCheckAll=state.list.every(st=>st.checked===true) 
            }
            return {...state,checkAll:newCheckAll}
        }
        case 'SETSTATUS':{
            return {...state,status:action.payload}
        }       
        default:
            return state
    }
}
export default listReducer