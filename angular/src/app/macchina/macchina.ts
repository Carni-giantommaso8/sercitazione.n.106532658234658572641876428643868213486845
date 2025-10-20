import { Component, Input} from '@angular/core';
import { containerr } from '../container/container';

@Component({
  selector: 'app-macchina',
  imports: [containerr],
  templateUrl: './macchina.html',
  styleUrl: './macchina.css'
})
export class Macchina {
   @Input() name!: string; // <-- Aggiungi la notazione @input

  constructor() {
     // Rimuovi l'impostazione del nome
  }

  ngOnInit() {}

}
