import { useState } from 'react'
import './App.css'
import Newimg from './Newimg'

function App() {

  
  const [img , setimg] = useState("")
  const changenow = (event) => {
    let pass = event.target.value
    console.log(pass);
    setimg(pass)
  }
  return (
    <>
      <input type="text" className="inputtxt" autoFocus placeholder="Enter anything" value={img} onChange={changenow} />
      <br />
      {img == "" ? null : <Newimg  name={img}/>}
    </>
  )
}

export default App
