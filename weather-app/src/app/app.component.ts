import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';
import { filter, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'weather-app';

  constructor(private updates: SwUpdate, private snackbar: MatSnackBar){
    /* The MatSnackBar service is an Angular service exposed from MatSnackBarModule.
    The SwUpdate service is part of the service worker and contains observables that 
    we can use to notify regarding the update process on our application.*/

  }

  ngOnInit(): void {

  //will create a pop up to notify the user that there is a new version and update
    this.updates.versionUpdates
    .pipe(
      filter(event => event.type === 'VERSION_READY')
    )
    .subscribe(event => {
      this.snackbar
        .open('A new version is available!', 'Update now')
        .afterDismissed()
        .pipe(
          filter(result => result.dismissedByAction),
          switchMap(() => this.updates.activateUpdate())
        )
        .subscribe(() => location.reload());
    });


    }
}
