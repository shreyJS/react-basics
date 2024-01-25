/* TODO: 
- why useEffect() is used to run useCallback() ?
- memoization in detail
- useRef in detail
- why use useCallback() for optimisation
*/
import { useCallback, useEffect, useRef, useState } from "react";


function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password,setPassword] = useState("")

  //ref Hook
  const passwordRef = useRef(null)


  /* In useCallback, setPassword is included in dependencies for memoization and is optional
  and setPassword method is passed and not password itself. setting password will cause infinite loop 
  */
  const passwordGenerator = useCallback(()=>{
    // creating complete string to choose chars from; for a password
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+= "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"
    let pass= ""

    // actually generating password
    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    // setting password
    setPassword(pass)
  },[length,numberAllowed,charAllowed,setPassword])


  // use useCallback() for optimisation
  const copyPasswordToClipboard = useCallback(() => {
    // optimisation : giving visual effect and choosing chars in specific range
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,100)
    // actual selection of text to clipboard without any visual effects
    window.navigator.clipboard.writeText(password)
  })
  // useEffect() is used to run useCallback()
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])


  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
  )
}

export default App
