/// <reference path="app.routes.ts" />
/// <reference path="app.translate.ts" />
((): void=> {
    var app = angular.module("angularWithTS", ['ngRoute','pascalprecht.translate']);
    app.config(angularWithTS.Routes.configureRoutes);
    app.config(angularWithTS.Translate.configureTranslate);
})() 