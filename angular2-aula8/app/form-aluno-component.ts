import {Component} from 'angular2/core';
import {FormBuilder, Validators, ControlGroup, AbstractControl} from 'angular2/common';
import {Aluno} from './models/aluno';
import {Curso} from './models/curso';
import {EmailValidator} from './validators/email-validator';

@Component({
	selector: 'form-aluno',
	templateUrl: 'app/views/formulario.html'
})

export class FormAlunoComponent{
	sucesso: boolean = false;
	cursos: Curso[];
	aluno: Aluno;
  alunoForm: ControlGroup;

	constructor(fb: FormBuilder){
		this.aluno = new Aluno();
		this.cursos = [
			new Curso('angular', 'Angular 2'),
			new Curso('javascript', 'Javascript'),
      new Curso('ruby', 'Ruby on Rails')
		];
    this.buildForm(fb);
	}
  hasErrors(): boolean {
		var hasErrors: boolean = false;
		for(var controlName in this.alunoForm.controls) {
			var control: AbstractControl = this.alunoForm.controls[controlName];
			if(!control.valid && !control.pristine) {
				hasErrors = true;
				break;
			}
		}
		return hasErrors;
	}
  buildForm(fb: FormBuilder): void{
    this.alunoForm = fb.group({
      nome: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, EmailValidator.validate])],
      curso: ['', Validators.required]
    });
  }
	enviar(): void{
		this.sucesso = true;
	}

	debug(): string{
		return JSON.stringify(this.aluno);
	}

}
