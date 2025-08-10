import {useState} from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <p className="body-text">My count {count}</p>
                <div className="buttons-container">
                    <button className="cta-button" onClick={() => setCount(count - 1)}>Decrease</button>
                    <button className="cta-button" onClick={() => setCount(count + 1)}>Increase</button>
                </div>
            </div>
        </>
    )
}

export default App
