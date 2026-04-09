import { useState } from 'react'
import Masonry from "react-masonry-css"
import './App.css'
import AddButton from './components/AddNoteButton/AddButton'
import NoteItem from './components/Note/NoteItem'
import Palette from './components/Palette/Palette'

function App() {

  const [notes, setNotes] = useState([])

  const [isPaletteOpen, setIsPaletteOpen] = useState(false)

  const addNote = (color) => {
    const newNote = {
      id: Date.now(),
      text: "",
      color: color
    }
    setNotes(prev => [...prev, newNote])
  }

  const togglePalette = () => {
    setIsPaletteOpen(prev => !prev)
  }

  const breakpoints = {
    default: 3,
    800: 2,
    500: 1
  }

  return (
    <>
     <div className="container">
      <header className='app-header'>
        <h1>Notes</h1>
      </header>
      <aside className='app-sidebar'>
        <AddButton onOpen={togglePalette}></AddButton>
        <Palette isOpen={isPaletteOpen} onAdd={addNote}></Palette>
      </aside>

    <main className="app-body">
      <Masonry
        breakpointCols={breakpoints}
        className="masonry-grid"
        columnClassName="masonry-column"
      >
        {notes.map((note, index) => (
          <NoteItem 
          key={note.id} 
          note={note} 
          isNew={index === notes.length - 1}/>
        ))}
      </Masonry>
    </main>

     </div>
    </>
  )
}

export default App
