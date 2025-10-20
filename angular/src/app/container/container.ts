import { Component, } from '@angular/core';
import { Macchina } from '../macchina/macchina';

@Component({
  selector: 'app-containerr',
  imports: [Macchina],
  templateUrl: './container.html',
  styleUrl: './container.css'
})
export class containerr {
  names: string[];  
  constructor() { 
     this.names = [
    "Scintilla",
    "Tesla",
    "estrattore di elisir",
    "Scaricuccioli",
    "barile goblin",
    "goblin cerbottaniere",
    "minatore",
    "trivella goblin",
    "cannone a rotelle",
    "mortaio"
]; 
  }
  ngOnInit() {
  }
}