import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { User } from '../model/user';

@Injectable()
export class CfResositoryService {

    constructor() { }

    getUsers(): Promise<User[]> {

        let promise = new Promise<User[]>((resolve, reject) => {

            let user1 = new User();
            user1.firstName = 'Tim';
            let users: User[] = [user1];
            resolve(users);
        });

        return promise;
    }

}
