export enum Avis {
  AIMER = "J'aime",
  DETESTER = "Je déteste"
}


export class Collegue {
  constructor(  public photo: string, public pseudo: string, public score: number) {
  }
}

export class Vote {



  constructor(public avisDonne:Avis, public collegueJuge:Collegue  ){

  }
}
