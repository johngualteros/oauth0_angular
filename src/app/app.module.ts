import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-yqyvdnv9.us.auth0.com',
      clientId: '9btL1DQ110YskFNnXMHuOmuPU1g0qwSB'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
