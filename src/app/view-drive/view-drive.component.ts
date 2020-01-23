//import { Component, OnInit } from '@angular/core';
import { DriveServletServiceService } from '../drive-servlet-service.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EducationcriterionPipe } from './Pipes/educationcriterion.pipe';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-drive',
  templateUrl: './view-drive.component.html',
  styleUrls: ['./view-drive.component.css']
})
export class ViewDriveComponent implements OnInit {

  constructor(private driveService:DriveServletServiceService,public dialog: MatDialog) { }
  drivearr: any = [];
   driveobj: any = {};
data:any={};
      // driveId;
      // companyName;
      // resourcesNo;
      // experienceReq;
      // ctcOffer;
      // joinCriterion;
      // bondYrs;
      // positionDesc;
      // dateFollowup;
      // educationCtr;
      // currentStats;
      // nxtAction;
      // dtNxtAction;
      // reqPassYr;
      // reqGap;
      // dtDrivCreation;
      // idTpo;
     
      tempobj:any={};
   Editdrive(i)
   {  console.log("i==="+JSON.stringify(i));
     this.tempobj=this.drivearr[i];
     console.log(JSON.stringify(this.tempobj));
     const dialogref=this.dialog.open(UpdateDriveComponent,{

     data:{driveId:this.tempobj.driveId,
        companyName:this.tempobj.companyName,
        resourcesNo:this.tempobj.resourcesNo,
        experienceReq:this.tempobj.experienceReq,
        ctcOffer:this.tempobj.ctcOffer,
        joinCriterion:this.tempobj.joinCriterion,
        bondYrs:this.tempobj.bondYrs,
        positionDesc:this.tempobj.positionDesc,
        dateFollowup:this.tempobj.dateFollowup,
        educationCtr:this.tempobj.educationCtr,
        currentStats:this.tempobj.currentStats,
        nxtAction:this.tempobj.nxtAction,
        dtNxtAction:this.tempobj.dtNxtAction,
        reqPassYr:this.tempobj.reqPassYr,
        reqGap:this.tempobj.reqGap,
        dtDrivCreation:this.tempobj.dtDrivCreation,
        idTpo:this.tempobj.idTpo
      }
     });
     console.log(this.data);
     dialogref.afterClosed().subscribe((e:any)=>
     {
       this.fetchdata();
     });
   }   

   fetchdata()
   {
    this.driveService.getDriveList().subscribe((res:any)=>{
      this.drivearr = res;
    })

   }

   deleteId;
   deleteresponse;
   deleteDrive(i)
   {
    this.deleteId=this.drivearr[i].driveId;
    this.driveService.deleteDriveservice(this.deleteId).subscribe((res:any)=>
    {
      this.deleteresponse=res;
      console.log(this.deleteresponse)
    });
    this.fetchdata();
   }
  ngOnInit() {
 

    this.fetchdata();

    
   
  }

}

@Component(
  {
    selector: 'app-update-drive',
  templateUrl: './update-drive.component.html',
  })
  export class UpdateDriveComponent{

    driveUpdateForm=new FormGroup({
      companyName:new FormControl('',[Validators.required]),
      resourcesNo:new FormControl('',[Validators.required]),
      experienceReq:new FormControl('',[Validators.required]),
      ctcOffer:new FormControl('',[Validators.required]),
      joinCriterion:new FormControl('',[Validators.required]),
      bondYrs:new FormControl('',[Validators.required]),
      positionDesc:new FormControl('',[Validators.required]),
      dateFollowup:new FormControl(''),
      educationCtr:new FormControl('',[Validators.required]),
      currentStats:new FormControl('',[Validators.required]),
      nxtAction:new FormControl('',[Validators.required]),
      dtNxtAction:new FormControl('',[Validators.required]),
      reqPassYr:new FormControl('',[Validators.required]),
      reqGap:new FormControl('',[Validators.required]),
      dtDrivCreation:new FormControl('',[Validators.required]),
      idTpo:new FormControl('',[Validators.required])})
    
    experienceReqd : String;
data:any={};
    constructor(private dialog: MatDialogRef<UpdateDriveComponent>,
      @Inject(MAT_DIALOG_DATA) d2: any,private updateService:DriveServletServiceService,private router:Router, private route:ActivatedRoute) {
        this.data = d2;
        this.experienceReqd = ""+d2.experienceReq;
      }

      updatedriveData;
    updateData()
    {
      this.updatedriveData=this.driveUpdateForm.value;
      this.updatedriveData.driveId=this.data.driveId;
      this.updateService.updateDrive(this.updatedriveData).subscribe();
    
    }
    ngOnInit() {
         
    
   
    }

  }