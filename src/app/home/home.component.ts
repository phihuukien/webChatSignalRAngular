import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userFrom:FormGroup = new FormGroup({});
  submitted:boolean = false;
  constructor(private formBuider: FormBuilder){

  }
  ngOnInit():void{
    this.initialzeForm();
  }
  initialzeForm(){
    this.userFrom = this.formBuider.group({
      name:['',Validators.required]
    })
  }
  submitForm(){
    this.submitted = true;
    if(this.userFrom.valid){
      console.log(this.userFrom.value)
    }
  }
}
