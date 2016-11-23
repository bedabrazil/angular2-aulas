import { Component } from '@angular/core';

@Component({
  selector: 'meu-app',
  template: `
    <nav class="navbar navbar-inverse navbar-fixed-top">
	  <div class="container">
		<div class="navbar-header">
		  <a class="navbar-brand" href="#">Kazale IT</a>
		</div>
		<div>
		  <ul class="nav navbar-nav">
		  	<li><a href="">Alunos</a></li>
		  </ul>
		</div>
	  </div>
	</nav>
    <br /><br /><br />
	`
})
export class AppComponent {
}