import { MetadataStore } from 'breeze-client';

import { ApplicationUser } from './ApplicationUser';
import { Championship } from './Championship';
import { Competition } from './Competition';
import { Result } from './Result';
import { User } from './User';

export class RegistrationHelper {

    static register(metadataStore: MetadataStore) {
        metadataStore.registerEntityTypeCtor('ApplicationUser', ApplicationUser, ApplicationUser.initializer);
        metadataStore.registerEntityTypeCtor('Championship', Championship, Championship.initializer);
        metadataStore.registerEntityTypeCtor('Competition', Competition, Competition.initializer);
        metadataStore.registerEntityTypeCtor('Result', Result, Result.initializer);
        metadataStore.registerEntityTypeCtor('User', User, User.initializer);
    }
}
