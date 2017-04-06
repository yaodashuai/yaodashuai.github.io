(function (angular) {
    // "use strict";

    // start your ride
    var app = angular.module('main', [
      'home',
      'details', // 路由规则，先引用，先匹配
      'movie_list',
      'auto-active'
      ])
})(angular);

//global.console.log('123');
//
//console.log(process.argv);
//
//console.log(__dirname)
//
//console.log(__filename)
//arr = [1, 5, 65, 76, 4, 3, 3]
//for (var i = 0; i < arr.length; i++) {
//
//    for (var j = 0; j < arr.length; j++) {
//        if (arr[j] < arr[j + 1]) {
//            var tmp = arr[j];
//            arr[j] = arr[j + 1];
//            arr[j + 1] = tmp;
//        }
//    }
//}
//console.log(arr)