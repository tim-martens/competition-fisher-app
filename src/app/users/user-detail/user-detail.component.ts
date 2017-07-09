import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User, Result } from '../../model/entity-model';
import { CfResositoryService } from '../../shared/cf-repository.service';

@Component({
  selector: 'cf-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  private user: User = new User();
  private errorMessage: string;
  private isEditMode: boolean;

  results: Result[];

  @ViewChild('theForm') currentForm: NgForm;
  // orders: Order[];

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _cfRepository: CfResositoryService) { }


  ngOnInit() {
    if (this._route.routeConfig.path !== 'user-add') { // edit user
      this.isEditMode = true;
      let id = this._route.snapshot.params['userId'];
      this._cfRepository.getUser(id).then(user => {
        this.user = user;
        this._cfRepository.getUserResults(id).then(results => this.results = results);
        // this.user.entityAspect.propertyChanged.subscribe(args => {
        //   // console.log(`${args.propertyName}: was ${args.oldValue}, now ${args.newValue}`);
        // });
        // this._cfRepository.getCustomerOrderHistory(id).then(orders => this.orders = orders);
      },
        error => {
          this.errorMessage = error.message;
        });
    } else { // add user
      this.user = <User>this._cfRepository.createEntity('User');
    }
  }

  onSave() {
    if (this.currentForm.invalid) {
      return;
    }
    this._cfRepository.saveChanges().then(
      () => {
        this._router.navigate(['users-list']);
      },
      error => {
        if (!error.entityErrors && error.message) {
          this.errorMessage = error.message;
        }
      });
  }

  getValidationErrors(propertyName) {
    if (!this.user || !this.user.entityAspect) {
      return;
    }

    this.user.entityAspect.validateProperty(propertyName);
    const errors = this.user.entityAspect.getValidationErrors(propertyName);
    if (errors && errors.length > 0) {
      let error = '';
      errors.forEach(e => {
        if (error.trim()) { error += ', '; }
        error += e.errorMessage;
      });
      return error;
    } else {
      return null;
    }
  }

}
