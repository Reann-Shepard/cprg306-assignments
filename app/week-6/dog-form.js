"use client";

import { useState } from "react";

export default function DogForm({ onAddDog }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    // TODO generate an id
    const newId = Math.floor(Math.random() * 1000000);
    const newDog = { id: newId, name, age };
    onAddDog(newDog);
  }

  return (
    <div>
      <h2>Dog Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="text-black"
          />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={(event) => setAge(event.target.value)}
            className="text-black"
          />
        </div>
        <button
          className="bg-green-700 text-white rounded-md p-2 m-2"
          type="submit"
        >
          Add Dog
        </button>
      </form>
    </div>
  );
}
