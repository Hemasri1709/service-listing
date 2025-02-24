import { useState } from 'react'

import './App.css'

import serviceCard from "./components/serviceCard.jsx"
const data = [{name:"Web development", title:"descripion"} , {name:"full stack", title: "description"}]
function App(){
  return(
    <>
    <serviceCard data = {data}/>
    </>
  )
} 


export default App
