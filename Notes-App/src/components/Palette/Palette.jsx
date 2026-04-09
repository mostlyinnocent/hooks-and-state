import { useEffect, useState } from 'react'
import './Palette.css'

function Palette({isOpen, onAdd}) {

    const [shouldRender, setShouldRender] = useState(isOpen)

    useEffect(() => {
        if(isOpen){
            setShouldRender(true)
        } else {
            const timeOut = setTimeout(() => {
                setShouldRender(false)
            }, 300)
            return () => clearTimeout(timeOut)
        }
    },[isOpen])

    if(!shouldRender) return null

  return (

    <div className={`palette ${isOpen ? "open" : ""}`}>
        <button 
            className={`palette-btn spring-sky ${isOpen ? "visible" : ""}`}
            style={{backgroundColor:"#89b7c2"}}
            onClick={() => {
                onAdd("#89b7c2")
            }}
        ></button>
        <button 
            className={`palette-btn spring-sky ${isOpen ? "visible" : ""}`}
            style={{backgroundColor:"#ffb876"}}
            onClick={()=>{
                onAdd("#ffb876")
            }}
            >
        </button>
        <button 
            className={`palette-btn spring-sky ${isOpen ? "visible" : ""}`}
            style={{backgroundColor:"#f49aa2"}}
            onClick={()=>{{
                onAdd("#f49aa2")
            }}}
        >

        </button>
        <button 
            className={`palette-btn spring-sky ${isOpen ? "visible" : ""}`}
            style={{backgroundColor:"#a8bf8a"}}
            onClick={()=>{{
                onAdd("#a8bf8a")
            }}}
        ></button>
        <button 
            className={`palette-btn spring-sky ${isOpen ? "visible" : ""}`}
            style={{backgroundColor:"#ffcb7c"}}
            onClick={()=>{
                onAdd("#ffcb7c")
            }}
        >
        </button>
    </div>
    
  )
}

export default Palette