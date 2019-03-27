import { Avis } from './../models';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Vote } from '../models';


@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.css']
})
export class HistoriqueVotesComponent implements OnInit {

  listeVotes : Vote[];
  avis = Avis;
  constructor(private _srv: DataService) { }

  ngOnInit() {
    this.listeVotes = this._srv.listerVotes();
  }
  Supprimer(i:number){
    this.listeVotes.splice(i, 1);
   }

}
