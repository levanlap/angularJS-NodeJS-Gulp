/// <reference path="../interfaces/IBookService.ts" />
/// <reference path="../interfaces/IBook.ts" />
module angularWithTS.services {
    'use strict';

    /**
     * Services that persists and retrieves TODOs from localStorage.
     */
    export class BookService implements angularWithTS.interfaces.IBookService {

        public static $inject = [
            '$http',
            '$q'
        ];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
        }

        STORAGE_ID = 'books-angularjs-typescript';

        get(): ng.IPromise<angularWithTS.interfaces.IBook> {
            var deferred = this.$q.defer();
            this.$http({ method: 'GET', url: 'http://localhost:8081/book' })
                .success(function(data) { var list = data; deferred.resolve(list); })
                .error(function(d) { console.log("nope"); });
            return deferred.promise;
        }

        put(books: angularWithTS.models.Book[]) {
            localStorage.setItem(this.STORAGE_ID, JSON.stringify(books));
        }
             
    }
     angular.module("angularWithTS").service("angularWithTS.services.BookService", BookService);
}