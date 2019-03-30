import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { empty } from 'rxjs';


export class CollegueAjouter {
  nom: string;
  matricule: number;
  photo: string;
}


@Component({
  selector: 'app-nouveau-collegue-template-form',
  templateUrl: './nouveau-collegue-template-form.component.html',
  styleUrls: ['./nouveau-collegue-template-form.component.css']
})
export class NouveauCollegueTemplateFormComponent implements OnInit {
  error : string;
  c : CollegueAjouter = new CollegueAjouter();
  constructor(private _srv: DataService, private router: Router) { }

  ngOnInit() {
  }
  submit(){
    this._srv.envoiBack(this.c).subscribe(
        (data: CollegueAjouter) => {
        this.error='';
        this.router.navigate(['/accueil']);

        },
        error => {
            this.error = error.error;
          console.log(error);
        },

        () => {

        });
    }
}

