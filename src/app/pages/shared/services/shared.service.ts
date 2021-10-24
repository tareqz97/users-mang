import { ApisService } from './apis.service';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Location } from '@angular/common'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public categories$ = new BehaviorSubject<any>({}); 
  constructor(
    private location: Location,
    private router: Router,
    private api: ApisService
    ) {
      
    }
  
 

}
