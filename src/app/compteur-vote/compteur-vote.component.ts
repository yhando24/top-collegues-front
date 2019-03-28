import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Vote } from '../models';
import { DataService } from '../service/data.service';
import { CompteurLocalStorageService } from '../service/compteur-local-storage.service';

@Component({
  selector: 'app-compteur-vote',
  templateUrl: './compteur-vote.component.html',
  styleUrls: ['./compteur-vote.component.css']
})
export class CompteurVoteComponent implements OnInit {

  actionSub: Subscription;
  nbVotes: number;



  constructor(private _srv: DataService, private _serviceCompteur: CompteurLocalStorageService) {
    this.actionSub = this._srv.listerVotes.subscribe(
      () => {
        this._serviceCompteur.item=++this.nbVotes;



      },
      error => {
        console.log('erreur')
      },

      () => {

      });
  }

  ngOnInit() {
    if (localStorage.length > 0) {
      this.nbVotes = Number(localStorage.getItem('votes'));
    } else {
      this.nbVotes = 0;
    }
  }

}
