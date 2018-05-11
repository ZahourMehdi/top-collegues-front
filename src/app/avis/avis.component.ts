import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {Avis, Collegue} from '../model'

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {

  @Output() change:EventEmitter<string> = new EventEmitter<string>();
  @Input() estAimer:boolean;
  @Input() estDetestable:boolean;

  constructor() { }

  ngOnInit() {
  }

  aimer(){
    this.change.emit( Avis.AIMER);
  }
  detester(){
    this.change.emit(Avis.DETESTER);
  }

}
