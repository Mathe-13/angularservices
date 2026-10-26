import { Injectable } from "@angular/core";
import { Comic } from "../models/comic";

@Injectable()
export class ServiceComics {
  async getComicsAsync(): Promise<Array<Comic>> {
    let path = "./assets/comics.json";
    let response = await fetch(path);
    let data = await response.json();
    let arrayComics: Array<Comic> = [];
    for (let elem of data) {
      //creamos un Comic de Agnular
      let comic: Comic = new Comic(elem.nombre, elem.imagen, elem.descripcion);
      arrayComics.push(comic);
    }
    console.log(arrayComics);
    return arrayComics;
  }
}