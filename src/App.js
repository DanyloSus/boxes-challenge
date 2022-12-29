import React from "react"
import boxes from "./boxes"

export default function App() {
    const [boxesArr, setBoxes] = React.useState(boxes)

    console.log(boxesArr)

    const box = boxesArr.map(item => (
      <p key={item.id}>{item.id}</p>
    ))

    return (
        <main>
            <h1>Boxes will go here</h1>
            {box}
        </main>
    )
}
