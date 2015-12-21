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
                .when("/about", {
                    templateUrl: "pages/about.html"
                })
                .when("/resume", {
                    templateUrl: "pages/resume.html"
                })
                .when("/contact", {
                    templateUrl: "pages/contact.html"
                })
                .otherwise({
                    redirectTo: "/home"
                });
        });
})();