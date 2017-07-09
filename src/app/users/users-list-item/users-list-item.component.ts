import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';

// import { ModalDirective } from 'ngx-bootstrap';

import { User } from '../../model/entity-model';
import { CfResositoryService } from '../../shared/cf-repository.service';

@Component({
  selector: 'cf-users-list-item',
  templateUrl: './users-list-item.component.html',
  styleUrls: ['./users-list-item.component.css']
})
export class UsersListItemComponent implements OnInit {

  private isSelected: boolean;

  @Input()
  public user: User;

  @Input()
  public set selectedUser(value: User) {
    if (value === this.user) {
      this.isSelected = true;
    } else {
      this.isSelected = false;
    }
  }

  // @ViewChild('deleteModal')
  // public deleteModal: ModalDirective;

  @Output()
  deleted = new EventEmitter<void>();

  constructor(private _zzaRepository: CfResositoryService) { }

  ngOnInit() {
  }

  // deleteCustomer() {
  //   this.deleteModal.show();
  // }

  // confirmDeleteCustomer() {
  //   this.deleteModal.hide();
  //   this._zzaRepository.deleteCustomer(this.customer).then(_ =>
  //     this._zzaRepository.saveChanges()).then(_ =>
  //       this.deleted.emit(), error => console.error(error));
  // }
}
