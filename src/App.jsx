import React, { useState } from 'react'
import I8n from './assets/I8n'
import './App.css'

function App() {
  const userCount=15
  return (
   <>
      <div className='contanier'>
        <h1>{I8n("welcomeMessage")} </h1>
        <p>{I8n("Greetingmessage")}</p>
        <p>{I8n("wellWish")}</p>
        <strong>{I8n("learnReact")} </strong>
        <p> {I8n("User",'<student>',userCount)} </p>
      
      <select 
        defaultValue={localStorage.getItem('lang')}
        onChange={(e)=>{
          localStorage.setItem('lang',e.target.value)
          window.location.reload()
        }
      }
      className='option'
      >
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="mh">Marathi</option>
      </select>

      </div>
   </>
  )
}


export default App
