import { Component, OnInit, Input } from '@angular/core';
import { AvisComponent } from '../avis/avis.component';
import { Avis, Collegue, Vote } from '../model';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {


  collegue:Collegue[]
  historiqueVote:Vote[]
  constructor() { }

  ngOnInit() {
    this.historiqueVote = [];
    this.collegue = []
    this.collegue.push(new Collegue("http://wac.2f9ad.chicdn.net/802F9AD/u/joyent.wme/public/wme/assets/ec050984-7b81-11e6-96e0-8905cd656caf.jpg?v=46","Cyril",0))
    this.collegue.push(new Collegue("http://wac.2f9ad.chicdn.net/802F9AD/u/joyent.wme/public/wme/assets/ec050984-7b81-11e6-96e0-8905cd656caf.jpg?v=46","Mehdi",0))
    this.collegue.push(new Collegue("http://wac.2f9ad.chicdn.net/802F9AD/u/joyent.wme/public/wme/assets/ec050984-7b81-11e6-96e0-8905cd656caf.jpg?v=46","Alexis",0))
    this.collegue.push(new Collegue("http://wac.2f9ad.chicdn.net/802F9AD/u/joyent.wme/public/wme/assets/ec050984-7b81-11e6-96e0-8905cd656caf.jpg?v=46","Maxime",0))
    this.collegue.push(new Collegue("http://wac.2f9ad.chicdn.net/802F9AD/u/joyent.wme/public/wme/assets/ec050984-7b81-11e6-96e0-8905cd656caf.jpg?v=46","Fabien",1500))
    this.collegue.push(new Collegue("http://wac.2f9ad.chicdn.net/802F9AD/u/joyent.wme/public/wme/assets/ec050984-7b81-11e6-96e0-8905cd656caf.jpg?v=46","Clément",-1500))
    this.collegue.push(new Collegue("http://wac.2f9ad.chicdn.net/802F9AD/u/joyent.wme/public/wme/assets/ec050984-7b81-11e6-96e0-8905cd656caf.jpg?v=46","Julien",0));
  }
  recupererVote($event){
    this.historiqueVote.push($event)
  }
}
