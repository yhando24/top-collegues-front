import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models';

@Component({
  selector: 'app-liste-collegues-component',
  templateUrl: './liste-collegues-component.component.html',
  styleUrls: ['./liste-collegues-component.component.css']
})
export class ListeColleguesComponentComponent implements OnInit {
  @Input() cols: Collegue [] ;
   constructor() { }
  page: number = 1;
  pages = [];
  ngOnInit() {
    let nbpages = Math.round(this.cols.length / 3);
    for (var i = 0; i < nbpages; i++) {
      this.pages.push(i + 1);
    }
  }
  changePage(page: number) {
    this.page = page;
  }
}
