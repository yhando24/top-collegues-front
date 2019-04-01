import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { empty } from 'rxjs';
import { ValidationErrors } from '@angular/forms';


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
  errorExist : boolean = false;
  type: string = '';
  message: string = '';
  c : CollegueAjouter = new CollegueAjouter();
  constructor(private _srv: DataService, private router: Router) { }

  ngOnInit() {
  }
  submit(){
    console.log(this.c.matricule + this.c.nom)
    this._srv.envoiBack(this.c).subscribe(
        (data: CollegueAjouter) => {
        this.error='';
        this.router.navigate(['/accueil']);

        },
        error => {
          this.type = 'danger';
          this.message = error.error;
          console.log(error.error);
          this.errorExist = true;
        },

        () => {

        });
    }
  check(erreurr: ValidationErrors | null){
    if (erreurr != null){
      this.type = 'danger';
      this.message = 'Le matricule et le pseudo ne peuvent pas etre identique';
      this.errorExist = true;
       return true;
      }else{
        return false;
      }
    }
}

