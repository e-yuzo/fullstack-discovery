import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    let title = props.course.name;
    return (
        <div>
            <h1>
                {title}
            </h1>
        </div>
    )
}

const Part = (props) => {
    return (
        <div>
            <p>
                {props.part} {props.exercise}
            </p>
        </div>
    )
}

const Content = (props) => {
    let exercises = props.content.parts;
    return (
        <div>
            <Part part={exercises[0].name} exercise={exercises[0].exercises} />
            <Part part={exercises[1].name} exercise={exercises[1].exercises} />
            <Part part={exercises[2].name} exercise={exercises[2].exercises} />
        </div>
    )
}

const Total = (props) => {
    let exercises = props.exercises.parts;
    return (
        <div>
            <p>
                Number of exercises {exercises[0].exercises + exercises[1].exercises + exercises[2].exercises}
            </p>
        </div>
    )
}

const App = () => {

    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Header course={course} />
            <Content content={course} />
            <Total exercises={course} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
