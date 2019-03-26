import { Injectable } from '@angular/core';
import { listeCollegues } from '../liste-collegues-component/mock';
import { Collegue, Avis, Vote } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // TODO alimenter la liste de collègues
  listeCollegues: Collegue[] = listeCollegues;

  private listeVotes: Vote[] = [
    {
      collegue: listeCollegues[0],
      avis : Avis.AIMER
    },
    {
      collegue: listeCollegues[1],
      avis: Avis.DETESTER
    },
    {
      collegue: listeCollegues[2],
      avis: Avis.AIMER
    },
    {
      collegue: listeCollegues[3],
      avis: Avis.DETESTER
    },
    {
      collegue: listeCollegues[3],
      avis: Avis.AIMER
    },

]

  constructor() { }

  lister(): Collegue[] {
    return listeCollegues;
  }

  donnerUnAvis(collegue: Collegue, avis: Avis): Collegue {
    if (avis === Avis.AIMER){
      collegue.score += 100;
    } else {
      collegue.score -= 100;
    }
    return collegue;
  }
  listerVotes(): Vote[]{
    return this.listeVotes;
  }

}
