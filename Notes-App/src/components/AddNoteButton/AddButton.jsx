import React from 'react'
import './AddButton.css'
import plusIcon from '../../assets/plus.png'

function AddButton({onOpen}) {
  return (
    <button className='add-btn' onClick={onOpen}>
        <img src={plusIcon} alt="Add Note" className="add-icon" />
    </button>
  )
}

export default AddButton