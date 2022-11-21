import React, { useContext, useState } from 'react';
import { PixelContext } from '../App'

function ColorPicker () {
  const { setSelectedColor } = useContext(PixelContext)
  const colors = ['red', 'blue', 'yellow', 'green', 'black', 'white', 'purple'];
  return (
    <div>
      <h1>Choose a color</h1>
      {colors.map(color => <button key={color} style={{ backgroundColor: color }} onClick={() => setSelectedColor(color)}/>)}
    </div>
  )
}

function Pixel () {
  const { selectedColor } = useContext(PixelContext);
  const [pixelColor, setPixelColor] = useState('lightGrey')
  return <div style={{ height: '20px', width: '20px', backgroundColor: `${pixelColor}`, margin: '1px' }} onClick={() => setPixelColor(selectedColor)}/>
}

function Pixels () {

  const pixels = []
  for (let i = 0; i < 100; i++) pixels.push(<Pixel key={i} />)
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', width: '210px', margin: '0 auto' }}>
      {pixels}
    </div>
  )
}

export default function PixelArt () {
  return (
    <div>
      <ColorPicker />
      <Pixels />
    </div>
  )
}
