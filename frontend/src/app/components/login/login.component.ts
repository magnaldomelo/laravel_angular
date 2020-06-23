import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { TokenService } from 'src/app/Services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error = null;

  form = {
    email: null,
    password: null
  }

  constructor(
    private jarwis: JarwisService,
    private token: TokenService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    return this.jarwis.login(this.form)
      .subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
      )
  }

  handleError(er){
    this.error = er.error.error;
    ;
  }

  handleResponse(data){
    this.token.handle(data.access_token);
    this.route.navigateByUrl('/profile');
  }
}
