export interface IBook {
    BookId: string;
    Name: string;
    Description: string;
    CreatedDate: string;
    AuthorId: string;
}

export class Book {
    BookId?: '';
    Name?: '';
    Description?: '';
    CreatedDate?: '';
    AuthorId?: '';
}