System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.olaFulano = "Olá, Fulano";
                    this.mostrarMensagem = true;
                    this.nome1 = 'Fulano';
                    this.nome2 = 'Ciclano';
                    this.azul = true;
                    this.cadastrar = true;
                    this.remover = false;
                    this.exibir = true;
                    this.contador = 1;
                    this.clientes = ["Cliclano", 'Fulano', 'Beltrano'];
                }
                AppComponent.prototype.obterJuros = function () {
                    return 100;
                };
                AppComponent.prototype.dizerOi = function () {
                    alert(this.olaFulano);
                };
                AppComponent.prototype.mostrarTexto = function ($event) {
                    alert($event.target.value);
                };
                AppComponent.prototype.mudarMostrarMensagem = function () {
                    this.mostrarMensagem = !this.mostrarMensagem;
                };
                AppComponent.prototype.atualizarNome = function ($event) {
                    this.nome1 = $event.target.value;
                };
                AppComponent.prototype.mudarEstilo = function () {
                    this.azul = !this.azul;
                };
                AppComponent.prototype.alterarCadastro = function () {
                    this.cadastrar = !this.cadastrar;
                    this.remover = !this.remover;
                };
                AppComponent.prototype.alternarValor = function () {
                    this.exibir = !this.exibir;
                };
                AppComponent.prototype.incrementar = function () {
                    this.contador++;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'meu-app',
                        templateUrl: 'app/views/app.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app-component.js.map