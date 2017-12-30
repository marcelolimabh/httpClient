import { AutorService } from './autor/autor.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';


import { AppComponent } from './app.component';
import { TestData } from './shared/test-data';
import { AutorComponent } from './autor/autor.component';


@NgModule({
  declarations: [
    AppComponent,
    AutorComponent
  ],
  imports: [
    BrowserModule,
    InMemoryWebApiModule.forRoot(TestData)

  ],
  providers: [AutorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
