import { Component, OnInit, Input } from '@angular/core';
import { AvisComponent } from '../avis/avis.component';
import { Avis, Collegue, Vote } from '../model';
import { CollegueService } from '../services/collegue.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {


  collegue:Collegue[]
  historiqueVote:Vote[]
  constructor(private _cService:CollegueService) { }

  ngOnInit() {
    this.historiqueVote = [];
    this._cService.listerCollegues().subscribe((listeCollegue:Collegue[]) =>{
                    this.collegue = listeCollegue;
                  },err => console.log(err))
  }
  recupererVote($event){
    this.historiqueVote.push($event)
  }
}
