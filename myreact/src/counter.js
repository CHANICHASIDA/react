import React,{useState} from 'react'

function Counter() {

    const [counter,SetCounter] = useState(4);
    const [user,setUser] = useState("Chani");

    const add1 = ()=>{
        SetCounter(counter+1);
        if(counter+1>10)
        setUser("chage")
    }

  return (
    <div className='container'>
        <h2>Counter {user}:{counter}</h2>
        <button onClick={add1}>ADD 1</button>
        <button onClick={()=>{
            SetCounter(counter-1)
        }}>reduce 1</button>

    </div>
  )
}

export default Counter