import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Title = (props) => {
    return (
        <h1>{props.title}</h1>
    )
}

const Button = ({ name, onClick }) => (
    <button onClick={onClick}>{name}</button>
)

const Statistics = ({ good, neutral, bad }) => {
    if (good === 0 && neutral === 0 && bad === 0) {
        return (
            <div>
                No feedback given
            </div>
        )
    } else {
        return (
            <div>
                <table>
                    <tr>
                        <td>good</td>
                        <td>{good}</td>
                    </tr>
                    <tr>
                        <td>neutral</td>
                        <td>{neutral}</td>
                    </tr>
                    <tr>
                        <td>bad</td>
                        <td>{bad}</td>
                    </tr>
                    <tr>
                        <td>all</td>
                        <td>{good + neutral + bad}</td>
                    </tr>
                    <tr>
                        <td>average</td>
                        <td>{(good + bad * -1) / (good + neutral + bad)}</td>
                    </tr>
                    <tr>
                        <td>positive</td>
                        <td>{good / (good + neutral + bad)}</td>
                    </tr>
                </table>
            </div>
        )
    }
}

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGoodButton = () => {
        setGood(good + 1)
    }

    const handleNeutralButton = () => {
        setNeutral(neutral + 1)
    }

    const handleBadButton = () => {
        setBad(bad + 1)
    }

    return (
        <div>
            <Title title='give feedback'></Title>
            <Button name='good' onClick={handleGoodButton}></Button>
            <Button name='neutral' onClick={handleNeutralButton}></Button>
            <Button name='bad' onClick={handleBadButton}></Button>
            <Title title='statistics'></Title>
            <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)
