import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { getFullApi } from './common/ApiCalls/getFullApi.service';
import { handleFunction } from './common/functions/handleFunctions';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { HandleDataService } from './common/functions/handle-data.service';
import { routes } from './app.route';
import { FeedbackFormComponent } from './pages/feedback-form/feedback-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FeedbackFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),

  ],
  providers: [getFullApi, handleFunction, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
