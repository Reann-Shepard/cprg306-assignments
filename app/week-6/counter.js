"use client";

import { useState } from "react";

export default function Counter() {
    let [count, setCount] = useState(0);

    const increment = () => {
        // Use this style if you want to use the setter only once
        // setCount(count + 1);
        // setCount(count + 1);
        // This will not work as expected as setCount is asynchronous.
        // As such, it will not update the count immediately.

        // Update count using function form of setCount
        // Use this style if you want to use the setter multiple times
        setCount((prevCount) => prevCount + 1);
        setCount((prevCount) => prevCount + 1);
        // This will work because the function form of setCount will update the count immediately.
    };

    return (
        <main>
            <h2>Counter</h2>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </main>
    );
}

