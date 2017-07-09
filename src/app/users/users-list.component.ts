import { Component, OnInit, ElementRef, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { CfResositoryService } from '../shared/cf-repository.service';
import { User } from '../model/entity-model';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'cf-users-list',
    templateUrl: 'users-list.component.html'
})

export class UsersListComponent implements OnInit {

    private selectedUser: User;
    private searchField = 'name';
    private searchInput: string;
    private currentPage = 1;
    private pageCount: number;
    private _totalRecords: number;
    private _pageSize = 2;

    users: User[];

    constructor(
        private _cfRepository: CfResositoryService,
        private elementRef: ElementRef) {
        const eventStream = Observable.fromEvent(elementRef.nativeElement, 'keyup')
            .map(() => this.searchInput)
            .debounceTime(500)
            .distinctUntilChanged();
        eventStream.subscribe(input => this.search(input));
    }

    ngOnInit() {
        this._cfRepository.getUsers(1, this._pageSize).then(result => {
            this.users = result.users;
            this._totalRecords = result.totalRecords;
            this.pageCount = Math.floor(this._totalRecords / this._pageSize);
            if (this.pageCount < (this._totalRecords / this._pageSize)) {
                this.pageCount += 1;
            }
        },
            error => console.log(error));
    }

    save() {
        this._cfRepository.saveChanges().then(() => {
            this.ngOnInit();
        },
            error => console.error(error));
    }

    onSelect(user: User) {
        this.selectedUser = user;
    }

    search(value) {
        // this.users = <User[]>this._cfRepository.search(value, this.searchField);
        this._cfRepository.searchAsync(value, this.searchField)
            .then(users => {
                this.users = users
            });
    }

    pageUp() {

        if (this.currentPage * this._pageSize >= this._totalRecords) {
            return;
        }

        let newPage = this.currentPage + 1;
        this._cfRepository.getUsers(newPage, this._pageSize).then(result => {
            this.users = result.users;
            this.currentPage = newPage;
        }, error => console.error(error));
    }

    pageDown() {
        if (this.currentPage === 1) {
            return;
        }
        let newPage = this.currentPage - 1;
        this._cfRepository.getUsers(newPage, this._pageSize).then(result => {
            this.users = result.users;
            this.currentPage = newPage;
        }, error => console.error(error));
    }
}
