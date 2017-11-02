import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { IBook, Book } from './book';
import { MenuItem } from 'primeng/primeng';
import { Message } from 'primeng/components/common/message';

@Component({
  selector: 'b-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  msgs: Message[];

  deleteBook(book: IBook): any {
    alert(book.Name);
  }
  viewBook(book: IBook): any {
    alert(book.Name);
  }
  items: MenuItem[];
  books: IBook[];
  selectedBook: IBook;
  newBook: boolean;
  book: Book = new PrimeBook();
  displayDialog: boolean;
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.items = [
      { label: 'View', icon: 'fa-search', command: (event) => this.viewBook(this.selectedBook) },
      { label: 'Delete', icon: 'fa-close', command: (event) => this.deleteBook(this.selectedBook) }
    ];
    this.bookService.getBooks().subscribe(book => { this.books = book },
      (err) => {
        console.error(err),
          () => { console.log('Sucessfully loaded...') }
      })
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
    let book = new PrimeBook();
    for (let prop in c) {
      book[prop] = c[prop];
    }
    return book;
  }
}

class PrimeBook implements Book {
  constructor(public BookId?, public Name?, public Description?, public CreatedDate?, public AuthorId?) { }
}


