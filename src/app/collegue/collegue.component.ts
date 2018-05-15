import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Collegue, Avis, Vote } from '../model'
import { CollegueService } from '../services/collegue.service';
@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() unCollegue: Collegue;
  @Output() unVote: EventEmitter<Vote> = new EventEmitter<Vote>();
  avis: Avis

  estAimer: boolean;
  estDetestable: boolean;
  constructor(private _cService: CollegueService) { }

  ngOnInit() {
    this.estAimer = (this.unCollegue.score >= 1000)
    this.estDetestable = (this.unCollegue.score <= -1000)
  }

  traiter($event: Avis) {
    return this.avis = $event;
  }

  traiterScore($event: Avis) {
    this._cService.donnerUnAvis(this.unCollegue, $event)
      .then(c => {
        this.unCollegue = c;
        this.estAimer = (this.unCollegue.score >= 1000)
        this.estDetestable = (this.unCollegue.score <= -1000)
      })
      .catch(err => console.log(err))
  }

}
