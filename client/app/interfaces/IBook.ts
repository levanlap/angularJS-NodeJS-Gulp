/// <reference path="../models/Book.ts" />
module angularWithTS.interfaces {
	export interface IBook extends ng.IScope {
		books: angularWithTS.models.Book[];
		editbook: angularWithTS.models.Book;
	}
}