import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


import { AutorService } from './autor.service';
import { Livro } from './../shared/models/livro';
import { Autor } from '../shared/models/autor';


@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {


  obsTextMsg: Observable<string>;
  obsLivros: Observable<Livro[]>;
  livros: Livro[];
  livrosFavoritos: Livro[];
  autorFavorito: Autor;
  autor: Autor;

  categorias = [
    { categoria: 'Angular' },
    { categoria: 'Hibernate' },
    { categoria: 'Java' }
  ];
  anos = [
    { ano: '2014' },
    { ano: '2015' },
    { ano: '2016' }
  ];


  constructor(private autorService: AutorService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getTextMsg();
    this.getLivros();

  }

  getTextMsg(): any {

    this.obsTextMsg = this.autorService.getTextoMensagem();
  }

  getLivros() {
    this.obsLivros = this.autorService.getLivros();
  }

  livroForm = this.formBuilder.group({
    categoria: '',
    ano: ''
  });


  onFormSubmit() {
    let categoria: string = this.livroForm.get('categoria').value;
    let ano: string = this.livroForm.get('ano').value;
    this.filtraLivros(categoria, ano);
  }


  filtraLivros(categoria: string, ano: string): void {
    this.autorService.filtrarLivros(categoria, ano).
      subscribe(data => this.livros = data);
  }



}
