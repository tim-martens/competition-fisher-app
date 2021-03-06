import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BreezeBridgeAngularModule } from 'breeze-bridge-angular';
import { NamingConvention } from 'breeze-client';
import { ModalModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';

import { CfResositoryService } from './shared/cf-repository.service';
import { UsersListComponent } from './users/users-list.component';
import { UsersListItemComponent } from './users/users-list-item/users-list-item.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { InitGuard } from 'app/shared/init-guard';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UsersListItemComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BreezeBridgeAngularModule,
    ModalModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    CfResositoryService,
    InitGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    NamingConvention.camelCase.setAsDefault();
  }
}
