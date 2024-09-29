import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"contact",
    component:ContactusComponent
  },
  {
    path:"aboutus",
    component:AboutusComponent
  },
  {
    path:"",
    component:  HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
