import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { IBook, Book } from './book';
import { MenuItem } from 'primeng/primeng';
import { Message } from 'primeng/components/common/message';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'b-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  msgs: Message[];

  deleteBook(book: IBook): any {
    const index = this.findSelectedCarIndex();
    this.books = this.books.filter((val, i) => i !== index);
    this.book = null;
    this.displayDialog = false;
  }
  viewBook(book: IBook): any {
    alert(book.Name);
  }
  // tslint:disable-next-line:member-ordering
  items: MenuItem[];
  // tslint:disable-next-line:member-ordering
  books: IBook[];
  // tslint:disable-next-line:member-ordering
  selectedBook: IBook;
  // tslint:disable-next-line:member-ordering
  newBook: boolean;
  // tslint:disable-next-line:member-ordering
  book: Book = new PrimeBook();
  // tslint:disable-next-line:member-ordering
  displayDialog: boolean;
  constructor(private bookService: BookService, private title: Title) {
    this.title.setTitle('Book List');
  }

  ngOnInit() {
    this.items = [
      { label: 'View', icon: 'fa-search', command: (event) => this.viewBook(this.selectedBook) },
      { label: 'Delete', icon: 'fa-close', command: (event) => this.deleteBook(this.selectedBook) }
    ];
    this.bookService.getBooks().subscribe(book => { this.books = book; },
      (err) => {
        console.error(err),
          // tslint:disable-next-line:no-unused-expression
          () => { console.log('Sucessfully loaded...'); };
      });
  }
  onRowSelect(event) {
    this.newBook = false;
    this.book = this.cloneCar(event.data);
    this.displayDialog = true;
    console.log(event.data);
  }
  showDialogToAdd() {
    this.newBook = true;
    this.book = new PrimeBook();
    this.displayDialog = true;
  }

  findSelectedCarIndex(): number {
    return this.books.indexOf(this.selectedBook);
  }
  cloneCar(c: Book): Book {
    const book = new PrimeBook();
    // tslint:disable-next-line:forin
    for (const prop in c) {
      book[prop] = c[prop];
    }
    return book;
  }
}

class PrimeBook implements Book {
  constructor(public BookId?, public Name?, public Description?, public CreatedDate?, public AuthorId?) { }
}


