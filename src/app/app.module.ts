import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateDriveComponent } from './create-drive/create-drive.component';
import { ViewDriveComponent,UpdateDriveComponent } from './view-drive/view-drive.component';
import {MaterialModule} from './material-module';
import { HttpClientModule } from '@angular/common/http';
import { ExperiencePipe } from './view-drive/Pipes/experience.pipe';
import { JoinCriterionPipe } from './view-drive/Pipes/join-criterion.pipe';
import { PositionPipe } from './view-drive/Pipes/position.pipe';
import { EducationcriterionPipe } from './view-drive/Pipes/educationcriterion.pipe';
import { CurrentstatusPipe } from './view-drive/Pipes/currentstatus.pipe';
import { NxtActionPipe } from './view-drive/Pipes/nxt-action.pipe';
import { GapRequiredPipe } from './view-drive/Pipes/gap-required.pipe';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignOutComponent } from './sign-out/sign-out.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateDriveComponent,
    ViewDriveComponent,
    ExperiencePipe,
    JoinCriterionPipe,
    PositionPipe,
    EducationcriterionPipe,
    CurrentstatusPipe,
    NxtActionPipe,
    GapRequiredPipe,UpdateDriveComponent, SignInComponent, SignOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MaterialModule,HttpClientModule
    
  ],
  entryComponents:[UpdateDriveComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
