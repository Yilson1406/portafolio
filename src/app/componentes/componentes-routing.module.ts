import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectComponent } from './pages/project/project.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',pathMatch:'full', redirectTo:'home'
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'projects',component:ProjectComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'**', redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentesRoutingModule { }
