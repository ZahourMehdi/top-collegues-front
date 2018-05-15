export enum Avis {
  AIMER = "AIMER",
  DETESTER = "DETESTER"
}


export class Collegue {
  constructor(public photo: string, public pseudo: string, public score: number,
    public nom: string, public prenom: string, public email: string, public adresse: string) {
  }


}

export class Vote {
  constructor(public avisDonne: Avis, public collegueJuge: Collegue) {
  }
}

export class AjoutCollegue{
  matricule:string;
  pseudo:string;
  url:string;
}
