import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable()

export class ServicePersona {
    //debemos recibir el objeto de la clase HttpClient en el constructor
    constructor(private _http: HttpClient) {

        //Tenemos DOS OPCIONES para trabajar
        //Devolver la peticion o devolver una promesa
        //En este caso, devolvemos la peticion a la llamada utilizando Observable
    }
    getPersona(): Observable<any> {
        let urlApi = "https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas";
        return this._http.get(urlApi)
    }
}