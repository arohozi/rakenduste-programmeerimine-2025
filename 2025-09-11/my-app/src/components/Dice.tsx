import { useState } from "react"

function Dice() {
  const [diceValue, setDiceValue] = useState(1)

  const rollDice = () => {
    const newValue = Math.floor(Math.random() * 6) + 1
    setDiceValue(newValue)
  }

  return (
    <div>
      <h2>Dice Mäng</h2>
      <p>Praegune väärtus: {diceValue}</p>
      <button onClick={rollDice}>Genereeri</button>
    </div>
  )
}

export default Dice