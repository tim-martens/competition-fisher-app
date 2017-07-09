import { EntityBase } from './EntityBase';
import { Competition } from './Competition';

/// <code-import> Place custom imports between <code-import> tags

/// </code-import>

export class Championship extends EntityBase {

    /// <code> Place custom code between <code> tags
    
    /// [Initializer]
    static initializer(entity: Championship) { }
    /// </code>

    // Generated code. Do not place code below this line.
    id: string;
    name: string;
    competitions: Competition[];
}

