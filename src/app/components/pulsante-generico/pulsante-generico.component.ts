import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pulsante-generico',
  templateUrl: './pulsante-generico.component.html',
  styleUrls: ['./pulsante-generico.component.scss'],
})
export class PulsanteGenericoComponent implements OnInit {
  @Input() testo:string;
  indirizzi:string[] = [];
  @Input() indirizzo:string;
  
  constructor() { }

  ngOnInit() {
    this.indirizzi.push(this.indirizzo);
  }
}