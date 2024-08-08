import React from 'react'
import Card from './assets/Components/Card'
import Navbar from './assets/Components/Navbar'
import { useState } from 'react'

const App = () => {

const data = [
  {name:"Mayako poko", artist:"Baklol", added:false},
  {name:"Ghan thokai", artist:"Narayan", added:false},
  {name:"Bistarale polyo", artist:"Shyam", added:false},
  {name:"Mayalu", artist:"Aayush", added:false}
  
]
const[cardData, setCardData] = useState(data)

const handleOnAdd = (cardindex) => {
  setCardData((prev)=> {
  return prev.map((item,index)=>{
    if(index === cardindex){return{...item, added:!item.added}}
    return item;
  })}
  )
}

  return (
    <div className=' px-10 h-screen w-full bg-zinc-200'>
    <Navbar data={cardData}/>
    <div className='mt-20 px-20 flex gap-10 justify-center items-center flex-wrap'>

    {cardData.map((obj,index) => {
    return <Card key={index} data={obj} index={index} handleOnAdd={handleOnAdd}/>


})}
    </div>

    <form action=""></form>
   
    </div>
  )
}

export default App