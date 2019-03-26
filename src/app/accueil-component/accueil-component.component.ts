import { Component, OnInit } from '@angular/core';
import { listeCollegues } from '../liste-collegues-component/mock';
import { Collegue } from '../models';

@Component({
  selector: 'app-accueil-component',
  templateUrl: './accueil-component.component.html',
  styleUrls: ['./accueil-component.component.css']
})
export class AccueilComponentComponent implements OnInit {

  collegues: Collegue[] = listeCollegues;



  constructor() { }

  ngOnInit() {



  }


}
