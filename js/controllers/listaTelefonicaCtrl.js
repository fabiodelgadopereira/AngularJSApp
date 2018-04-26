angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatosAPI, operadorasAPI) {
            $scope.app = "Lista Telefonica";
            $scope.contatos = [];
            $scope.operadoras = [];

            var carregarContatos = function () {
                $http({
                    method: 'GET',
                    url: 'http://localhost:3412/contatos'
                }).then(function (response) {
                    $scope.contatos = response.data;
                }, function (error) {
                    $scope.message = "Aconteceu um problema: " + data;
                });
            };

            var carregarOperadoras = function () {
                $http({
                    method: 'GET',
                    url: 'http://localhost:3412/operadoras'
                }).then(function (response) {
                    $scope.operadoras = response.data;
                }, function (error) {

                });
            };

            $scope.adicionarContato = function (contato) {
                contato.data = new Date();
                $http.post("http://localhost:3412/contatos", contato).then(function (response) {
                    delete $scope.contato;
                    $scope.contatoForm.$setPristine();
                    carregarContatos();
                });
            };

            $scope.apagarContatos = function (contatos) {
                $scope.contatos = contatos.filter(function (contato) {
                    if (!contato.selecionado) return contato;
                });
            };
            $scope.isContatoSelecionado = function (contatos) {
                return contatos.some(function (contato) {
                    return contato.selecionado;
                });
            };
            $scope.ordernarPor = function (campo) {
                $scope.criterioDeOrdenacao = campo;
                $scope.direcaoDaOrdencao = !$scope.direcaoDaOrdencao;
            };
            carregarContatos();
            carregarOperadoras();
        });