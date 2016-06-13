/**
 * Created by ketaki.zunjarrao on 27/5/16.
 */


angular.module('ngToggle', [])
    .controller('AppCtrl', ['$scope', function ($scope) {
        $scope.custom = true;
        $scope.toggleCustom = function () {
            $scope.custom = !$scope.custom;// === false ? true : false;
        };
        $scope.save = function () {
            console.log("saced");
        };
    }]);

app = angular.module('ui.bootstrap.demo', ['ui.bootstrap']);

app.controller(
    'myPopoverCtrl', ['$scope',
        function($scope) {

            // query popover
            $scope.myPopover = {

                isOpen: false,

                templateUrl: 'myPopoverTemplate.html',

                open: function open() {
                    $scope.myPopover.isOpen = true;
                    $scope.myPopover.data = 'Hello!';
                },

                close: function close() {
                    $scope.myPopover.isOpen = false;
                    console.log("Closed..")
                },
                save: function save(){
                    $scope.myPopover.isOpen = false;
                    console.log("Data Saved")
                }
            };

        }

    ]);