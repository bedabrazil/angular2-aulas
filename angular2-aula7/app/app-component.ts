import {Component} from 'angular2/core';

@Component({
  selector: 'meu-app',
  templateUrl: 'app/views/app.html'
})
export class AppComponent{
  public olaFulano: string = "Olá, Fulano";
  public mostrarMensagem: boolean = true;
  public nome1: string = 'Fulano';
  public nome2: string = 'Ciclano';
  public azul: boolean = true;
  public cadastrar: boolean = true;
  public remover: boolean = false;
  public exibir: boolean = true;
  public contador: number = 1;
  public clientes: string[] = ["Cliclano", 'Fulano', 'Beltrano'];

  obterJuros(): number{
    return 100;
  }

  dizerOi(): void{
    alert(this.olaFulano);
  }

  mostrarTexto($event): void{
    alert($event.target.value);
  }

  mudarMostrarMensagem(): void{
    this.mostrarMensagem = !this.mostrarMensagem;
  }

  atualizarNome($event): void{
    this.nome1 = $event.target.value;
  }

  mudarEstilo(): void{
    this.azul = !this.azul;
  }
  alterarCadastro(): void{
    this.cadastrar = !this.cadastrar;
    this.remover   = !this.remover;
  }

  alternarValor(): void{
    this.exibir = !this.exibir;
  }

  incrementar(): void{
    this.contador++;
  }
}
