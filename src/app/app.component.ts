import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeRole="";
  hasRole = false;
  roles = {
    inves:["Vigilante, Veteran, or Mafioso.",
    "Medium, Janitor, or Retributionist.",
    "Spy or Jailor.",
    "Sheriff or Executioner",
    "Framer or Jester",
    "Lookout",
    "Escort or Transporter",
    "Doctor or Serial Killer.",
    "Investigator or Mayor.",
    "Bodyguard, Godfather, or Arsonist"
  ],
  sheriff:[
    'Not sus/GF',
    'maf',
    'sk'
  ]
}
seen = [];
title = 'Fake Town of salem will generator';
will = [];
getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandWill = () => {
  this.will = []
  let sentences = this.roles[this.activeRole];
  for(let i = 1; i<15;i++){
    this.will.push( "n"+i+" - NAME - "+sentences[this.getRandomInt(0, sentences.length - 1)]);
  }
}
changeRole = (role) =>{
  this.will = []
  if(role != "nr"){
    this.hasRole = true;
    this.activeRole = role ;
    return;
  }
  this.hasRole = false;

}
}

