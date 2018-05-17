import { Component, OnInit } from '@angular/core';
import { AjoutCollegue, Collegue } from '../model';
import { CollegueService } from '../services/collegue.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-nouveau-collegue',
  templateUrl: './nouveau-collegue.component.html',
  styleUrls: ['./nouveau-collegue.component.css']
})
export class NouveauCollegueComponent implements OnInit {

  collegue: AjoutCollegue = new AjoutCollegue();
  msgError: any = {
    matricule : "",
    pseudo : ""
  };


  constructor(private _cService: CollegueService) { }

  ngOnInit() {
    this.collegue.matricule="";
    this.collegue.pseudo="";
  }

  submit() {
    this._cService.ajouterCollegue(this.collegue)
      .then((c: Collegue) => {

      })
      .catch((err: HttpErrorResponse) => {

        if (err.error == "Le matricule existe déjà !") {
          this.msgError.matricule = err.error;
        } else if (err.error == "Le pseudo existe déjà !") {
          this.msgError.pseudo = err.error;
        } else if (err.error == "Le matricule n'existe pas !") {
          this.msgError.matricule = err.error;
        }
      })

  }
}
