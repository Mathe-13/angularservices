import { HttpClient } from "@angular/common/http";
import { Injectable, Type } from "@angular/core";
import { first, firstValueFrom, Observable } from "rxjs";
import { Persona } from "../models/persona";
import { Global } from "../global";
import { environment } from "../../environments/environment.development";

@Injectable()
export class ServicePersona {
    //Apunte personas {//urlApi = Global.urlApiPersonas; 
    // SI LO PUSIERAMOS AQUI, 
    // PODRIAMOS QUITAR EN CADA get urlApi y poner Global}
    //debemos recibir el objeto de la clase HttpClient en el constructor
    constructor(private _http: HttpClient) {
        //Tenemos DOS OPCIONES para trabajar
        //Devolver la peticion o devolver una promesa
        //En este caso, 
        // devolvemos la peticion a la llamada utilizando Observable
    }
    getPersonas(): Observable<any> {
        let urlApi = environment.urlApiPersonas;
        return this._http.get(urlApi)
    }

    getPersonasPromise(): Promise<any> {
        let urlApi = "https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas"
        let promise = new Promise((resolve) => {
            //Aqui leemos la peticion extrayendo los datos a la vez
            this._http.get(urlApi).subscribe((response) => {
                resolve(response);
            })
        })
        return promise;
    }

    async getPersonasAsync(): Promise<Persona[]> {
        let urlApi = "https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas"
        return firstValueFrom(this._http.get<Persona[]>(urlApi));
    }


}