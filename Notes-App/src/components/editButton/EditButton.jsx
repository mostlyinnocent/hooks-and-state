import React from 'react'
import editIcon from '../../assets/pen.png'
import './EditButton.css'

function EditButton() {
  return (
    <button className='edit-btn'>
        <img src={editIcon} alt="" className="edit-icon" />
    </button>
  )
}

export default EditButton