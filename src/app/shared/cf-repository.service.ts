import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {
    EntityManager, EntityQuery, Entity, Predicate, Validator,
    FilterQueryOp, FetchStrategy, FetchStrategySymbol, EntityState, core
} from 'breeze-client';

import { RegistrationHelper } from '../model/RegistrationHelper';

import { User, Result } from '../model/entity-model';

@Injectable()
export class CfResositoryService {

    private _em: EntityManager = new EntityManager('http://api-competition-fisher.azurewebsites.net/breeze/CompetitionFisher');
    private _usersCached = false;
    private _initialized: boolean;


    constructor() {
        RegistrationHelper.register(this._em.metadataStore);
    }


    initialize() {
        let promise = new Promise<boolean>((resolve, reject) => {

            if (this._initialized) {
                resolve(true);
            } else {
                this._initialized = true;
                this._em.fetchMetadata().then(data => {
                    resolve(true);
                },
                    error => console.error(error));
            }
        });

        return promise;
    }

    createEntity(entityType: string): Entity {
        let options: any = {};
        if (entityType === 'User') {
            options.id = core.getUuid();
        }
        return this._em.createEntity(entityType, options);
    }

    getUsers(page: number, pageSize: number): Promise<any> {

        let promise = new Promise<any>((resolve, reject) => {

            let query = EntityQuery.from('Users')
                .orderBy(['firstName', 'lastName'])
                .skip((page - 1) * pageSize)
                .take(pageSize)
                .inlineCount();

            this._em.executeQuery(query).then(queryResult => {
                this._usersCached = true;
                resolve({
                    users: queryResult.results,
                    totalRecords: queryResult.inlineCount
                })
            },
                error => reject(error));
        });

        return promise;
    }

    getUserResults(userId: number) {

        let promise = new Promise<any>((resolve, reject) => {

            let query = EntityQuery.from('Results')
                .where('userId', FilterQueryOp.Equals, userId)
                .expand(['competition', 'competition.championship']);

            this._em.executeQuery(query).then(queryResult => {
                resolve(queryResult.results)
            },
                error => reject(error));
        });

        return promise;
    }

    getUser(id: string): Promise<User> {
        let promise = new Promise((resolve, reject) => {
            let query = EntityQuery.from('Users').where('id', 'equals', id);
            let strategy: FetchStrategySymbol;
            if (!this._usersCached) {
                strategy = FetchStrategy.FromServer;
            } else {
                strategy = FetchStrategy.FromLocalCache;
            }
            this._em.executeQuery(query.using(strategy)).then(response => {
                if (response.results && response.results.length === 1) {
                    resolve(response.results[0]);
                } else {
                    resolve(null);
                }

            }, error => reject(error));
        });
        return promise;
    }

    getUserById(id: string) {
        return this._em.getEntityByKey('Users', id);
    }

    getCustomersWithChanges() {
        return <User[]>this._em.getEntities('Users', [EntityState.Added, EntityState.Modified, EntityState.Deleted]);
    }

    saveChanges() {
        let promise = new Promise((resolve, reject) => {
            this._em.saveChanges().then(() => resolve(),
                error => reject(error));
        });
        return promise;
    }

    search(searchTerm: string, searchField: string) {

        let pred: Predicate;
        if (searchField === 'name') {
            pred = new Predicate('firstName', FilterQueryOp.Contains, searchTerm)
                .or(new Predicate('lastName', FilterQueryOp.Contains, searchTerm));
        } else {
            pred = new Predicate(searchField, FilterQueryOp.Contains, searchTerm);
        }

        let query = EntityQuery.from('Users').where(pred);

        return this._em.executeQueryLocally(query);

    }

    searchAsync(searchTerm: string, searchField: string): Promise<User[]> {

        let promise = new Promise((resolve, reject) => {
            let pred: Predicate;
            if (searchField === 'name') {
                pred = new Predicate('firstName', FilterQueryOp.Contains, searchTerm)
                    .or(new Predicate('lastName', FilterQueryOp.Contains, searchTerm));
            } else {
                pred = new Predicate(searchField, FilterQueryOp.Contains, searchTerm);
            }

            let query = EntityQuery.from('Users').where(pred);
            this._em.executeQuery(query)
                .then(queryResult => resolve(queryResult.results),
                error => reject(error));
        });

        return promise;
    }

}
