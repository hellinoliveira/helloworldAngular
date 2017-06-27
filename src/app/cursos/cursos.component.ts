import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;

  cursos: string[];

  constructor(cursosService: CursosService) {
    this.nomePortal = "https://hellinenathy.herokuapp.com/index.html"

    this.cursos = cursosService.getCursos();
    // for (let i=0; i<this.cursos.length; i++){
    //   let curso = this.cursos[i];
    // }

  }

  ngOnInit() {
  }

}
