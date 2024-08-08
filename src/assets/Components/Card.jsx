import React from 'react'

const Card = ({data, handleOnAdd, index}) => {
  const {name, artist, added} = data;
  return (
    <div className=' gap-2 pb-10 flex relative w-60 bg-white h-36 '>
      <img  className='w-1/2' src="https://images.unsplash.com/photo-1643698512439-4485caa5a7d1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4NTA4MTkyfHxlbnwwfHx8fHw%3D" alt="" />
      <div className= ' leading-5 whitespace-wrap'>
        <h1 className='whitespace-wrap font-bold'> {name}</h1>
        <h2 className='text-xs'>{artist}</h2>
      </div>
      <h3 onClick={()=>handleOnAdd(index)}  className={` absolute -bottom-3 translate-x-[30%] ${added?"bg-teal-600":"bg-orange-600"} text-white p-1 rounded-full`}>{added?"added":"Add to favorites"}</h3>
    </div>
  )
}

export default Card