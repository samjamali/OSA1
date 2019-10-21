import React from 'react'
import ReactDOM from 'react-dom'

const Part = (props) => {
    return (
        <div>
            <p>
                {props.name}, {props.ex}


            </p>
        </div>
    )
}

const Header = (props) => {
    return (
        <div>
            <p>
                {props.course}

            </p>
        </div>
    )
}

const Content = (props) => {
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
    return (
        <div>
            <Part name={part1} ex={exercises1} />
            <Part name={part2} ex={exercises2} />
            <Part name={part3} ex={exercises3} />

        </div>
    )
}

const Total = (props) => {

    return (
        <div>
            <p>
                {props.total}

            </p>
        </div>
    )
}

const App = () => {
    const course = 'Half Stack application development'
    const total  = 31;


    return (
        <div>
            <Header course={course} />
            <Content />
            <Total total={total}  />

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))