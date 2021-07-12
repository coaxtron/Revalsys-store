import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from '../../service/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feetback',
  templateUrl: './feetback.component.html',
  styleUrls: ['./feetback.component.scss']
})
export class FeetbackComponent implements OnInit {
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  feedBackFrom = new FormGroup({
    name: new FormControl(''),
    mobile: new FormControl(''),
    email: new FormControl(''),
    feedback: new FormControl('')
  });
  constructor(private fb: FormBuilder,private localStorageService: LocalStorageService,  private router: Router)
     { }

  ngOnInit(): void {
    this.feedBackFrom = this.fb.group({
      name: [null, Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(15)])],
      mobile: [null, Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10), Validators.pattern(/^-?(0|[1-9]\d*)?$/)])],
      email: [null, Validators.compose([Validators.required, Validators.pattern(this.emailPattern)])],
      feedback: [null, Validators.compose([Validators.required,Validators.minLength(50)])],
    })
  }


  save(){
    this.localStorageService.setItem('feedback',  JSON.stringify(this.feedBackFrom.value));
    console.log(this.feedBackFrom.value);
    this.router.navigateByUrl('success');

  }
}
