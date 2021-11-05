import { Projects } from './../../../models/projects/projects.models';
import { Component, Input, OnInit } from '@angular/core';
import * as row from '../../../data/projects.json';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects:Projects[]=[]
  constructor() { }

  ngOnInit(): void {
    const {projects}:any = ( row as any).default
    this.projects = projects
  }

}
