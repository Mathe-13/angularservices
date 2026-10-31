import { HttpClient, HttParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom, Observable } from "rxjs";
import { environment } from "../../environments/environment.development";
import { Plantilla } from "../models/plantilla";

@Injectable()
export class ServicePlantilla {
    constructor(private _http: HttpClient) { }

    getFuncionesPlantilla(): Observable<any> {
        let url = environment.urlApiPlantilla;
        let request = "api/plantilla/funciones"
        console.log(url + request)
        return this._http.get(url + request);
    }

    async getPlantillaFuncionAsync(funciones: Array<string>): Promise<Plantilla[]> {
        let url = environment.urlApiPlantilla;
        let request = "api/plantilla/plantillafunciones";
      let params = new HttpParams();
      for (let fun of funciones){
        params = params.append("funcion", fun);
      }
        return firstValueFrom(this._http.get<Plantilla[]>(url + request, {params: params})
                             );
    }

    async getPlantillaFunciones(funciones: Array<string>): Promise<Plantilla[]> {
        //?funcion=Enfermera&funcion=Enfermero
        let content = "";
        for (let fun of funciones) {
            content += "funcion=" + fun + "&";
        }
        content = content.substring(0, content.length - 1);
        let url = environment.urlApiPlantilla;
        let request = "api/plantilla/plantillafunciones?" + content;
        return firstValueFrom(this._http.get<Plantilla[]>(url + request));
    }
}
