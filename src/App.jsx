import { useState , useCallback , useEffect } from 'react'

import './App.css'

function App() {
 let [length , setLength] = useState(7)
 let [num , setNum] = useState(false);
 let [char , setChar] = useState(false)
 let [password , setPassword] = useState("")

 const passwordGenerator = useCallback(function(){
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdegfhijlkmnopqrstuvwxyz"

  if(num){
    str = str + "0123456789"
  }
  if(char){
    str = str+ "!@#$%^&*(){}[]~`_-=+"
  }

  for (let i = 1 ; i<=length; i++ ){
    let output = Math.floor(Math.random()*str.length +1)

    pass += str.charAt(output)

  }

  setPassword(pass)
  



 }, [length, num , char ])

 

 useEffect(function(){
    passwordGenerator()
 }, [length, num, char])

  return (
    <>
     
     <div className='w-full max-w-xl mx-auto rounded-md px-5 py-4 my-7 text-orange-600 bg-slate-800 font-medium'>
     <h1 className='text-2xl text-center text-white'>Password Generator...</h1>
      <div className='flex rounded-lg overflow-hidden mb-4 p-6 '>
        <input
        type='text'
        value={password}
        className='w-full py-1 px-3'
        placeholder='Password' readOnly/>
        <button className='outline-none bg-blue-800 text-white px-3 py-1 '>copy</button>
      </div>
      <div className='flex text-sm gap-x-2 '>
        <div className='flex items-center gap-x-1 text-xl '>
          <input
          type='range'
          min = {5}
          max = {80}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1 px-6 text-xl' >
          <input 
          type='checkbox'
          defaultChecked = {num}
          id='numberInput'
          onChange={() => {
            setNum((prev) => !prev);
          }}
          className=' size-5'
          />
          <label htmlFor='numberInput'>Numbers </label>
        </div>
        <div className='flex items-center gap-x-1 text-xl'>
          <input 
          type='checkbox'
          defaultChecked = {char}
          id='charInput'
          onChange={() => {
            setChar((prev) => !prev);
          }}
          className=' size-5'
          />
          <label htmlFor='charInput'>Character</label>
        </div>
        
      </div>
     </div>
    </>
  )
}

export default App
