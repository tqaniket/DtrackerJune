import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DriveServletServiceService {

  constructor(private driveService:HttpClient) { }

  insertDrive(value:any)
  {
    return this.driveService.post("http://localhost:8080/DriveTrackerJune/DriveServlet",value);
  }

  getDriveList()
  {
    return this.driveService.get("http://localhost:8080/DriveTrackerJune/FetchDrives");
  }
  updateDrive(values:any)
  {
    return this.driveService.post("http://localhost:8080/DriveTrackerJune/UpdateDrive",values)
  }

  deleteDriveservice(delvalue:any)
  {
    return this.driveService.post("http://localhost:8080/DriveTrackerJune/DeleteDriveServlet",delvalue)
  }
}
