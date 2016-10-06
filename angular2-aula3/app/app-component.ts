import {Component} from 'angular2/core';
import {Cliente} from './cliente';

@Component({
  selector: 'meu-app',
  template: `
  	<h1>{{titulo | uppercase}}</h1>
  	<h2>Cliente Selecionado com id {{cliente.id}}: {{cliente.nome}}</h2>
  	<ul>
  		<li *ngFor="#cli of clientes; #i = index" class="{{(cliente.id === cli.id ? 'active':'')}}">
  			<a href="#" (click)="swap(i)">{{cli.id}}: {{cli.nome}}</a>
  		</li>
  	</ul>
  	<p *ngIf="clientes.length < 1">Nenhum cliente encontrado</p>
  `
})
export class AppComponent{
	private titulo:string;
	private clientes: Cliente[];
	private cliente:Cliente;
	constructor(){
		this.titulo = "Listagem de clientes";
		this.clientes = [
			new Cliente(1, "Fulano"),
			new Cliente(2, 'Beltrano'),
			new Cliente(3, 'Ciclano'),
			new Cliente(4, 'Marcio')
		];
		this.cliente = this.clientes[0];
	}
	swap(index:number): void{
		if(index < this.clientes.length){
			this.cliente = this.clientes[index];
		}
	}
}
