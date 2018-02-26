//AngularJS controllers manage AngularJS applications. Controllers always belong to a module.
alb.controller('AlbController', ['$scope', function ($scope) { //Controller refer to the ng-controller directive in HTML.
    $scope.title = 'Spain, Albaraccin'; //Refer to expression {{title}} to the directive in HTML
    $scope.product = { //It's object which assignment with sing '='. It's refer to the expression {{product.price | currency}} in HTML
        price: 1000  //It's value bind with filter currency.
    }
}]);