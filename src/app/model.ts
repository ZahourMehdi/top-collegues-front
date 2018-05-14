export enum Avis {
  AIMER = "AIMER",
  DETESTER = "DETESTER"
}


export class Collegue {
  constructor(  public photo: string, public pseudo: string, public score: number) {
  }
}

export class Vote {



  constructor(public avisDonne:Avis, public collegueJuge:Collegue  ){

  }
}
