import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import * as firebase from 'firebase/app';
import { environment } from 'src/environments/environment';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
firebase.initializeApp(environment.firebaseConfig);
