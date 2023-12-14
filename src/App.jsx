import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Color, setColor] = useState("yellow")


  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor:Color}}>
      <h1 className='text-white py-8 text-5xl text-bold'>Color Changer</h1>

     <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-2 px-2'>
       <div className='bg-white p-3 rounded-3xl justify-between'>
        <button className='px-3 bg-red-600 rounded-xl py-2 mx-3' onClick={()=>{setColor("red")}}>Red</button>
        <button className='px-3 bg-green-600 rounded-xl py-2 mx-3' onClick={()=>{setColor("green")}}>Green</button>
        <button className='px-3 bg-blue-600 rounded-xl py-2 mx-3' onClick={()=>{setColor("blue")}}>Blue</button>
        <button className='px-3 bg-orange-600 rounded-xl py-2 mx-3' onClick={()=>{setColor("orange")}}>Orange</button>
        <button className='px-3 bg-gray-600 rounded-xl py-2 mx-3' onClick={()=>{setColor("gray")}}>Gray</button>
        <button className='px-3 bg-pink-600 rounded-xl py-2 mx-3' onClick={()=>{setColor("pink")}}>Pink</button>
       </div>
      </div>   
    </div>
  )
}

export default App
