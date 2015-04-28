var freelancer = angular.module("freelancer", ["ui.router"]);


// home route
freelancer.config(function($stateProvider) {
    $stateProvider.state("home", {
        url:"",
        templateUrl: "partials/home.html"
    });
});


// freelancer.directive('buttonhover', function() {
//     return function (scope, element) {
//         element.bind("mouseenter", function() {
//             element.removeClass("btn-conor");
//             element.addClass("btn-jill");
//         });
//     };
// });
//
// freelancer.directive('buttonleave', function() {
//     return function (scope, element) {
//         element.bind("mouseleave", function() {
//             element.removeClass("btn-jill");
//             element.addClass("btn-conor");
//         });
//     };
// });
//

//showpage directive
freelancer.directive('showpage', function() {
    return function (scope, element, attrs) {
        element.bind("click", function() {
            $("." + attrs.showpage).removeClass("hidden");
            $("." + attrs.hidepage).addClass("hidden");
        });
    };
});
