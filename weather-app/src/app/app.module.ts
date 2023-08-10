import{ HttpClientModule } from '@angular/common/http';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherComponent } from './weather/weather.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HeaderComponent } from './header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    HeaderComponent,
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    //used to prompt user to install any updates to the app.
    MatSnackBarModule,
    MatButtonModule,
    MatToolbarModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
