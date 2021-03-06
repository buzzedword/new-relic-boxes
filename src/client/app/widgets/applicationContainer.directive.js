(function() {
    "use strict";

    /**
     * @ngdoc directive
     * @name  app.widgets:applicationContainer
     * @module  widgets
     * @restrict E
     *
     * @description Parent control for a collection of boxes designed to display application status
     * @example <application-container></application-container>
     */
    angular
        .module("app.widgets")
        .directive("applicationContainer", applicationContainerDirective);

    function applicationContainerDirective() {
        var directive = {
            templateUrl: "app/widgets/applicationContainer.directive.html",
            restrict: "E"
        };

        return directive;
    }

}());