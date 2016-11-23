import {Injectable} from 'angular2/core';
import {Aluno} from '../models/aluno';

@Injectable()
export class AlunoService{
  private alunos: Aluno[] = [
    new Aluno('Fulano', 'fulano@gmail.com'),
    new Aluno('Beltrano', 'beltrano@gmail.com')
  ];

  listarTodos(){
    return this.alunos;
  }
  cadastrar(aluno: Aluno){
    this.alunos.push(aluno);
  }

  atualizar(id: number, aluno: Aluno){
    this.alunos[id] = aluno;
  }

  excluir(id: number){
    this.alunos.splice(id, 1);
  }
} 