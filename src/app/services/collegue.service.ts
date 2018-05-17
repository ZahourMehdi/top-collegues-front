import { Injectable } from '@angular/core';
import { Collegue, Avis, AjoutCollegue } from '../model'

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})
export class CollegueService {

  constructor(private _http: HttpClient) {
  }

  listerCollegues(): Promise<Collegue[]> {
    // récupérer la liste des collègues côté serveur

    return this._http.get<Collegue[]>(`${URL_BACKEND}/collegues`)
      .toPromise()


  }
  recupererCollegueByPseudo(pseudo: string): Promise<Collegue> {

    return this._http.get<Collegue>(`${URL_BACKEND}/collegues/${pseudo}`)
      .toPromise()
  }

  donnerUnAvis(unCollegue: Collegue, avis: Avis): Promise<Collegue> {
    // TODO Aimer ou Détester un collègue côté serveur
    return this._http.patch<Collegue>(`${URL_BACKEND}collegues/${unCollegue.pseudo}`,
      {
        "action": avis.valueOf()
      })
      .toPromise();
  }

  ajouterCollegue(newCollegue: AjoutCollegue):Promise<Collegue> {
    return this._http.post<Collegue>(`${URL_BACKEND}collegues/nouveau`, newCollegue).toPromise()
  }

}
