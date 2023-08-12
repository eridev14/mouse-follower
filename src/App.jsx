import { useEffect, useState } from 'react'
import './App.scss'

function App() {

    const [enabled, setEnabled] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });


    useEffect(() => {
        const handleMove = (event) => {
            const { clientX, clientY } = event;
            setPosition({ x: clientX, y: clientY })
        }

        if (enabled) {
            window.addEventListener('pointermove', handleMove);
        } else {
            setPosition({ x: 0, y: 0 })
        }

        return () => {
            window.removeEventListener('pointermove', handleMove)
        }
    }, [enabled]);

    // if (enabled) {
    //   setPosition({ x: 0, y: 0 })
    // }

    return (
        <main>
            <div style={{
                position: 'absolute',
                zIndex: -1,
                left: -20,
                top: -20,
                backgroundColor: '#09f',
                borderRadius: '50%',
                opacity: 0.8,
                pointerEvents: 'none',
                width: 40,
                height: 40,
                color: "red",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 80,
                boxShadow: '0 0 30px 40px #09f',
                transform: `translate(${position.x}px, ${position.y}px)`,
            }}>
            </div>
            <h1>Mouse Follower</h1>
            <button onClick={() => { setEnabled(!enabled) }}>{enabled ? "Desactivar" : "Activar"} seguir puntero </button>
        </main>
    )
}

export default App
