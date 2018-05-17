import { Component, OnInit, Input } from '@angular/core';
import { Vote, Avis } from '../model';
import { CollegueService } from '../services/collegue.service';

@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.css']
})
export class HistoriqueVotesComponent implements OnInit {

  votes:Vote[] = []
  avis:any= Avis
  constructor(private _cService: CollegueService) { }

  ngOnInit() {
    this._cService.historiqueV.subscribe((v:Vote) => {
      this.votes.unshift(v);
    }, err => console.log(err));
  }

  supprimer(v:Vote){
    this.votes.forEach((element,index,array) => {
      if(element == v)
        this.votes.splice(index,1)
    });
  }
}
