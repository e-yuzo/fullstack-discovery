import React from 'react'

const Header = ({ name }) => (
    <h2>{name}</h2>
)

const Content = ({ course }) => {
    return (
        <div>
            {course.parts.map(value => <Part key={value.id} name={value.name} exercises={value.exercises}></Part>)}
            {/* <Part name={course.parts[0].name} exercises={course.parts[0].exercises}></Part>
            <Part name={course.parts[1].name} exercises={course.parts[1].exercises}></Part>
            <Part name={course.parts[2].name} exercises={course.parts[2].exercises}></Part>
            <Part name={course.parts[3].name} exercises={course.parts[3].exercises}></Part> */}
        </div>
    )
}

const Total = ({ course }) => {
    const array = course.parts.map(value => value.exercises)
    const total = array.reduce((a, b) => {
        return a + b
    })
    return (
        <p><b>total of {total} exercises</b></p>
    )
}

const Course = ({ course }) => {
    return (
        <div>
            <Header name={course.name}></Header>
            <Content course={course}></Content>
            <Total course={course}></Total>
        </div>
    )
}

const Part = ({ name, exercises }) => {
    return (
        <p>{name} {exercises}</p>
    )
}

export default Course;
