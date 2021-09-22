//chua cac bien toan cuc
import React,{useContext,useState} from 'react'
//tạo biến
const ThemeContext=React.createContext()
//sau đó export ra
//children có nghĩa là: tất cả nhg tham số truyền sẽ được áp dụng hết phần con trong index.js nên có thể áp dụng hết trong các file con.
export function useTheme(){
    return useContext(ThemeContext)
}
export function ListContextTheme({children}){
    //state
    const [list,setList]=useState(['Ha','Gau',"Mei"])
    const add=(name)=>{
        setList([...list,name])
    }
    return(
        //truyền vào add, remove...
        <ThemeContext.Provider value={[list, add]}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ListContextTheme
