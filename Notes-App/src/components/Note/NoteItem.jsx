import React, { useEffect, useRef } from 'react'

import './NoteItem.css'
import EditButton from '../editButton/EditButton'

function NoteItem({note, isNew}) {
  const ref = useRef(null)

  const handleInput = () => {
    const el = ref.current
    el.style.height = "0px"
    el.style.height = el.scrollHeight + "px"
  }

  useEffect(() => {
    handleInput()

    if(isNew && ref.current){
      ref.current.focus()
    }
  }, [])

  return (
    <textarea ref={ref} className='note' style={{backgroundColor: note.color || "ivory"}} defaultValue={note.text} onInput={handleInput}>
    <EditButton></EditButton>
    </textarea>
  )
}

export default NoteItem