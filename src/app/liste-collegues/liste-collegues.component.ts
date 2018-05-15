import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Collegue, Vote } from '../model';

@Component({
  selector: 'app-liste-collegues',
  templateUrl: './liste-collegues.component.html',
  styleUrls: ['./liste-collegues.component.css']
})
export class ListeColleguesComponent implements OnInit {

  @Input() listeCollegue:Collegue[];
  saisiePseudo:string = "";
  @Output()  unVote: EventEmitter<Vote> = new EventEmitter<Vote>();
  constructor() { }

  ngOnInit() {
  }

  traiterVote($event:Vote){
  this.unVote.emit($event);
  }
}
