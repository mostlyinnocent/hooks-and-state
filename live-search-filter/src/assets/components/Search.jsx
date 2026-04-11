import React from 'react'
import SearchBtn from './SearchBtn'

function Search ({setQuery}) {

  function handleChange(e){
    setQuery(e.target.value)
  }

  return (
    <div className="relative">
        <input type="text" placeholder='Find...' onChange={handleChange} className='h-[50px] w-[500px] bg-white outline-0 border-0 shadow-[0px_4px_10px_rgba(0,0,0,0.2)] pl-[15px] rounded-[4px]'/>
        <SearchBtn></SearchBtn>
    </div>
  )
}

export default Search