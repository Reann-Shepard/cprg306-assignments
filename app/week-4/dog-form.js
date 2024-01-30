"use client";

import { useState } from 'react';

export default function DogForm() {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [age, setAge] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault(); // prevents form from submitting to server
        console.log({name, breed, age});
    }

    return (
        <div>
            <h2>Add a Dog</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:{" "}
                    <input
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        className="text-black"
                    />
                </label>
                <br />
                <label>
                    Breed:{" "}
                    <input
                        type="text"
                        value={breed}
                        onChange={(event) => setBreed(event.target.value)}
                        className="text-black"
                    />
                </label>
                <br />
                <label>
                    Age:{" "}
                    <input
                        type="number"
                        value={age}
                        onChange={(event) => setAge(event.target.value)}
                        className="text-black"
                    />
                </label>
                <br />
                <button
                    type="submit"
                    className="bg-blue-600 border-white 
                    hover:bg-blue-300 active:bg-yellow-300 rounded-md"/>
            </form>
        </div>
    )
}