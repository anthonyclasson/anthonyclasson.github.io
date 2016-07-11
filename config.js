(function() {
  "use strict";
  angular
    .module("webpage")
    .config(function($routeProvider){
            $routeProvider
                .when("/home", {
                    templateUrl: "pages/home.html"
                })
                .when("/coursework", {
                    templateUrl: "pages/coursework.html"
                })
                .when("/resume", {
                    templateUrl: "pages/resume.html"
                })
                .otherwise({
                    redirectTo: "/home"
                });
        });
})();