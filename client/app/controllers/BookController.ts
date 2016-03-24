/// <reference path="../services/BookService.ts" />
/// <reference path="../models/Book.ts" />
/// <reference path="../interfaces/IBook.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../typings/angular-translate/angular-translate.d.ts" />
module angularWithTS.controllers {
	'use strict';
	export class BookController {

		private books: angularWithTS.models.Book[];

		public static $inject = [
			'$scope',
			'$location',
			'angularWithTS.services.BookService',
			'$routeParams',
			'$translate'
		];

		constructor(
			private $scope: angularWithTS.interfaces.IBook,
			private $location: ng.ILocationService,
			private bookService: angularWithTS.interfaces.IBookService,
			private $routeParams: angular.route.IRouteParamsService,
			private $translate: angular.translate.ITranslateService
			) {
			this.bookService.get().then((response: angularWithTS.interfaces.IBook) => {
				this.books = this.$scope.books = response.books;
				this.initEditData($routeParams["id"]);
			});
		}

		initEditData(id: number) {
			if (id) {
				this.$scope.editbook = this.books[id];
			}
		}
		
		changeLanguage(key:string) {
	    	this.$translate.use(key);
  		};
	}
	angular.module("angularWithTS").controller("angularWithTS.controllers.bookController", BookController);
}