import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(
    private httpClient: HttpClient,
    ) {}
  
}
