export interface Collegue {
    pseudo : string;
    score : number;
    photoUrl : string;
}

export enum Avis {
 AIMER,
DETESTER
}

export interface Vote{
  collegue : Collegue;
  avis : Avis;
}
