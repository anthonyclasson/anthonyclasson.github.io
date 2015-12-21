(function() {
  "use strict";
  angular
    .module("webpage")
    .config(function($routeProvider){
            $routeProvider
                .when("/home", {
                    templateUrl: "views/home/home.view.html"
                })
                .when("/coursework", {
                    templateUrl: "pages/coursework.html",
                })
                .when("/about", {
                    templateUrl: "pages/about.html",
                })
                .when("/resume", {
                    templateUrl: "pages/resume.html",
                })
                .otherwise({
                    redirectTo: "/home"
                });
        });
})();