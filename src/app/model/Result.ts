import { EntityBase } from './EntityBase';
import { Competition } from './Competition';
import { User } from './User';

/// <code-import> Place custom imports between <code-import> tags

/// </code-import>

export class Result extends EntityBase {

    /// <code> Place custom code between <code> tags
    
    /// [Initializer]
    static initializer(entity: Result) { }
    /// </code>

    // Generated code. Do not place code below this line.
    id: string;
    competitionId: string;
    userId: string;
    totalNumber: number;
    totalWeight: number;
    competition: Competition;
    user: User;
}

