import { Avis } from './../models';
import { Component, OnInit, Input, Output } from '@angular/core';
import { Collegue } from '../models';
import { ScorePipe } from '../pipes/score.pipe';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css'],

})
export class CollegueComponent implements OnInit {
@Input() c : Collegue;
desactiverBoutonJaime: boolean = false;
desactiverBoutonJaimePas: boolean = false;
  constructor(private _srv: DataService) {

   }

  ngOnInit() {
  }

  avis(unAvis: Avis) {
    this.c = this._srv.donnerUnAvis(this.c, unAvis);
    if (unAvis == Avis.AIMER){
      if(this.c.score >= 1000){
        this.desactiverBoutonJaime = true;
      }else{
        this.desactiverBoutonJaime = false;
      } if (this.c.score <= -1000){
        this.desactiverBoutonJaimePas = true;
      }else{
        this.desactiverBoutonJaimePas = false;
      }
    }else{
      if (this.c.score <= -1000) {
        this.desactiverBoutonJaimePas = true;
      } else {
        this.desactiverBoutonJaimePas = false;
      } if (this.c.score >= 1000) {
        this.desactiverBoutonJaime = true;
      } else {
        this.desactiverBoutonJaime = false;
      }

    }
  }
}
