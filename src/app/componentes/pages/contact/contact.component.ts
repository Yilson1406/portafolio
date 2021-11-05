import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as row from '../../../data/skilss.json';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  arrayskills:any[]=[]
  form:FormGroup;

  constructor( private fg:FormBuilder ) {
    this.form = this.fg.group({
      nombres:['',Validators.required],
      email:['',
      [
        Validators.required,
        Validators.pattern(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)
      ]],
      telefono:['',
        [
          Validators.required,
          Validators.pattern(/^([0-9])*$/)
        ]
      ],
      mensaje:['',Validators.required]
    })
  }

  ngOnInit(): void {
    const {skills}:any =(row as any).default
    this.arrayskills = skills
  }

  send(){
    console.log(this.form.value);

  }

}
