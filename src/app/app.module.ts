import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GitFormComponent } from './git-form/git-form.component';
import { GitResultServiceComponent } from './git-result-service/git-result-service.component';
import { GitSearchService } from './git-search.service';



@NgModule({
  declarations: [
    AppComponent,
    GitFormComponent,
    GitResultServiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [GitSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
