import React, {useState} from "react";

export default function RandomList () {
    const [numbers, setNumbers] = useState([]);

    const addNumber = () => {
        const newNumber = Math.floor(Math.random() * 10000) + 1;
        setNumbers([...numbers, newNumber]);
    }

    return (
        <div>
            <h1>Random Number</h1>
            <button onClick={addNumber}>Add a number</button>
            <ul>
                {numbers.map((number, index) => (
                    <li key={index}>{number}</li>
                ))}
            </ul>
        </div>
    )




}