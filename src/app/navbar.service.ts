import { Injectable } from '@angular/core';
import{BehaviorSubject} from 'rxjs';
  import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  isLog=new BehaviorSubject<boolean>(false);
  constructor() { }
}
