// AngularJS Application
var app = angular.module('registrationApp', []);

app.controller('FormController', ['$scope', '$http', function ($scope, $http) {
    $scope.formData = {};

    $scope.submitForm = function () {
        const backendUrl = 'http://localhost:3000/register';

        $http.post(backendUrl, $scope.formData)
            .then(function (response) {
                alert('Information successfully sent!');
                $scope.formData = {}; // Reset the form
            })
            .catch(function (error) {
                alert('Error submitting form. Please try again.');
                console.error(error);
            });
    };
}]);
