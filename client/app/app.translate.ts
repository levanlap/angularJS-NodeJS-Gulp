/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-route.d.ts" />
/// <reference path="../typings/angular-translate/angular-translate.d.ts" />
module angularWithTS {
  export class Translate {
    static $inject = ["$translateProvider"];

    static configureTranslate($translateProvider: angular.translate.ITranslateProvider) {         		
      var readFileProperties = function (lines) {
                var result:any=[];
                for (var i = 1; i < lines.length; i++) {
                    var trim = lines[i].replace(lines[i].split(':')[0] + ":", "").trim();
                    var temp = trim.slice(1, trim.length - 1);
                    result[lines[i].split(':')[0]] = temp;
                }
                return result;
            };
      $translateProvider.useStaticFilesLoader({
        prefix: 'build/l10n/',
        suffix: '.properties',
        $http: {
          transformResponse: function(data, headersGetter, status) {
            return readFileProperties(data.split('\n'));
          }
        }
      });
      $translateProvider.preferredLanguage('en');
      $translateProvider.useSanitizeValueStrategy('escaped');
    }
  }
}