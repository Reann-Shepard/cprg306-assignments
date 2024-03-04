"use client";

import { useState, useEffect } from "react";

const getRandomDog = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
  return data.message;
};

const getDogBreeds = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await response.json();
  return Object.keys(data.message); // Object.keys returns an array with the keys of the object
};

const getBreedImage = async (breed) => {
  const response = await fetch(
    `https://dog.ceo/api/breed/${breed}/images/random`
  );
  const data = await response.json();
  return data.message;
};

export default function Page() {
  const [dogUrl, setDogUrl] = useState(null);
  const [breeds, setBreeds] = useState([]);

  const loadRandomDog = async () => {
    const url = await getRandomDog();
    setDogUrl(url);
  };

  const loadBreeds = async () => {
    const breeds = await getDogBreeds();
    setBreeds(breeds);
  };

  const loadBreedImage = async (breed) => {
    const breedImage = await getBreedImage(breed);
    setDogUrl(breedImage);
  };

  useEffect(() => {
    loadRandomDog();
    loadBreeds();
  }, []);
  // Do not forget the empty array [] above, it is important to avoid infinite loops

  useEffect(() => {
    loadBreedImage(selectedBreed);
  }, [selectedBreed]);

  return (
    <main>
      <h1>Week 7</h1>
      <p>Random dog</p>
      <img src={dogUrl} alt="Random dog" />
      <select
        className="text.black"
        value={selectedBreed}
        onChange={(event) => setSelectedBreed(event.target.value)}
      >
        {breeds.map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
    </main>
  );
}
