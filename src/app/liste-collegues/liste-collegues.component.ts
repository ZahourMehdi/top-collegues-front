import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Collegue, Vote } from '../model';
import { CollegueService } from '../services/collegue.service';

@Component({
  selector: 'app-liste-collegues',
  templateUrl: './liste-collegues.component.html',
  styleUrls: ['./liste-collegues.component.css']
})
export class ListeColleguesComponent implements OnInit {

   listeCollegue:Collegue[];
  saisiePseudo:string = "";
  constructor(private _cService: CollegueService) { }

  ngOnInit() {
    this._cService.listerCollegues().subscribe(
      col => this.listeCollegue = col
    )
  }


}
