import { useState } from 'react'

import './App.css'
import ServiceCard from './components/serviceCard'

const data = [{name:"Web development", title:"description"} , {name:"full stack", title: "description"}]
function App(){
  return(
    <>
      <ServiceCard data={data} />
    </>
  )
} 

export default App
