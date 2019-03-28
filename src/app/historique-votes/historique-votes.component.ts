import { Avis, Vote } from './../models';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../service/data.service';

import { Subscription } from 'rxjs';


@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.css']
})
export class HistoriqueVotesComponent implements OnDestroy {

  actionSub: Subscription;
  listeVotes : Vote[] = [];
  avis = Avis;
  constructor(private _srv: DataService) {
    this.actionSub = this._srv.listerVotes.subscribe(
    (data :Vote) =>{
      this.listeVotes.unshift(data);
    },
    error => {
     console.log('erreur')
    },

      () => {

      });
  }



  Supprimer(i:number){
    this.listeVotes.splice(i, 1);
   }

  ngOnDestroy() {
    // désabonnement du composant avant sa destruction
    this.actionSub.unsubscribe();
  }

}
