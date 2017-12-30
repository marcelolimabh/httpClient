import { Autor } from './../shared/models/autor';
import { Livro } from './../shared/models/livro';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http/src/response';

@Injectable()
export class AutorService {


  //URLs

  urlMensagem: string = '/api/mensagem';
  urlLivros: string = '/api/livros';
  urlAutor: string = '/api/autor';
  myUrl: string = "/api/invalid";



  constructor(private http: HttpClient) { }

  getTextoMensagem(): Observable<string> {
    return this.http.get(this.urlMensagem, { responseType: 'text' });
  }


  getLivros(): Observable<Livro[]> {

    return this.http.get<Livro[]>(this.urlLivros, { headers: this.getHeaders() });
  }

  filtrarLivros(categoria: string, ano: string): Observable<Livro[]> {


    return this.http.get<Livro[]>(this.urlLivros + '?categoria=' + categoria + '&ano=' + ano, {
      headers: this.getHeaders(),
      responseType: 'json'
    });
  }

  getAutorWithLivros(): Observable<any> {
    return this.http.get(this.urlAutor, {
      responseType: 'json'
    });
  }

  getAutorFavorito(): Observable<Autor> {
    return this.http.get<Autor>(this.urlAutor, { responseType: 'json' });
  }

  getFullResponseParaAutor(): Observable<HttpResponse<any>> {
    return this.http.get(this.urlAutor, {
      observe: 'response'
    });
  }

  getDadosPararUrl(): Observable<any> {
    return this.http.get(this.myUrl);
  }


  getHeaders(): HttpHeaders {
    return new HttpHeaders()
      .set('Content-Type', 'application/json');
  }

}
