import { EntityBase } from './EntityBase';
import { ApplicationUser } from './ApplicationUser';
import { Result } from './Result';

/// <code-import> Place custom imports between <code-import> tags

/// </code-import>

export class User extends EntityBase {

    /// <code> Place custom code between <code> tags

    /// [Initializer]
    static initializer(entity: User) { }
    /// </code>

    // Generated code. Do not place code below this line.
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    applicationUser: ApplicationUser;
    results: Result[];
}

