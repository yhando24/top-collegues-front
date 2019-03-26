import { Avis } from './../models';
import { Component, OnInit, Input, Output } from '@angular/core';
import { Collegue } from '../models';
import { ScorePipe } from '../pipes/score.pipe';

@Component({
  providers: [ScorePipe],
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css'],

})
export class CollegueComponent implements OnInit {
@Input() c : Collegue;
desactiverBoutonJaime: boolean = false;
desactiverBoutonJaimePas: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  avis(unAvis: Avis) {
    if(unAvis == Avis.AIMER){
      this.c.score += 100;
      if (this.c.score >=1000){
        this.desactiverBoutonJaime = true
      }else{
        this.desactiverBoutonJaime = false
      }
      if (this.c.score <= -1000) {
        this.desactiverBoutonJaimePas = true
      } else {
        this.desactiverBoutonJaimePas = false;
      }

    }else{
      this.c.score -= 100;
      if (this.c.score <= -1000) {
        this.desactiverBoutonJaimePas = true
      } else {
        this.desactiverBoutonJaimePas = false;
      } if (this.c.score >= 1000) {
        this.desactiverBoutonJaime = true
      } else {
        this.desactiverBoutonJaime = false
      }
      console.log("jaime pas")
    }

  }


}
