import { Component } from '@angular/core';
@Component({
    template: `<p-panel header="404"></p-panel>
  `,
    styles: [`
    .errorMessage {
      margin-top:150px;
      font-size: 170px;
      text-align: center;
    }`]
})
export class Error404Component {
    constructor() {

    }

}
