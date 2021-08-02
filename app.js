angular.module('PruebaTecnica', ['ngRoute','LocalStorageModule'])
.config(['$routeProvider',
    function config($routeProvider){
    $routeProvider
    .when("/",{ 
        templateUrl: "view/Home.html"
    })
    .when("/Usuarios",{
        templateUrl: "view/Usuarios.html"
    })
    .when("/Albunes",{
        templateUrl: "view/Albunes.html"
    })
    .when("/Albun/:id",{
        templateUrl: "view/Albun.html"
    })
    .when("/Publicaciones",{
        templateUrl: "view/Pulicaciones.html"
    })
    .otherwise("/");
}]);