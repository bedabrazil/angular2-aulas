import {Component} from 'angular2/core';
import {Aluno} from './models/aluno';
import {Curso} from './models/curso';

@Component({
	selector: 'form-aluno',
	templateUrl: 'app/views/formulario.html'
})

export class FormAlunoComponent{
	sucesso: boolean = false;
	cursos: Curso[];
	aluno: Aluno;

	constructor(){
		this.aluno = new Aluno();
		this.cursos = [
			new Curso('angular', 'Angular 2'),
			new Curso('javascript', 'Javascript')
		]
	}

	enviar(): void{
		this.sucesso = true;
	}

	debug(): string{
		return JSON.stringify(this.aluno);
	}

}