"use client";

import DogForm from "./dog-form.js";
import DogList from "./dog-list.js";
import dogData from "./dog-data.json";
import { useState } from "react";

export default function Page() {
  const [dogs, setDogs] = useState(dogData);

  const addDog = (dog) => {
    setDogs([...dogs, dog]);
    // you cannot do something like dogs.push(dog) because that would mutate the state
    // the spread operator ... creates a new array with the old dogs and the new dog
  };

  const deleteDog = (id) => {
    setDogs(dogs.filter((dog) => dog.id !== id));
  };

  return (
    <div>
      <h1>Week 6</h1>
      <h2>Manage Dogs</h2>
      <DogList dogs={dogs} onDelete={deleteDog}/>
      <DogForm onAddDog={addDog} />
    </div>
  );
}
