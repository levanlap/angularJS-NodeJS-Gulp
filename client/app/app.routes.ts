/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-route.d.ts" />
module angularWithTS {
    export class Routes {
        static $inject = ["$routeProvider"];
        static configureRoutes($routeProvider: ng.route.IRouteProvider) {
            $routeProvider.when("/home",
            {
                controller: "angularWithTS.controllers.bookController",
                templateUrl: "build/views/books.html",
                controllerAs: "bookCtr"
            });
            $routeProvider.when("/editBook/:id",
            {
                controller: "angularWithTS.controllers.bookController",
                templateUrl: "build/views/editBook.html",
                controllerAs: "bookCtr"
            });
            $routeProvider.otherwise({ redirectTo: "/home" });
        }
    }
}