import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DriveServletServiceService } from '../drive-servlet-service.service';

@Component({
  selector: 'app-create-drive',
  templateUrl: './create-drive.component.html',
  styleUrls: ['./create-drive.component.css']
})
export class CreateDriveComponent implements OnInit {

  
  constructor(private driveServiceObj:DriveServletServiceService) { }


  ngOnInit() {  
  }

  driveForm=new FormGroup({
    companyName:new FormControl('',[Validators.required]),
    resourcesNo:new FormControl('',[Validators.required]),
    experienceReq:new FormControl('',[Validators.required]),
    ctcOffer:new FormControl('',[Validators.required]),
    joinCriterion:new FormControl('',[Validators.required]),
    bondYrs:new FormControl('',[Validators.required]),
    positionDesc:new FormControl('',[Validators.required]),
    dateFollowup:new FormControl('',[Validators.required]),
    educationCtr:new FormControl('',[Validators.required]),
    currentStats:new FormControl('',[Validators.required]),
    nxtAction:new FormControl('',[Validators.required]),
    dtNxtAction:new FormControl('',[Validators.required]),
    reqPassYr:new FormControl('',[Validators.required]),
    reqGap:new FormControl('',[Validators.required]),
    dtDrivCreation:new FormControl('',[Validators.required]),
    idTpo:new FormControl('',[Validators.required]) 

  });

newDrive:any[];
drives:any={};
driveData;
  submitData()
  {
    this.driveData=this.driveForm.value;
   // this.driveData.FLAG="CREATE";
    this.driveServiceObj.insertDrive(this.driveData).subscribe();
     // (e)=>{this.drives=e; this.newDrive=this.drives});

    console.log(this.driveData);
   
    
  }

}
