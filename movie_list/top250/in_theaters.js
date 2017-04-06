(function (angular) {
    var app = angular.module('in_theaters', ['ngRoute', 'MyJsonpService']);

    app.config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/in_theaters/:page?', {
            templateUrl: './in_theaters/in_theaters.html',
            controller: 'in_theatersController'
        })
    }])
    app.controller('in_theatersController', [
        '$scope',
        '$http',
        '$route',
        '$routeParams',
        'MyService',
        function ($scope, $http, $route, $routeParams, MyService) {
            //每页设置5条
            $scope.pageSize = 5;
            //页码
            $scope.page = ($routeParams.page || '1') - 0//短路操作，当$routeParams.page没有值时设置$routeParams.page为'1';
            //0 1 2 3 4
            //5 6 7 8 9
            //10 11 12 13 14
            $scope.start = ($scope.page - 1) * $scope.pageSize

            MyService.jsonp('http://api.douban.com/v2/movie/in_theaters', {
                start: $scope.start,
                count: $scope.pageSize
            }, function (data) {
                $scope.data = data;
                $scope.allPage = Math.ceil($scope.data.total/$scope.pageSize)
                console.log(data);

                $scope.$apply();
            })


            $scope.getPage = function (nowPage) {
                if(nowPage<=0||nowPage>$scope.allPage){
                    return
                }

                $route.updateParams({page:nowPage})
            }
        }])

})(angular)





