export interface Collegue {
    pseudo : string;
    score : number;
    photo? : string;
    prenom : string;
    email : string;
    adresse : string;
}


export enum Avis {
 AIMER,
DETESTER
}

export interface Vote{
  collegue : Collegue;
  avis : Avis;
}
