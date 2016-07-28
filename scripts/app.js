var app = angular.module("Pokemon", ["ui.bootstrap"]).controller("MainCtrl", ["$scope", "$http", function($scope, $http) {

    $scope.pokemonList = [{
        id: 0,
        name: "",
        sprite: "",
        moves: {
            quick: "",
            special: ""
        }
    }];

    $http.get("https://pokeapi.co/api/v1/sprite?limit=152").then(function(res) {
        var data = res.data.objects;
        for (var i = 0; i < data.length-1; i++) {
            var pokemon = data[i+1];
            $scope.pokemonList[i] = {
                id: pokemon.id,
                name: pokemon.name.split("_")[0],
                sprite: "https://pokeapi.co/" + pokemon.image
            }
        }
    });





}]);
