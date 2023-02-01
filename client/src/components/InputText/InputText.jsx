import React from 'react'
import { useState } from 'react'
import send from '../../assets/send.png'
import loader from '../../assets/loader.gif'

const InputText = ({sendMessage,loading}) => {
  
  const [value,setValue]=useState("")

  const handelSubmit =()=>{
    if(value ==="") return;
    sendMessage({sender:"user",message: value})
    setValue("")
  }
  return (
    <div className='w-full bg-white bg-opacity-10 max-h-40 rounded-lg py-4 overflow-auto relative'>
        
        {loading?(
          <img src={loader}/>
        ):(
          <>
        <textarea
        onKeyDown={(e)=>{
          e.keyCode===13 && e.shiftKey===false && handelSubmit()
        }}
        rows={1}
        value={value}
        type="text"
        onChange={(e)=>setValue(e.target.value)}
        className='border-0 bg-transparent outline-none w-11/12' />
       
        <img 
        onClick={handelSubmit}
        src={send} width={20} alt="send-button" className='absolute top-4 right-3 hover:cursor-pointer ease-in duration-100 hover:scale-125' />
          </>
        )}
        
    </div>
  )
}

export default InputText
