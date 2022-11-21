import { useEffect, useState } from 'react'

export default function ScoreKeeper () {
  const [score, setScore] = useState(parseInt(localStorage.getItem('userScore')) || 0)

  // useEffect(() => {
  //   const localScore = localStorage.getItem('userScore');
  //   if (localScore !== undefined) {
  //     setScore(localScore);
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem('userScore', score)
  }, [score]);

  return (
    <div>
      <h1>Your score is: {score}</h1>
      <button onClick={() => setScore(prevScore => prevScore + 1)}>+</button>
      <button onClick={() => setScore(prevScore => prevScore - 1)}>-</button>
    </div>
  )
}

// localStorage.getItem(key) - retrieve an item
// localStorage.setItem(key, value) - set data in localStorage