import { Collegue } from './../models';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-presentation-collegue',
  templateUrl: './presentation-collegue.component.html',
  styleUrls: ['./presentation-collegue.component.css']
})
export class PresentationCollegueComponent implements OnInit {

  constructor(private _srv: DataService, private route: ActivatedRoute) { }

  collegue: Collegue = {
    pseudo: "En chargement",
    score: 0,

    prenom: "En chargement",
    email: "En chargement",
    adresse: "En chargement"}
pseudo:string;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.pseudo = params.get('pseudo');
    });


    this._srv.getDescription(this.pseudo).
      subscribe(col => this.collegue = col,
        error => console.log(error.error)
      );
  }

}
