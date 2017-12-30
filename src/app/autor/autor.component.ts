import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AutorService } from './autor.service';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {


  obsTextMsg: Observable<string>


  constructor(private autorService: AutorService) { }

  ngOnInit() {
  this.getTextMsg();

  }

  getTextMsg(): any {

    this.obsTextMsg = this.autorService.getTextoMensagem();
  }






}
