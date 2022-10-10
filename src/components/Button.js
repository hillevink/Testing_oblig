import {useState} from "react"

const Button = () => {

  const [colour, setColour] = useState("darkOrange")

  const blueButton = () => {
      setColour("lightBlue")
      console.log(colour)
  }

  return (
    <main>
      <h1 style={{ colour }}>Testing</h1>
      <button className="blue" onClick={blueButton}>Blå</button>
    </main>
  )
}

export default Button;