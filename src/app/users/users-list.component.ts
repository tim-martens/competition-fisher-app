import { Component, OnInit } from '@angular/core';

import { CfResositoryService } from '../shared/cf-repository.service';
import { User } from '../model/user';

@Component({
    selector: 'cf-users-list',
    templateUrl: 'users-list.component.html'
})

export class UsersListComponent implements OnInit {

    users: User[];

    constructor(private _cfRepository: CfResositoryService) { }

    ngOnInit() {
        this._cfRepository.getUsers().then(
            users => this.users = users,
            error => console.log(error));
    }
}
