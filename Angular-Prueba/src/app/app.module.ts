import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarListComponentComponent } from './components/car-list-component/car-list-component.component';
import { CarFormComponentComponent } from './components/car-form-component/car-form-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataFormatPipe } from './pipes/data-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponentComponent,
    CarFormComponentComponent,
    DataFormatPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
