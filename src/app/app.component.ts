import { Component, OnInit } from '@angular/core';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DriveTrackerJune';

  signIn;
  constructor(private serv:NavbarService)
  {

  }

  ngOnInit() {
    this.serv.isLog.subscribe((e)=>this.signIn=e)
  }
}
