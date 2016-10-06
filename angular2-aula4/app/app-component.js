System.register(['angular2/core', './cep-pipe'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, cep_pipe_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cep_pipe_1_1) {
                cep_pipe_1 = cep_pipe_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.valor = 1046.99;
                    this.cep = '09540934';
                    this.dataAtual = new Date();
                    this.formato = true;
                }
                Object.defineProperty(AppComponent.prototype, "formatar", {
                    get: function () {
                        return this.formato ? 'dd/MM/yyyy HH:mm:ss' : 'dd/MM/yy';
                    },
                    enumerable: true,
                    configurable: true
                });
                AppComponent.prototype.mudarFormato = function () {
                    this.formato = !this.formato;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'meu-app',
                        template: "\n  \t<h1>Angular 2 - Aula 4</h1>\n  \t<p>Valor: {{valor | currency:'BRL':true}}</p>\n\t\t<p>CEP: {{cep | cep}}</p>\n\t\t<p>Data Atual: {{dataAtual | date:'dd/MM/yyyy'}}</p>\n\t\t<p>Data Atual 2: {{dataAtual | date:formatar}}</p>\n\t\t<button (click)=\"mudarFormato()\">Mudar Formato</button>\n  ",
                        pipes: [cep_pipe_1.CepPipe]
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