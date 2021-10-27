import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  tipomodo:boolean=false
  dia:boolean=true
  noche:boolean=false
  menu:Array<any>=[]
  constructor() { }

  ngOnInit(): void {
    this.menu = [
      {
        name:'Home',
        router:'/'
      },
      {
        name:'Projects',
        router:'/projects'
      },
      {
        name:'Contacts',
        router:'/contacts'
      }
    ]
  }
  modo(modo:string){
    if(modo === 'dia'){
      this.noche=true
      this.dia=false
      this.tipomodo = true
      console.log('dia----->',this.dia,'noche----->',this.noche);
    }
    if(modo === 'noche'){
      this.tipomodo = false
      this.noche=false
      this.dia=true
      console.log('dia----->',this.dia,'noche----->',this.noche);
    }

  }

}
