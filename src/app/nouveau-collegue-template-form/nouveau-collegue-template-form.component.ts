import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';


export class CollegueAjouter {
  pseudo: string;
  matricule: number;
  photoUrl: string;
}


@Component({
  selector: 'app-nouveau-collegue-template-form',
  templateUrl: './nouveau-collegue-template-form.component.html',
  styleUrls: ['./nouveau-collegue-template-form.component.css']
})
export class NouveauCollegueTemplateFormComponent implements OnInit {
  error : string;
  c : CollegueAjouter = new CollegueAjouter();
  constructor(private _srv: DataService) { }

  ngOnInit() {
  }
  submit(){
    this._srv.envoiBack(this.c).subscribe(
        (data: CollegueAjouter) => {
          this.c = data;
        },
        error => {
            this.error = "Personne avec ce matricule n'existe"
        },

        () => {

        });
    }
}

