(function() {
  "use strict";

  /**
   * @ngdoc directive
   * @name app.widgets:materialSettingsButton
   * @module widgets
   * @restrict E
   *
   * @description Transform bootstrap buttons to material buttons
   * @example <material-button></material-button>
   */
   angular
      .module("app.widgets")
      .directive("materialSettingsButton", materialSettingsButtonDefinition);

   function materialSettingsButtonDefinition() {
      var directive = {
          templateUrl: "app/widgets/materialSettingsButton.directive.html",
          restrict: "E"
      };

      return directive;
   }

}());
