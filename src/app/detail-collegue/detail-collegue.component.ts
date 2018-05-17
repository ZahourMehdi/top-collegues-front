import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollegueService } from '../services/collegue.service';
import { Collegue, Avis, Vote } from '../model';

@Component({
  selector: 'app-detail-collegue',
  templateUrl: './detail-collegue.component.html',
  styleUrls: ['./detail-collegue.component.css']
})
export class DetailCollegueComponent implements OnInit {

  collegue: Collegue = new Collegue("", "", "", 0, "", "", "", "");
  estAimer: boolean;
  estDetestable: boolean;
  constructor(private _route: ActivatedRoute, private _cService: CollegueService) {

  }
  ngOnInit() {
    this._cService.recupererCollegueByPseudo(this._route.snapshot.paramMap.get("pseudo"))
      .subscribe((c: Collegue) => {
        this.collegue = c
      }, err => console.log(err))

  }

  traiterScore($event: Avis) {
    this._cService.donnerUnAvis(this.collegue, $event).subscribe(c => {
      this.collegue = c;
      this.estAimer = (this.collegue.score >= 1000)
      this.estDetestable = (this.collegue.score <= -1000)

    }, err => console.log(err))
  }
}
