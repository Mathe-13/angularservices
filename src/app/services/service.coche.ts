import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { Coche } from "../models/coche";
import { Observable } from "rxjs";
import { firstValueFrom } from "rxjs/internal/firstValueFrom";
@Injectable()
export class ServiceCoche {
    constructor(private _http: HttpClient) { }

    async getCochesAsync(): Promise<Coche[]> {
        let url = environment.urlApiCoches;
        let request = "webresources/coches";
        console.log(url + request)
        return firstValueFrom(this._http.get<Coche[]>(url + request));
    }
}



