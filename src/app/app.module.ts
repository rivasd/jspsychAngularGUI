import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TimelineService } from './timeline/timeline.service';
import { DynamicFormComponent } from 'app/forms/dynamic-block-form.component'


@NgModule({
  declarations: [
    AppComponent, 
    DynamicFormComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [ TimelineService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
