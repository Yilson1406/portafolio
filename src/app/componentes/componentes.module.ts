import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentesRoutingModule } from './componentes-routing.module';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './pages/project/project.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProjectComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    ComponentesRoutingModule
  ]
})
export class ComponentesModule { }
