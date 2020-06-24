import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { TokenService } from 'src/app/Services/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

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
    private route: Router,
    private auth: AuthService
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
    this.auth.changeAuthStatus(true);
    this.route.navigateByUrl('/profile');
  }
}
