/// <reference path="../models/Book.ts" />
/// <reference path="../interfaces/IBook.ts" />
/// <reference path="../../typings/angularjs/angular.d.ts" />
module angularWithTS.interfaces {
	export interface IBookService {
		get (): ng.IPromise<angularWithTS.interfaces.IBook>;
		put(books: angularWithTS.models.Book[]);
	}
}