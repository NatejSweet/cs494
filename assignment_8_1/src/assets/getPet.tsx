import { Animal } from "@/types/animal";

import { delay } from "./delay";

const dogImageApi = "https://dog.ceo/api/breeds/image/random";
const catImageApi = "https://api.thecatapi.com/v1/images/search";
const nameApi = "https://randomuser.me/api/";

import { db } from "../app/firebase";
import { doc, getDoc, setDoc, addDoc, collection } from "firebase/firestore";

export async function getDog() {
  const dogImageResponse = await fetch(dogImageApi);
  const dogImageJson = await dogImageResponse.json();
  const dogImageUrl = dogImageJson.message;

  const nameResponse = await fetch(nameApi);
  const nameJson = await nameResponse.json();
  const dogName = nameJson.results[0].name.first;
  const dogGender = nameJson.results[0].gender;

  const dog: Animal = {
    name: dogName,
    gender: dogGender,
    type: "dog",
    url: dogImageUrl,
    favorited: false,
  };

  return dog;
}

export async function getAnimals(catCount: number, dogCount: number) {
  const animals: Animal[] = [];
  for (let i = 0; i < dogCount; i++) {
    animals.push(await getDog());
    await delay(100);
  }
  for (let i = 0; i < catCount; i++) {
    animals.push(await getCat());
    await delay(100);
  }
  return animals;
}

export async function getCat() {
  const catImageResponse = await fetch(catImageApi);
  const catImageJson = await catImageResponse.json();
  const catImageUrl = catImageJson[0].url;

  const nameResponse = await fetch(nameApi);
  const nameJson = await nameResponse.json();
  const catName = nameJson.results[0].name.first;
  const catGender = nameJson.results[0].gender;

  const cat: Animal = {
    name: catName,
    gender: catGender,
    type: "cat",
    url: catImageUrl,
    favorited: false,
  };

  return cat;
}
