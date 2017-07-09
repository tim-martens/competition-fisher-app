import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';

import { CfResositoryService } from './cf-repository.service';

@Injectable()
export class InitGuard implements CanActivate, CanActivateChild {

    constructor(private _cfRepository: CfResositoryService) { }

    canActivate(): Promise<boolean> {
        return this._cfRepository.initialize();
    }

    canActivateChild(): Promise<boolean> {
        return this.canActivate();
    }
}
