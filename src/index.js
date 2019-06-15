import React from 'react';
import ReactDOM from 'react-dom';


const luckyNumber = () => Math.floor(Math.random() * 999 + 1)

const greeting = (namdAndNumber) => {
    const container = <div className="container">
        <h1>Hello, {namdAndNumber.name}! Nice to meet you!</h1>
        <h2 className="text-muted">Your number is: {namdAndNumber.luckyNumber}</h2>
    </div>
    return container
}
const user = {
    name: "Nicole",
    luckyNumber: luckyNumber()
}

ReactDOM.render(
    greeting(user),
    document.getElementById('root')
);