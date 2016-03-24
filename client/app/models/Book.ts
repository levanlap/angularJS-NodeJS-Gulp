module angularWithTS.models {
    'use strict';

    export class Book {
        constructor(
            public id: number,
            public bookName: string,
            public authorName: boolean,
            public price: number
            ) { }
    }

}