import { Pet } from "./types/pet";

export async function getCat() {
  let imgR = await fetch("https://api.thecatapi.com/v1/images/search", {});
  let imgJ = await imgR.json();
  let dataR = await fetch("https://randomuser.me/api/", {});
  let dataJ = await dataR.json();
  let cat: Pet = {
    name: dataJ.results[0].name.first,
    image: imgJ[0].url,
    type: "Cat",
    gender: dataJ.results[0].gender,
  };
  return cat;
}

export async function getDog() {
  let imgR = await fetch("https://dog.ceo/api/breeds/image/random", {});
  let imgJ = await imgR.json();
  let dataR = await fetch("https://randomuser.me/api/", {});
  let dataJ = await dataR.json();
  let dog: Pet = {
    name: dataJ.results[0].name.first,
    image: imgJ.message,
    type: "Dog",
    gender: dataJ.results[0].gender,
  };
  return dog;
}
