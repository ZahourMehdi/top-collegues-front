import { Injectable } from '@angular/core';
import { Collegue, Avis, AjoutCollegue, Vote } from '../model'

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, ReplaySubject } from 'rxjs';
import {map, tap} from 'rxjs/operators'

const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})
export class CollegueService {
  vote:Vote[]
  historiqueV = new ReplaySubject<Vote>();
  constructor(private _http: HttpClient) {
  }

  listerCollegues(): Observable<Collegue[]> {
    // récupérer la liste des collègues côté serveur

    return this._http.get<Collegue[]>(`${URL_BACKEND}/collegues`)



  }
  recupererCollegueByPseudo(pseudo: string): Observable<Collegue> {

    return this._http.get<Collegue>(`${URL_BACKEND}/collegues/${pseudo}`)

  }

  donnerUnAvis(unCollegue: Collegue, avis: Avis): Observable<Collegue> {
    // TODO Aimer ou Détester un collègue côté serveur


    return this._http.patch<Collegue>(`${URL_BACKEND}collegues/${unCollegue.pseudo}`,
      {
        "action": avis.valueOf()
      })
      .pipe(
        tap(col => {
          this.historiqueV.next(new Vote(avis,col));
        })
      )


  }

  ajouterCollegue(newCollegue: AjoutCollegue):Observable<Collegue> {
    return this._http.post<Collegue>(`${URL_BACKEND}collegues/nouveau`, newCollegue)
  }

}
