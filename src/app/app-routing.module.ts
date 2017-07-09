import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import  {  InitGuard  }  from  './shared/init-guard';
// import { CanDeactivateGuard } from './shared/can-deactivate-guard';

import { UsersListComponent } from './users/users-list.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
// import { OrderComponent } from './orders/order/order.component';

const routes: Routes = [

    { path: '', component: UsersListComponent },
    { path: 'users-list', component: UsersListComponent },
    { path: 'user-detail/:userId', component: UserDetailComponent }
    //   { path: 'user-add', component: UserDetailComponent },
    //   { path: 'order/:userId', component: OrderComponent, canDeactivate: [CanDeactivateGuard] }

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
