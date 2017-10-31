import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CircleComponent } from './circle/circle.component';

// Import HttpClientModule from @angular/common/http
import { HttpClientModule } from '@angular/common/http';
import { HttpModule }    from '@angular/http';

import { BackendDataService } from './backend-data.service';


@NgModule({
  declarations: [
    AppComponent,
    CircleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [BackendDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
