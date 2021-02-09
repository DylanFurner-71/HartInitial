export function AssessmentController($scope, $http, user, toastr, StudentService) {
  'ngInject';
  $scope.status = 0;

  $scope.init = function () {
    $scope.error = false;
    StudentService.getStudentInfo().then(data => {
      $scope.profileInfo = data;
      $scope.competency = $scope.profileInfo.competency1;
      $scope.dataforthankyoupage = {
        batch: data.batch,
        studentgroup: data.studentgroup,
        study: data.study,
      }
      user.sendData($scope.dataforthankyoupage);
      $scope.getbackgroundcolor();
    }, function (response) {
      if (response.status == 403)
        $scope.error = true;
      //$location.path('/unauthorized');
    });
    $scope.getProfilePic();

    $http.post('/hclssurvey1/getstudentactionplan.json', null, null).then(function (response) {
      if (response.data != null) {
        $scope.actionplanduedate = new Date(response.data.planstartdate).getTime() + 30 * 24 * 3600000;

      }
    }, null);
    var reqObj = {
      "smuId": null
    };
    $http.post('/hclssurvey1/getsurveyresult.json', reqObj, null).then(function (response) {
      /*    if (response.data != null && response.data.surveyResp != null) {*/
      $scope.surveyRespObj = response.data;
      if ($scope.surveyRespObj != "") {
        $scope.hasgivensurvey = 1;
        $scope.populateLdrCmpObj();
        $scope.populateBgElements();
      } else
        $scope.hasgivensurvey = 0;
    }, null);
  }
  //competency graph
  $scope.getbackgroundcolor = function () {
    if ($scope.competency == "Self Awareness")
      $scope.SA_backcolor = "#FF8C00"; else if ($scope.competency == "Intentional Learning")
      $scope.IL_backcolor = "#FF8C00"; else if ($scope.competency == "Communication")
      $scope.C_backcolor = "#FF8C00"; else if ($scope.competency == "Develops Relationships")
      $scope.DR_backcolor = "#FF8C00"; else if ($scope.competency == "Diversity & Difference")
      $scope.DD_backcolor = "#FF8C00"; else if ($scope.competency == "Engaging Leadership")
      $scope.EL_backcolor = "#FF8C00"; else if ($scope.competency == "Directive Leadership")
      $scope.DL_backcolor = "#FF8C00"; else if ($scope.competency == "Champions Effective Processes")
      $scope.CEP_backcolor = "#FF8C00"; else if ($scope.competency == "Problem Solving")
      $scope.PS_backcolor = "#FF8C00"; else if ($scope.competency == "Strategic Perspective")
      $scope.SP_backcolor = "#FF8C00"; else if ($scope.competency == "Ethics & Integrity")
      $scope.EI_backcolor = "#FF8C00"; else if ($scope.competency == "Innovative Spirit")
      $scope.IS_backcolor = "#FF8C00";

  }
  $scope.focusAreas = ["Self Awareness", "Intentional Learner", "Communication", "Relationship Development", "Diversity and Difference", "Engaging Leadership", "Directive Leadership", "Champions Effective Processes", "Problem Solving", "Strategic Perspective", "Ethics and Integrity", "Innovative Spirit"];
  $scope.createRespObj = function (respStr) {
    var respStrArr = respStr.split(",");

    $scope.initializeRespObj();
    var respObj = $scope.responseObj;
    for (i = 0; i < 55; i++) {
      for (j = 0; j < 3; j++) {
        var index = (i * 3) + j;
        respObj[i][j] = respStrArr[index];
      }
    }

    $scope.responseObj = respObj;
  }

  $scope.initializeRespObj = function () {
    $scope.responseObj = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];
  }



  $scope.ldrCmpObj = [];
  $scope.populateLdrCmpObj = function () {
    var responseObj = $scope.surveyRespObj.surveyResp.split(",");
    //$scope.ldrCmpObj = responseObj;
    for (i = 0; i < 2; i++) {
      $scope.ldrCmpObj[i] = [];
      for (k = 0; k < 3; k++) {
        j = i * 15 + k;
        $scope.ldrCmpObj[i][k] = parseInt(responseObj[j]) + parseInt(responseObj[j + 3]) + parseInt(responseObj[j + 6]) + parseInt(responseObj[j + 9]) + parseInt(responseObj[j + 12]);
      }
    }
    $scope.ldrCmpObj[2] = [];
    for (k = 0; k < 3; k++) {
      $scope.ldrCmpObj[2][k] = parseInt(responseObj[4 * 3 + k]) + parseInt(responseObj[9 * 3 + k]) + parseInt(responseObj[14 * 3 + k]) + parseInt(responseObj[24 * 3 + k]) + parseInt(responseObj[29 * 3 + k]);
    }
    for (i = 3; i < 12; i++) {
      $scope.ldrCmpObj[i] = [];
      for (k = 0; k < 3; k++) {
        j = (i - 1) * 15 + k;
        $scope.ldrCmpObj[i][k] = parseInt(responseObj[j]) + parseInt(responseObj[j + 3]) + parseInt(responseObj[j + 6]) + parseInt(responseObj[j + 9]) + parseInt(responseObj[j + 12]);
      }
    }
    console.log("populateLdrCmpObj --> " + $scope.ldrCmpObj);
  }

  $scope.bgElements = [];
  $scope.populateBgElements = function () {
    console.log("populateBgElements --> " + $scope.ldrCmpObj);
    var lwidth = [];
    var lBgElements = [];

    for (i = 0; i < 12; i++) {
      lwidth[i] = {
        "index": i,
        "value": parseInt($scope.ldrCmpObj[i][2])
      };
    }

    lwidth = lwidth.sort(function (x, y) {
      return parseInt(y.value) - parseInt(x.value)
    });

    console.log("lwidth:");
    console.log(lwidth);

    for (k = 0; k < 12; k++) {
      var bgElement = {
        "y": 0,
        "width": 0,
        "color": "",
        "text": ""
      };
      bgElement.y = 77 + 43 * k;
      bgElement.width = (parseInt(lwidth[k].value) - 5) * 700 / 15;
      var lIndex = lwidth[k].index;
      if (k == 10 || k == 11)
        bgElement.color = "#4F81BD"; else if (k == 0 || k == 1)
        bgElement.color = "#4F81BD";
      else
        bgElement.color = "#4F81BD";
      lBgElements[lIndex] = bgElement;
    }

    for (i = 0; i < lBgElements.length; i++)
      lBgElements[i].text = $scope.focusAreas[i];
    lBgElements.sort(function (a, b) {
      return (parseInt(b.width) - parseInt(a.width));
    });
    $scope.bgElements = lBgElements;
    console.log("bgelements-->");
    console.log($scope.bgElements);
    lBgElements = [];
  }

  $scope.myactionplan = function () {
    $location.path('/MyActionplan');
  }
  $scope.getSurveyResult = function (smuId) {
    $rootScope.surveyResponses = [{
      "smuId": smuId,
    }];
    $location.path('/results');
  }

  $scope.RedirectInfo = function () {
    user.sendData(1);
    $location.path('/info');
  }

  // New
  $scope.redirectCompetencies = function (smuId) {
    $rootScope.surveyResponses = [{
      "smuId": smuId,
    }];
    $location.path('/competencies');
  }

  //Img Upload Start
  $scope.myImage = '';
  $scope.myCroppedImage = '';

  var handleFileSelect = function (evt) {
    var file = evt.currentTarget.files[0];
    var reader = new FileReader();
    reader.onload = function (evt) {
      $scope.$apply(function ($scope) {
        $scope.myImage = evt.target.result;
      });
    };
    reader.readAsDataURL(file);
  };
  angular.element(document.querySelector('#fileInput')).on('change', handleFileSelect);
  //Img Upload End

  $scope.getProfilePic = function () {
    $http.get("/hclssurvey1/getprofilepic.dat").then(function (response) {
      if (response.data != null) {
        $scope.profilepic = response.data;
      }
    }, null);
  }

  $scope.updateProfilePic = function () {
    $scope.status = 1;
    var fd = new FormData();
    fd.append("file", $scope.myCroppedImage);
    $http.post("/hclssurvey1/updateprofilepic.json", fd, {
      headers: {
        'Content-Type': undefined
      },
    }).then(function (response) {
      if (response.data.status == 0) {
        $scope.status = 2;
        $scope.profilepic = $scope.myCroppedImage;
      } else if (response.data.status == 1) {
        $scope.errorMessage = response.data.error;
        $scope.status = 3;
      }
    }, null);

  };


}
