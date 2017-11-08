export class Author {
    constructor(public name: '', public bio: '', public image: '', public born: '', public spouse: '') {
    }
}
export interface IAuthor {
    name: string;
    bio: string;
    image: string;
    born: string;
    spouse: string;
}
