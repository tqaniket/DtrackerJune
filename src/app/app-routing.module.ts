import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateDriveComponent } from './create-drive/create-drive.component';
import { ViewDriveComponent } from './view-drive/view-drive.component';
import { SignInComponent } from './sign-in/sign-in.component';


const routes: Routes = [{path:'create',component:CreateDriveComponent},
{path:'view',component:ViewDriveComponent},
{path:'signin',component:SignInComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
