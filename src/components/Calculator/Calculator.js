//tuong ung vs moi file .js có file .scss kèm theo
import React , {useState} from 'react'
import "./Calculator.scss"
const Calculator = () => {
    const [result, setResult]=useState('')
    const handleClick=(e)=>{
        setResult(result+e.target.name)
    }
    const remove=()=>{
        setResult('')
    }
    const removeLast=()=>{
        setResult(result.slice(0,result.length-1))
    }
    const handleResult=()=>{
        setResult(eval(result).toString())
    }
    return (
        <div className="calculator">
            <form >
               
                <input  value={result} type="text"/>
            </form>
            <div className="container">
                <button onClick={remove}>Clear</button>
                <button onClick={removeLast}>C</button>
                <button name="/" onClick={handleClick}>/</button>
                <button name="*" onClick={handleClick}>*</button>
                <button name="7" onClick={handleClick}>7</button>
                <button name="8" onClick={handleClick}>8</button>
                <button name="9" onClick={handleClick}>9</button>
                <button name="-" onClick={handleClick}>-</button>
                <button name="4" onClick={handleClick}>4</button>
                <button name="5" onClick={handleClick}>5</button>
                <button name="6" onClick={handleClick}>6</button>
                <button name="+" onClick={handleClick}>+</button>
                <button name="1" onClick={handleClick}>1</button>
                <button name="2" onClick={handleClick}>2</button>
                <button name="3" onClick={handleClick}>3</button>
                <button name="=" onClick={handleResult} id="equal">=</button>
                <button name="0" onClick={handleClick} id="zero">0</button>
                <button name="." onClick={handleClick}>.</button>


            </div>
        </div>
    )
}

export default Calculator
