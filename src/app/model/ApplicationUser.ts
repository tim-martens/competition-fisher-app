import { EntityBase } from './EntityBase';
import { User } from './User';

/// <code-import> Place custom imports between <code-import> tags

/// </code-import>

export class ApplicationUser extends EntityBase {

    /// <code> Place custom code between <code> tags
    
    /// [Initializer]
    static initializer(entity: ApplicationUser) { }
    /// </code>

    // Generated code. Do not place code below this line.
    id: string;
    faceBookId: string;
    user: User;
}

