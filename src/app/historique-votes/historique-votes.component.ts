import { Component, OnInit, Input } from '@angular/core';
import { Vote, Avis } from '../model';

@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.css']
})
export class HistoriqueVotesComponent implements OnInit {

  @Input() votes:Vote[]
  avis:any= Avis
  constructor() { }

  ngOnInit() {
  }

  supprimer(v:Vote){
    this.votes.forEach((element,index,array) => {
      if(element == v)
        this.votes.splice(index,1)
    });
  }
}
