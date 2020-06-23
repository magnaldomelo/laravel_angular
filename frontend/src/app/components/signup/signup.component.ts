import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Services/jarwis.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  error = {
    email: null,
    name: null,
    password: null,
  };
  
  form = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null
  };

  constructor(private jarwis: JarwisService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    return this.jarwis.signup(this.form)
      .subscribe(
        data => console.log(data),
        error => this.handleError(error)
      )
  }

  handleError(error) {
    console.log(this.error);
    this.error = error.error.errors;
  }

}
