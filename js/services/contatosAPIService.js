angular.module("listaTelefonica").factory("contatosAPI", function ($http) {

	var _getContatos = function () {

		return $http.get("http://localhost:3412/contatos");

	};



	var _saveContato = function (contato) {

		return $http.post("http://localhost:3412/contatos", contato);

	};

	return {
		getContatos: _getContatos,
		saveContato: _saveContato
    };

});