import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Inject the authentication service into your component through the constructor
  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(isAuthenticaed => {
      if(isAuthenticaed) {
        this.router.navigate(['http://google.com']);
      }
    })
  }
  login(){
    this.auth.loginWithRedirect();
  }
  
}
