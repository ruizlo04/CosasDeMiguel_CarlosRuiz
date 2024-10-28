import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FilmListComponent } from './components/film-list/film-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
    FilmDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(  )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
