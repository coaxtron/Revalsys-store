import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from '../../service/local-storage.service';

@Component({
  selector: 'app-feetback',
  templateUrl: './feetback.component.html',
  styleUrls: ['./feetback.component.scss']
})
export class FeetbackComponent implements OnInit {
  feedBackFrom = new FormGroup({
    name: new FormControl(''),
    mobile: new FormControl(''),
    email: new FormControl(''),
    feedback: new FormControl('')
  });
  constructor(private fb: FormBuilder,private localStorageService: LocalStorageService)
     { }

  ngOnInit(): void {
    this.feedBackFrom = this.fb.group({
      name: ['',Validators.required, Validators.pattern('[a-zA-Z ]*')],
      mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^\d+$/)]],
      email: ['',Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")],
      feedback: ['',Validators.required]
    })
  }


  save(){
    this.localStorageService.setItem('feedback',  JSON.stringify(this.feedBackFrom.value))
    console.log(this.feedBackFrom.value)
  }
}
