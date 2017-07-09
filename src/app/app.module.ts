import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CfResositoryService } from './shared/cf-repository.service';
import { UsersListComponent } from './users/users-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CfResositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
