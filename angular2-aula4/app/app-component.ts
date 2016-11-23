import {Component} from 'angular2/core';
import {CepPipe} from './cep-pipe';

@Component({
  selector: 'meu-app',
  template: `
  	<h1>Angular 2 - Aula 4</h1>
  	<p>Valor: {{valor | currency:'BRL':true:'1.2-2'}}</p>
		<p>CEP: {{cep | cep}}</p>
		<p>Data Atual: {{dataAtual | date:'dd/MM/yyyy'}}</p>
		<p>Data Atual 2: {{dataAtual | date:formatar}}</p>
		<button (click)="mudarFormato()">Mudar Formato</button>
  `,
  pipes: [CepPipe]
})
export class AppComponent{
	valor: number = 1046.99;
	cep:string = '09540934';
	dataAtual: Date = new Date();
	formato:boolean = true;

	get formatar(){
		return this.formato ? 'dd/MM/yyyy HH:mm:ss':'dd/MM/yy';
	}
	mudarFormato(){
		this.formato = !this.formato;
	}
}
