import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;

  cursos: string[] = ['PHP', 'Java', 'Angular', 'AWS'];

  constructor() {
      this.nomePortal = "https://hellinenathy.herokuapp.com/index.html"

      for (let i=0; i<this.cursos.length; i++){
        let curso = this.cursos[i];
      }
   }

  ngOnInit() {
  }

}
