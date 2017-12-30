import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { AutorService } from './autor.service';
import { Livro } from './../shared/models/livro';


@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {


  obsTextMsg: Observable<string>;
  obsLivros: Observable<Livro[]>;


  constructor(private autorService: AutorService) { }

  ngOnInit() {
  this.getTextMsg();
  this.getLivros();

  }

  getTextMsg(): any {

    this.obsTextMsg = this.autorService.getTextoMensagem();
  }

  getLivros(){
    this.obsLivros = this.autorService.getLivros();
  }






}
