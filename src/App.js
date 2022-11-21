import './App.css'
import { useState, useContext, createContext } from 'react';
import PixelArt from './08-pixel-art/PixelArt'

export const PixelContext = createContext(null);

function App () {
  const [selectedColor, setSelectedColor] = useState({color: 'lightGrey'});

  return (
    <PixelContext.Provider value={{selectedColor, setSelectedColor}}>
    <div className='App'>
      <PixelArt />
    </div>
    </PixelContext.Provider>
  )
}

export default App
