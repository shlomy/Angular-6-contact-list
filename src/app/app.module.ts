import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FilterPipe } from './filter.pipe';
import { HighlightPipe } from './highlight.pipe';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    FilterPipe,
    HighlightPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
