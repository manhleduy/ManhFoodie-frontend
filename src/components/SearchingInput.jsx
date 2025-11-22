import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { assets } from '../assets/data'

const SearchingInput = () => {
  const {searchQuery, setSearchQuery}=useAppContext()
  return (
    <div className='py-4'>
      <div className='text-center'>
        <div className='inline-flex items-center justify-center px-3 py-1.5 rounded-full
        bg-primary ring-1 ring-state-900/20 w-cover'>
          <input type="text " value={searchQuery} onChange={e=> setSearchQuery(e.target.value)}
          placeholder='Search here ,,,'
          className='border-none'/>
            <img src={assets.search} alt="" />

        </div>
      </div>
    </div>
  )
}

export default SearchingInput