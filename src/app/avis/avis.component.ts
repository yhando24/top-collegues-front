import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Avis } from '../models';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {

  @Output() change: EventEmitter<Avis> = new EventEmitter<Avis>();
  @Input() desactiverBoutonJaime :boolean;
  @Input() desactiverBoutonJaimePas: boolean;
  constructor() { }

  ngOnInit() {
  }
  AvisJaime() {
    this.change.emit(Avis.AIMER)
  }
  AvisJaimePas() {
    this.change.emit(Avis.DETESTER)
  }
}


