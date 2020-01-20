"use strict";

angular.module('conext_gateway.xbgateway').directive("metersOverview", ["imageClickService", "deviceStateSevice",
  function(imageClickService, deviceStateSevice) {
    return {
      restrict: "E",
      replace: true,
      templateUrl: "app/xbgateway/Directives/meters.html",
      scope: {
        device: "=",
      },
      link: function(scope, element, attrs) {
        scope.deviceClick = function(device) {
          imageClickService.imageClicked(device);
        };

        scope.$watch(['device.isActive', 'device.isUpgrading', 'device.attributes.isBootloader', 'device.attributes.opMode'], function() {
          scope.state = deviceStateSevice.getState(scope.device);
        });
      }
    };
  }
]);
