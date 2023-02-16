import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(anecdotes);

  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));

  const [mostVotes, setMostVotes] = useState(0);
  const handleClick = () => {
    const randomNum = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNum);
    console.log(randomNum);
  };
  const handleVote = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
    console.log(copy);
    if (copy[selected] > copy[mostVotes]) {
      setMostVotes(selected);
    }
  };

  return (
    <div>
      <h1>Random Text</h1>
      <div>{anecdotes[selected]}</div>
      <p>has {points[selected]} votes</p>

      <button onClick={handleClick}>Anecdote</button>
      <button onClick={handleVote}>vote</button>

      <div>
        <h1>Anecdotes with most vote</h1>
        {anecdotes[mostVotes]}
        <p>has {points[mostVotes]} votes</p>
      </div>
    </div>
  );
};

export default App;
