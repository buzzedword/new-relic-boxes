(function() {
    "use strict";

    /**
     * @ngdoc directive
     * @name  app.widgets:materialFilterButtons
     * @module  widgets
     * @restrict E
     *
     * @description Parent control for a collection of buttons designed to filter new relic
     * status boxes
     * @example <material-filter-buttons></material-filter-buttons>
     */
    angular
        .module("app.widgets")
        .directive("materialFilterButtons", materialFilterButtonsDirective);

    function materialFilterButtonsDirective() {
        var directive = {
            templateUrl: "app/widgets/materialFilterButtons.directive.html",
            restrict: "E"
        };

        return directive;
    }

}());
