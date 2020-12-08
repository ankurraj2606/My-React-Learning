import React from 'react'
import ReactDOM from 'react-dom'

//always return JSX
// stateless functional component or dumb component

// function Greeting() {
//   return <h4>I am Ankur and this is my first react component</h4>
// }

// const Greeting = () => {
//   return React.createElement('h4', {}, 'Hello World')
// }

function Greeting() {
  return (
    <div>
      <Person />
      <ParaMsg />
    </div>
  )
}
// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'Hello World')
//   )
// }

const Person = () => {
  return <h1>I am a Full Stack Developer</h1>
}

const ParaMsg = () => {
  return <p>I am learning React</p>
}

ReactDOM.render(<Greeting />, document.getElementById('root'))

//JSX Rules

/* 1. return single element 
   2. div/section/article must be used to bind the whole html code in one tag
   3. use camelCase for html attribute(not onclick, write onClick)
   4. className should be used in place of class
   5. close every element
   6. formatting
*/
