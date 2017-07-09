import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { EntityManager, EntityQuery } from 'breeze-client';

import { User } from '../model/user';

@Injectable()
export class CfResositoryService {

    private _em: EntityManager = new EntityManager('http://api-competition-fisher.azurewebsites.net/breeze/CompetitionFisher');

    constructor() { }

    getUsers(): Promise<User[]> {

        let promise = new Promise<User[]>((resolve, reject) => {

            let query = EntityQuery.from('Users');
            this._em.executeQuery(query).then(
                queryResult => resolve(<any>queryResult.results),
                error => reject(error));
        });

        return promise;
    }

}
