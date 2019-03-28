import { Injectable } from '@angular/core';
import { listeCollegues } from '../liste-collegues-component/mock';
import { Collegue, Avis, Vote } from '../models';
import { Observable, of, from, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DataService {


  // TODO alimenter la liste de collègues
  listeCollegues: Collegue[] = listeCollegues;
  private listeVotes = new Subject<Vote>();




  constructor(private _http: HttpClient) { }

  lister(): Observable<Collegue []>  {
    const URL_BACKEND = environment.backendUrl;
    return this._http.get<Collegue []>(URL_BACKEND+'collegues');
  }


  donnerUnAvis(collegue: Collegue, avis: Avis): Observable<Collegue>{

    const URL_BACKEND = environment.backendUrl;

    return this._http.patch<Collegue>(URL_BACKEND + 'collegues/' + collegue.pseudo,{action: avis}).pipe(
    tap(c => this.listeVotes.next({ "collegue": c, "avis": avis } )));
  }
  get listerVotes(): Observable<Vote>{
  return  this.listeVotes.asObservable();
  }



}
