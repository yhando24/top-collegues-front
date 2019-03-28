import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompteurLocalStorageService {

set item ( item : number) {
  localStorage.setItem('votes', String(item));
}

  constructor() { }
}
