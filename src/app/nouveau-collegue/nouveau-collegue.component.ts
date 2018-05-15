import { Component, OnInit } from '@angular/core';
import { AjoutCollegue } from '../model';

@Component({
  selector: 'app-nouveau-collegue',
  templateUrl: './nouveau-collegue.component.html',
  styleUrls: ['./nouveau-collegue.component.css']
})
export class NouveauCollegueComponent implements OnInit {

  collegue:AjoutCollegue = new AjoutCollegue();
  constructor() { }

  ngOnInit() {
  }

  submit(){
    console.log(this.collegue)
  }
}
