import { Injectable, OnInit } from '@angular/core';
import { listeCollegues } from '../liste-collegues-component/mock';
import { Collegue, Avis, Vote } from '../models';
import { Observable, of, from, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CollegueAjouter } from '../nouveau-collegue-template-form/nouveau-collegue-template-form.component';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class DataService implements OnInit {

  ngOnInit(): void {

  }


  // TODO alimenter la liste de collègues
  listeCollegues: Collegue[] = listeCollegues;
  private listeVotes = new Subject<Vote>();




  constructor(private _http: HttpClient, private route: ActivatedRoute) { }

  lister(): Observable<Collegue []>  {
    const URL_BACKEND = environment.backendUrl;
    return this._http.get<Collegue []>(URL_BACKEND+'collegues');
  }

  envoiBack(c :CollegueAjouter): Observable<CollegueAjouter>{
    const URL_BACKEND = environment.backendUrl;
    return this._http.post<CollegueAjouter>(URL_BACKEND+"collegues/", c);
  }

  donnerUnAvis(collegue: Collegue, avis: Avis): Observable<Collegue>{

    const URL_BACKEND = environment.backendUrl;

    return this._http.patch<Collegue>(URL_BACKEND + 'collegues/' + collegue.pseudo,{action: avis}).pipe(
    tap(c => this.listeVotes.next({ "collegue": c, "avis": avis } )));
  }
  get listerVotes(): Observable<Vote>{
  return  this.listeVotes.asObservable();
  }

  checkMatricule(m) : Observable<boolean>{

      const URL_BACKEND = environment.backendUrl;
      return this._http.get<boolean>(URL_BACKEND+'collegues/'+m);

  }

  getDescription(pseudo : string): Observable<Collegue>{

    console.log("le pseudo :" + pseudo)
    const URL_BACKEND = environment.backendUrl +'collegues?pseudo='+ pseudo;

    return this._http.get<Collegue>(URL_BACKEND);
    }

}
