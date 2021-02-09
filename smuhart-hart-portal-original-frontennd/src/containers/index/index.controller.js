class IndexController {
  constructor($scope, StudentService) {
    'ngInject';

    $scope.init = function () {

      StudentService.checkAdmin().then(isadmin => {
        if (isadmin)
          $scope.isitadmin = 1;
        else
          $scope.isitadmin = 0;
      });
    }
  }
}
