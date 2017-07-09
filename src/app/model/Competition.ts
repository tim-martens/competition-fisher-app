import { EntityBase } from './EntityBase';
import { Championship } from './Championship';
import { Result } from './Result';

/// <code-import> Place custom imports between <code-import> tags

/// </code-import>

export class Competition extends EntityBase {

    /// <code> Place custom code between <code> tags
    
    /// [Initializer]
    static initializer(entity: Competition) { }
    /// </code>

    // Generated code. Do not place code below this line.
    id: string;
    championshipId: string;
    name: string;
    date: Date;
    championship: Championship;
    results: Result[];
}

