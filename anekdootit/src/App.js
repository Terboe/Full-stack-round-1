import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const vot = new Array(anecdotes.length).fill(0);
  const [votes , setVotes] = useState(vot);

  const handleAnecdote = () => {
    const rand = Math.floor(Math.random()*anecdotes.length);
    setSelected(rand);
  }

  const handleVote = () => {
    const copy = [...votes];
    copy[selected]+=1;
    setVotes(copy);
  }

  const dopest = () => {
    let i = 0;
    let max = 0;
    for (let j = 0; j < anecdotes.length ; j++ ){
      if(votes[j] > max){
      max = votes[j];
      i = j;
      }
    }
    return anecdotes[i];
  }


  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick = {handleAnecdote}>next anecdote</button>
      <button onClick = {handleVote}>vote</button>
      <h2>Anecdote with most votes</h2>
      <p>{dopest()}</p>
    </div>
  )
}

export default App