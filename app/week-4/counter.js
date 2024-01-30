"use client";

import { useState} from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    // count is the current value of the state
    // setCount is the function to update the state

    // setCount(1); // this will update the state to 1

    const increment = () => setCount(count + 1);

    // never do this to increment count, introduces bugs
    // const increment = () => count++;

    // let a = count === 3 ? "three" : "not three"; 

    return (
        <div>
            <p>counter: {count}</p>
            {count > 0 && <p>count is greater than 5</p>} 
            {count === 3 ? <p>count is 3</p> : <p>count is not 3</p>}
            <button onClick={increment}
                className="w-24 bg-blue-600 border-white 
                hover:bg-blue-300 active:bg-yellow-300 rounded-md">Increment</button>
        </div>
    )
}