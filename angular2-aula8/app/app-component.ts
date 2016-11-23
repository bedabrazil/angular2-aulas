import {Component} from 'angular2/core';
import {FormAlunoComponent} from './form-aluno-component';
import {AlunoComponent} from './aluno-component';
@Component({
  selector: 'meu-app',
  template: '<aluno></aluno>',
  directives: [AlunoComponent]
})

export class AppComponent{}
