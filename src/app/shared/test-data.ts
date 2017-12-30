import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs/Observable';

export class TestData implements InMemoryDbService {

  createDb() {
    return {livros: this.getDetalhesLivro(), autor: this.getDetalhesAutor(), mensagem: this.getMensagem() };
  }


  /**
   * Simula os dados de detalhe de um livro
   */
  getDetalhesLivro(){

    let detalhesLivro = [
      { id: '101', nome: 'Angular 2 by Marcelo Bicalho', categoria: 'Angular', ano: '2015' },
      { id: '102', nome: 'AngularJS by Marcelo Bicalho', categoria: 'Angular', ano: '2014' },
      { id: '103', nome: 'Angular 2 by Jonh Papa', categoria: 'Angular', ano: '2016' },
      { id: '104', nome: 'Core Java by Marcelo', categoria: 'Java', ano: '2016' },
      { id: '105', nome: 'JSP & Servlet by Vishnu', categoria: 'Java', ano: '2016' },
      { id: '106', nome: 'JPA by Vishnu', categoria: 'Java', ano: '2016' },
      { id: '107', nome: 'Hibernate by Marcelo', categoria: 'Hibernate', ano: '2015' }
    ];

    return detalhesLivro;

  }

  getDetalhesAutor(){

    let detalhesAutor =[
      {
        id: 11, nome: 'Marcelo Bicalho',
        livros: [
          { id: '101', nome: 'Angular 2 by Marcelo Bicalho', categoria: 'Angular', ano: '2015' },
          { id: '102', nome: 'AngularJS by Marcelo Bicalho', categoria: 'Angular', ano: '2014' },
          { id: '104', nome: 'Core Java by Marcelo Bicalho', categoria: 'Java', ano: '2016' },
          { id: '107', nome: 'Hibernate by Marcelo Bicalho', categoria: 'Hibernate', ano: '2015' }
        ]
      },
      {
        id: 12, nome: 'Jonh Papa',
        livros: [
          { id: '103', nome: 'Angular 2 by Jonh Papa', categoria: 'Angular', ano: '2016' }
        ]
      },
      {
        id: 13, nome: 'Vishnu',
        livros: [
          { id: '105', nome: 'JSP & Servlet by Vishnu', categoria: 'Java', ano: '2016' },
          { id: '106', nome: 'JPA by Vishnu', categoria: 'Java', ano: '2016' }
        ]
      },

    ];
      return detalhesAutor;

  }

  getMensagem(){
   return 'Bem vindo ao mundo Angular TypeScript!';
  }






}
