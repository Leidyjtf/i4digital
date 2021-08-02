angular.module('PruebaTecnica')
.controller("HomeController", function($scope, $http){
})
.controller("AlbunesController", function($scope, $http){
    $scope.response =[];
    $scope.albunes= [];

    $http.get("https://jsonplaceholder.typicode.com/albums")
    .then(function(response){
        var array = [];
        var count = 0;   
        response.data.forEach(e => {
            if(count == 3){
                $scope.albunes.push(array);
                array = []
                count = 0;
                return;
            }
            array.push(e);
            count++;
        })
    })

   
})
.controller("albunController",function($scope, $http, $routeParams){
    $scope.response =[];
    $scope.imagenes = [];

    $http.get("https://jsonplaceholder.typicode.com/photos")
    .then(function(response){
        $scope.response = response.data;
        $scope.imagenes = $scope.response.filter(e => e.albumId == $routeParams.id);
        console.log($scope.imagenes);
    })
})
.controller("PublicacionesController", function($scope,$http, localStorageService){
    $scope.datos = [];
    $scope.newDat= {};

    if (localStorageService.get("angular-puclicacionespt")) {
        $scope.datos = localStorageService.get("angular-puclicacionespt");
    }

    $scope.$watch(function(){
        return $scope.newDat;
    }, function(newValue, oldValue){
        console.log(newValue);
        console.log(oldValue);
    })
    
    $scope.addDat = function(){
        $scope.datos.push($scope.newDat);
        $scope.newDat = {};

        // Actualizar los datos
        localStorageService.set("angular-puclicacionespt", $scope.datos);
    }

})
.controller("UsuariosController", function($scope,$http){
    $scope.response =[];
    $scope.usuarios =[];

    $http.get("https://jsonplaceholder.typicode.com/users")
    .then(function(response){
        $scope.response = response.data;
        $scope.usuarios = $scope.response;
        console.log($scope.response);
    })

    $scope.filtro = "";
    $scope.propiedad = "";
    $scope.Buscar = function(){
        if ($scope.filtro == "") {
            $scope.usuarios = $scope.response;
        }else{
            var result = $scope.response.filter(e => e[$scope.propiedad].toLowerCase().includes($scope.filtro));
            $scope.usuarios = result;
        }
    }
})

 