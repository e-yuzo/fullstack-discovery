import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Title = (props) => (
    <h1>{props.title}</h1>
)

const MostVoted = ({ anecdotes, votes }) => {
    const index = indexOfMax(votes)
    return (
        <div>
            {anecdotes[index]}
        </div>
    )
}

const indexOfMax = (arr) => {
    if (arr.length === 0) {
        return -1;
    }
    let max = arr[0];
    let maxIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }
    return maxIndex;
}

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0])

    const handleNextAnecdoteButton = () => {
        const pos = Math.floor((Math.random() * 6) + 1)
        setSelected(pos - 1)
    }

    const handleVoteButton = () => {
        const copy = [...votes]
        copy[selected] += 1
        setVotes(copy)
    }

    return (
        <div>
            <Title title="Anecdote of the day"></Title>
            {props.anecdotes[selected]} <br></br>
            has {votes[selected]} votes <br></br>
            <button onClick={handleVoteButton}>vote</button>
            <button onClick={handleNextAnecdoteButton}>next anecdote</button>
            <Title title="Anecdote with most votes"></Title>
            <MostVoted anecdotes={props.anecdotes} votes={[...votes]}></MostVoted>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)