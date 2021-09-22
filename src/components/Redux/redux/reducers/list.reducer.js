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
        case 'SET_STATUS':{
            if (state.status === 'ALL'){
                return state.list
            }
            else if (state.status === 'Filter no checked'){
                return state.list.filter(student =>(student.checked=== false))
            }
            else if (state.status === 'Filter checked'){
                return state.list.filter(student =>(student.checked=== true))
            }
            else{
                return state.list
            }
        }
        
        default:
            return state
    }
}
export default listReducer