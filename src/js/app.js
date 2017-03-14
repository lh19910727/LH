angular.module('routingDemoApp',['ngRoute','controllers','services','filters','directives'])
.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/index',{
    	templateUrl: './src/templates/indexPage.html',
	    controller: 'indexPageCtr'
    })
    .when('/zpdemo',{
    	templateUrl: './src/templates/fenLei.html',
	    controller: 'fenLeiCtr'
    })
    /*.when('/printers',{
    	templateUrl: './src/templates/printer.html',
	    controller: 'printerCtr'
    }).when('/form',{
    	templateUrl: './src/templates/formData.html',
	    controller: 'formCtr'
    })*/
    .otherwise({redirectTo:'/index'});
}]);

            
           