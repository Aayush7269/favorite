import React from 'react'

const Navbar = ({data}) => {
    const {added } = data;

  return (
    <div className=' flex justify-between pl-40 py-20 w-full'> 
    <h1 className=' font-bold text-orange-600 text-md'>Orange</h1>

    <div className='text-white text-xs flex gap-2 bg-orange-600 p-1 rounded'>
      <h1 className=''>Favorite</h1>
      <h2 className=''>{data.filter(item=>{
        return (item.added)
      }).length}</h2>
    </div>

  </div>
  )
}

export default Navbar