import {combineReducers} from "redux"
import countReducer from "./count.reducer"
import listReducer from "./list.reducer"
const rootReducer=combineReducers({
    list: listReducer,
    count:countReducer
})

export default rootReducer