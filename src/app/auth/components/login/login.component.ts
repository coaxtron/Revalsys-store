import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/feedback/service/local-storage.service';

 /*
 It is used for login page
  */

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  constructor(private fb: FormBuilder,private localStorageService: LocalStorageService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.compose([Validators.required,Validators.minLength(8)])],
    })
  }
  public save(){
    this.localStorageService.setItem('User',  JSON.stringify(this.loginForm.value))
    this.router.navigate(['/list'], { queryParams: { sortType:'hightolow' } });
    console.log(this.loginForm.value);

  }
}
// 'email':
