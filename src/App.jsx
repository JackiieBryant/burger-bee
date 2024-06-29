import { useState } from "react"

function App() {
const [prenom, setPrenom] = useState("Arthur")
const [count, setCounter] = useState(10)

  const handleClick = () => {
    alert("handleClick")
    setCounter(count + 1)
  }

return (
        <div>
           <h1>Bonjour, {prenom}</h1>
           <p>{count}</p>
           <button onClick={handleClick}>Incrementer.git </button>
        </div>
  ) 
}

export default App;
