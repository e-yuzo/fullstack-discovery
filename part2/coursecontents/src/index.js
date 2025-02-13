import React from 'react'
import ReactDOM from 'react-dom'
import Course from './Components/Course'

const Header = ({ name }) => (
    <h1>{name}</h1>
)

const App = () => {
    const course = [{
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            },
            {
                name: 'Redux',
                exercises: 11,
                id: 4
            }
        ]

    },
    {
        name: 'Node.js',
        id: 2,
        parts: [
            {
                name: 'Routing',
                exercises: 3,
                id: 1
            },
            {
                name: 'Middlewares',
                exercises: 7,
                id: 2
            }
        ]
    }]

    return (
        <div>
            <Header name="Web development curriculum"></Header>
            <Course course={course[0]} />
            <Course course={course[1]} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root'));
