import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

import {Evento} from '../model/evento.model';
import {EventoService} from '../service/evento.service';

@Component({
  selector: 'app-cadastro-eventos',
  templateUrl: './cadastro-eventos.component.html',
  styleUrls: ['./cadastro-eventos.component.css']
})
export class CadastroEventosComponent implements OnInit {

  evento: Evento = new Evento();

  constructor( private router: Router, private eventoService: EventoService) { 

  }

  ngOnInit() {
  }

  createEvento(): void{
    //console.log(this.pessoas.nome);
    //console.log(this.pessoas.idade);
   //this.pessoas.nome;
   //this.pessoas.idade
   this.eventoService.postEvento(this.evento)
  .subscribe( data => {
    alert('Evento created successfully.');
  });
  }
}
