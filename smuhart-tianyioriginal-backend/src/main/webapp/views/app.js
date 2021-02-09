var surveyApp = angular.module("surveyApp", [ 'ngRoute', 'ngMaterial', 'ngMessages', 'toastr' ])


.controller("ProfileController", function($scope, $location, $rootScope, $http, user, toastr) {

	$scope.init = function() {
		$scope.error=false;
		$http.post('/hclssurvey1/getstudentinfo.json', {
			"smuId" : null
		}, null).then(function(response) {
			$scope.profileInfo = response.data;
			
			}, function(response) {
			if (response.status == 403)
				$scope.error=true;
				}
			);
	}
		$scope.leadership = function() {
			$location.path('/leadership');
		}
		
	})


.controller("AssessmentController", function($scope, $location, $rootScope, $http, user, toastr) {

	$scope.init = function() {
		$scope.error=false;
		$http.post('/hclssurvey1/getstudentinfo.json', {
			"smuId" : null
		}, null).then(function(response) {
			$scope.profileInfo = response.data;
			$scope.dataforthankyoupage={
					batch:response.data.batch,
					studentgroup:response.data.studentgroup,
					study:response.data.study
			}
			user.sendData($scope.dataforthankyoupage);
			}, function(response) {
			if (response.status == 403)
				$scope.error=true;
				//$location.path('/unauthorized');
			}
			);
	}
	$scope.myactionplan = function() {
		$location.path('/MyActionplan');
	}
	$scope.getSurveyResult = function(smuId) {
		$rootScope.surveyResponses = [ {
			"smuId" : smuId,
		} ];
		$location.path('/results');
	}

	$scope.RedirectInfo = function() {
		user.sendData(1);
		$location.path('/info');
	}

// New
	$scope.redirectCompetencies = function(smuId) {
		$rootScope.surveyResponses = [ {
			"smuId" : smuId,
		} ];
		$location.path('/competencies');
	}
})

.controller("MyActionplanController", function($scope, $location, $rootScope, $http) {
	$scope.init = function() {
		$scope.tabIdx = 0;
		$scope.lDirty = 0;
		$http.post('/hclssurvey1/getstudentactionplan.json', null, null).then(function(response) {
			if (response.data != null) {
				$scope.planstartdate=new Date(response.data.planstartdate);
				$scope.planresponse1=response.data.planresponse1;
				$scope.planresponse2=response.data.planresponse2;
				$scope.planresponse3=response.data.planresponse3;
				$scope.planresponse4=response.data.planresponse4;
				$scope.progressresponse=response.data.progressresponse;
			}
		}, null);
	}
	
	$scope.saveMyActionPlan = function () {
		$scope.saveRespStatus = 1;
		$scope.lDirty = 0;
		reqObj = {
			"planstartdate" : $scope.planstartdate,
			"planresponse1" : $scope.planresponse1,
			"planresponse2" : $scope.planresponse2,
			"planresponse3" : $scope.planresponse3,
			"planresponse4" : $scope.planresponse4,
			"progressresponse" : $scope.progressresponse
		};
		$http.post('/hclssurvey1/savestudentactionplan.json', reqObj, null).then(function(response) {
			if (response.data != null && response.data.status != null) {
				$scope.saveRespStatus = response.data.status;
			}
		}, null);
	}
})

.controller(
		"mainAppCtrl",
		function($scope, $location, $rootScope, $http, $timeout, user, toastr) {
			window.scrollTo(0, 0);
			$scope.startNum = 0;
			$scope.endNum = 4;
			$scope.disableSubmit = false;
			$scope.widthOnSubmit = 0;
			// $scope.responseObj = new Array();
			// Test purpose hardcode

			// $scope.userInfo =
			// {"goodLeaderName":"somename1","poorLeaderName":"somename2"};

			$scope.userInfo = user.getData();
			$scope.initializeRespObj = function() {
				$scope.responseObj = [ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ];
			}

			$scope.createRespObj = function(respStr) {
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
			$scope.init = function() {
				toastr.info('Start survey', 'Information');
				var reqObj = {
					"smuId" : null
				};
				$http.post('/hclssurvey1/getsurveyresult.json', reqObj, null).then(function(response) {
					if (response.data != null && response.data.surveyResp != null) {
						$scope.createRespObj(response.data.surveyResp);
						var surveyRespObj = {
							"goodLeader" : $scope.userInfo.goodLeaderName,
							"poorLeader" : $scope.userInfo.poorLeaderName,
							"surveyResp" : $scope.responseObj
						}
					} else
						$scope.initializeRespObj();
				}, null);
			}

			$scope.back = function() {
				if($scope.startNum===0) {
					user.sendData(3);
					$location.path('/info');
					window.scrollTo(0, 0);
				}
				else{
					$scope.startNum = $scope.startNum-5;
					$scope.endNum = $scope.endNum-5;
					window.scrollTo(0, 0);
				}
			}

			$scope.next = function() {
				var i;
				for (i = $scope.startNum; i <= $scope.endNum; i++) {

					if ($scope.responseObj[i][0] == 0 || $scope.responseObj[i][1] == 0 || $scope.responseObj[i][2] == 0) {
						toastr.error('All questions are mandatory', 'Error!');
						return;
					}
				}
				$scope.startNum = $scope.startNum + 5;
				$scope.endNum = $scope.endNum + 5;
				window.scrollTo(0, 0);
			}

			$scope.submit = function() {
				$scope.disableSubmit = true;
				var i;
				for (i = $scope.startNum; i <= $scope.endNum; i++) {

					if ($scope.responseObj[i][0] == 0 || $scope.responseObj[i][1] == 0 || $scope.responseObj[i][2] == 0) {
						toastr.error('All questions are mandatory', 'Error!');
						$scope.disableSubmit = false;
						return;
					}
				}
				$scope.widthOnSubmit = 10;

				$scope.finalObj = {
					info : $scope.userInfo,
					quizQues : $scope.questions,
					respObj : $scope.responseObj
				};
				$scope.finalObj.info.surveydate = new Date();
				user.sendData($scope.finalObj);

				$scope.responseObj = $scope.responseObj.toString();
				var surveyRespObj = {
					"goodLeader" : $scope.userInfo.goodLeaderName,
					"poorLeader" : $scope.userInfo.poorLeaderName,
					"surveyResp" : $scope.responseObj,

				}
				$http.post('/hclssurvey1/savesurveyresult.json', surveyRespObj, null).then(null, null);
				$http.post('/hclssurvey1/getstudentinfo.json', {
					"smuId" : null
				}, null).then(function(response) {
					$scope.information = response.data;
					$scope.information.surveyStatus = 3;
					$http.post('/hclssurvey1/savestudentinfo.json', $scope.information, null).then(null, null);
				}, null);
				$rootScope.surveyResponses = [ surveyRespObj ];

				$timeout(function() {
					$location.path('/thankyou');
				}, 1000);
			}

			$scope.dynSave_survey = function() {
				var surveyRespObj = {
					"surveyResp" : $scope.responseObj.toString()
				}
				$http.post('/hclssurvey1/savesurveyresult.json', surveyRespObj, null).then(null, null);
			}

			$scope.options = [ '1', '2', '3', '4' ];

			$scope.sections = [ 'Good Leader', 'Poor Leader', 'Me as a Leader' ];

			$scope.questions = [ "Candid Self-Appraisal: Aware of personal strengths and shortcomings", "Self Management: Avoids spreading self too thin", "Self Disciplined: Stays on task even under difficult circumstances", "Optimistic: Believes most problems can be solved", "Open to Feedback: Willing to receive constructive feedback", "Improves Performance: Improves performance over time", "Willing to Stretch: Addresses challenges outside of personal comfort zone", "Reflective Learner: Reflects on and learns from experiences", "Grows from Adversity: Learns from mistakes or adversity", "Seeks Feedback: Asks for honest feedback on his or her performance", "Inclusive: Welcomes and includes all kinds of people", "Empathetic: Puts self in others' shoes; deeply considers others' point-of-view", "Mends Fences: Can bring people back together after disagreements", "Seeks Common Ground: Strives to find common ground whenever possible",
					"Transparent: Encourages direct and open discussions about important issues", "Student of People:  Seeks opportunities to learn about different types of people (e.g., races, nationalities, cultures)", "Values Differences: Sees the value in others' unique differences", "Cultural Perspective: When working with people from other backgrounds", "Culturally Versatile: Adapts behavior to fit different cultural expectations", "Multicultural Motivator: Can effectively motivate multicultural groups or teams", "Inspires Commitment:  Gains commitment from others", "Leverages Others' Strengths: Finds ways to utilize others' strengths", "Influences Without Authority: Able to influence others without requiring a formal leadership position", "Considerate: Gives as much weight to others' perspectives as to one's own", "Careful Listener: Listens intently to others' ideas, suggestions, and concerns", "Gives Direction:  Clearly communicates goals, deadlines, and expectations",
					"Prioritizes Effectively: Is good  at helping group/team prioritize tasks", "Clarifies Roles: Ensures group or team members understand their roles", "Provides Guidance: Offers guidance or support at the appropriate times", "Gives Candid Feedback: Provides prompt feedback, both positive and negative", "Shares Leadership:  Remains engaged when others are in control", "Shares Responsibility: Willing to share important tasks, not just things he/she doesn't want to do", "Believes in Others: Believes in everyone's ability to make valuable contributions", "Trusting of Others: Is comfortable depending on others over whom he/she has no control", "Maintains Accountability: Holds others accountable in a respectful way", "Defines Problems Effectively:  Gets to the root cause of the issue", "Makes Informed Decisions: Gathers information necessary to make good decisions", "Logical Thinker: Thinks problems through clearly and logically",
					"Uses Judgment: Shows good judgment when making decisions", "Decisive: Makes effective decisions in a timely manner", "Sees Big Picture:  Effectively frames large-scale problems or challenges", "Systemic Awareness: Identifies patterns and cycles that impact performance", "Considers Options:  Recognizes trade-offs; doesn't assume a single best way", "Pragmatic: Can articulate pros and cons when making important decisions", "Recognizes Opportunity: Identifies issues and opportunities for strategic change", "Encourages Honesty:  Words and deeds facilitate an atmosphere of honesty", "Trustworthy: Gains trust from others", "Ethical Decision-maker: Uses ethical considerations to guide decisions", "Responsible: Is accountable for own actions; doesn't blame others", "Principled: Places ethical behavior above personal gain", "Entrepreneurial:  Seizes new opportunities", "Thinks Differently: Forms unique ideas and associations",
					"Inventive: Creates new and different ways to solve problems", "Generative: Consistently generates new ideas", "Maker Instinct: Can access his or her inner drive to make, build, and grow things" ];
		})

.controller("AdminController", function($http, $scope, $location, $rootScope, PagerService,filterFilter) {

	$scope.RedirectAdmin = function() {
		$location.path('/admin');
	}

	$scope.students = [];

	$scope.init = function() {
		/*
		 * console.log ("AdminController.populateSurveys called");
		 * $http.post('/hclssurvey1/getstudents.json', null, null).then(
		 * function (response) { $scope.students = response.data;
		 * console.log($scope.students); } ,function (response) { if
		 * (response.status == 403) $location.path('/unauthorized'); } );
		 */
		$http.post('/hclssurvey1/loadstudentbatch.json', null, null).then(function(response) {
			$scope.batchlist = response.data;
			$scope.batchlist.push("All");
		}, function(response) {
			if (response.status == 403)
				$location.path('/unauthorized');
		});

	}

	$scope.loadstudents = function(batch) {
		$http.post('/hclssurvey1/getstudentsperbatch.json', batch, null).then(function(response) {
			$scope.students = response.data.students;
			$scope.studentgroup = response.data.groups;
			$scope.studentgroup.push("All");
			$scope.setPage(1);
			console.log($scope.students);
		}, null);

	}

	$scope.checkCompletionStatus = function(compstat, smuId) {
		if (compstat < 3)
			return alert('Survey Incomplete or not Started')
		else
			$scope.getSurveyResult(smuId);

	}

	$scope.getSurveyResult = function(smuId) {
		$rootScope.surveyResponses = [ {
			"smuId" : smuId,
		} ];
		$location.path('/results');
	}

	$scope.selectedResults = [];
	$scope.viewSelectedResults = function() {
		for (index in $scope.items) {
			if ($scope.items[index].selected)
			$scope.selectedResults.push({
				"smuId" : $scope.items[index].smuId
			});
		}
		console.log("AdminController.viewSelectedResults");
		console.log($scope.selectedResults);
		$rootScope.surveyResponses = $scope.selectedResults;
		$location.path('/results');
	}
	
	$scope.printSelectedResults = function() {
		for (index in $scope.items) {
			if ($scope.items[index].selected)
			$scope.selectedResults.push({
				"smuId" : $scope.items[index].smuId
			});
		}
		$http.post('/hclssurvey1/setprintflag.json', $scope.selectedResults, null)
		$rootScope.surveyResponses = $scope.selectedResults;
		$location.path('/results');
	}

	$scope.checkAllChecked = false;
	$scope.checkAll = function(items) {
		for (student in items)
			if (items[student].surveyStatus >= 3)
			items[student].selected = $scope.checkAllChecked;
	}
	$scope.clearCheckAll = function () {
		for (student in $scope.students) 
			$scope.students[student].selected = false;
	}
	
	$scope.allowAll=function(items){
		for (student in items)
			if (items[student].surveyStatus >= 3){
				items[student].allowview=$scope.allowViewAllChecked;
				$scope.saveAllowView(items[student]);
			}
		
	}
	/*$scope.selectedResultsList = [];
	$scope.toggleSelection = function(smuId) {
		var index = $scope.selectedResultsList.indexOf(smuId);
		if (index > -1)
			$scope.selectedResultsList.splice(index, 1);
		else
			$scope.selectedResultsList.push(smuId);
	}*/

	$scope.dynSavecomp = function(student) {
		$http.post('/hclssurvey1/savestudentinfo.json', student, null).then(null, null);
	}

	$scope.saveAllowView = function(student) {

		$http.post('/hclssurvey1/savestudentinfo.json', student, null).then(null, null);
	}
	$scope.surveyStatuses = [ "None", "Never Started", "Started/Incomplete", "Completed" ];
	$scope.yearsInSchool = [ "None", "First Year", "Sophomore", "Junior", "Senior", "Graduate Student (First year)", "Graduate Student (Second year)", "Ph.D. Student" ];

	$scope.hartsources = [ "Correspondence I received this summer", "Previous campus visit", "Engineering Recruiting Office", "Hart Center Website", "Through a Friend or Sibling", "I don't know about the Hart Center" ];

	$scope.yearInSchool = [ {
		value : "",
		text : 'All'
	}, {
		value : 1,
		text : 'First Year'
	}, {
		value : 2,
		text : 'Sophomore'
	}, {
		value : 3,
		text : 'Junior'
	}, {
		value : 4,
		text : 'Senior'
	}, {
		value : 5,
		text : 'Graduate Student (First year)'
	}, {
		value : 6,
		text : 'Graduate Student (Second year)'
	}, {
		value : 7,
		text : 'Ph.D. Student'
	} ];

	$scope.compstat = [ {
		value : "",
		text : 'All'
	}, {
		value : 1,
		text : 'Never Started'
	}, {
		value : 2,
		text : 'Started or Incomplete'
	}, {
		value : 3,
		text : 'Completed'
	} ];

	$scope.gender = [ {
		value : "",
		text : 'All'
	}, {
		value : 'M',
		text : 'Male'
	}, {
		value : 'F',
		text : 'Female'
	} ];
	
	$scope.competencyfilter = [ {
		value : null,
		text : 'All'
	}, {
		value : 'Self Awareness',
		text : 'Self Awareness'
	}, {
		value : 'Intentional Learner',
		text : 'Intentional Learner'
	}, {
		value : 'Communication',
		text : 'Communication'
	}, {
		value : 'Relationship Development',
		text : 'Relationship Development'
	}, {
		value : 'Diversity and Difference',
		text : 'Diversity and Difference'
	}, {
		value : 'Engaging Leadership',
		text : 'Engaging Leadership'
	}, {
		value : 'Directive Leadership',
		text : 'Directive Leadership'
	}, {
		value : 'Champions Effective Processes',
		text : 'Champions Effective Processes'
	}, {
		value : 'Problem Solving',
		text : 'Problem Solving'
	}, {
		value : 'Strategic Perspective',
		text : 'Strategic Perspective'
	}, {
		value : 'Ethics and Integrity',
		text : 'Ethics and Integrity'
	}, {
		value : 'Innovative Spirit',
		text : 'Innovative Spirit'
			
	} ];
	
	$scope.printstatus = [{
		value : null,
		text : 'View All Records'
	}, {
		value : false,
		text : 'View Records that are not printed'
	},
	{
		value : true,
		text : 'View Records that are printed'
	}]
	
	$scope.study = [{
		value:"",
		text:'All'
		},
		{
		value:'1',
		text:'Undergraduate'
		},
		{
		value:'2',
		text:'Graduate'
		},
		{
		value:'3',
		text:'Ph.D Students'
		}
		]	
	
	
	$scope.initadminhome = function() {
		$http.post('/hclssurvey1/checkadmin.json', null, null).then(function(response) {
			$scope.adminname=response.data.firstname;
			$scope.status = 0;
			//$scope.noteupdated=0;
			$scope.dateupdated=0;
			$scope.termyear = new Date().getFullYear() + "";
			$scope.term = "Spring";
			year = $scope.termyear - 2;
			var range = [];
			range.push(year);
			for (var i = 1; i < 5; i++) {
				range.push(year + i);
			}
			$scope.years = range;
			$scope.loadterm();
			$scope.disableupload = 1;
			

		}, function(response) {
			if (response.status == 403)
				$location.path('/unauthorized');
		});

	}
	
	$scope.uploadFile = function(files) {
		$scope.status = 1;
		var fd = new FormData();
		// Take the first selected file
		fd.append("file", files[0]);
		var term = $scope.term + "-" + $scope.termyear;
		var studentgroup = $scope.studentgroup;
		var gradstudy= $scope.study;
		fd.append("term", term);
		fd.append("studentgroup",studentgroup);
		fd.append("study",gradstudy);

		$http.post("/hclssurvey1/uploadexcel.json", fd, {
			headers : {
				'Content-Type' : undefined
			},
		}).then(function(response) {
			if (response.data.status == 0)
				$scope.status = 2;
			else if (response.data.status == 1) {
				$scope.errorMessage = response.data.error;
				$scope.status = 3;
			}
		}, null);

	};

	$scope.updateDebriefthankyounote = function() {
		$scope.curdebriefdate = $scope.Debriefdate;
		
		var classdate;
		classdate = {
			"yearInSchool" :$scope.whichstudy,
			"term":$scope.selectedterm,
			"batch":$scope.studgroup,
			"session_date" : $scope.Debriefdate,
			"thankyounote" : $scope.thankyounotetext
	}
		$http.post("/hclssurvey1/updatedebriefdatenote.json", classdate, null, null).then(function(){
			$scope.dateupdated=1;	
			$scope.currdebriefdate=$scope.Debriefdate;
			$scope.thankyounotetext= $scope.thankyounotetext;
			},function(){$scope.dateupdated=2;});
						
		
	}
	
	$scope.loadterm=function(){
		$scope.dateupdated=0;
		$http.post('/hclssurvey1/loadstudentbatch.json', null, null).then(function(response) {
		$scope.studterm = response.data;
		},null);
		
	}
	
	$scope.getallcurrentvalues=function(){
		var inputs ={
				"yearInSchool" :$scope.whichstudy,
				"term":$scope.selectedterm,
				"batch":$scope.studgroup,
		}
		$http.post('/hclssurvey1/getdebriefdatenote.json', inputs, null).then(function(response) {
			$scope.Debriefdate = new Date(response.data.session_date);
			if ($scope.Debriefdate.toString()=="Invalid Date")
				$scope.Debriefdate = "";
			$scope.curdebriefdate = response.data.session_date;
			$scope.thankyounotetext= response.data.thankyounote;
				
	},null);
	
	}
	
	$scope.loadbatches=function(){
		var termstudy={
				"batch" : $scope.selectedterm,
				"study": $scope.whichstudy
		}
		$http.post('/hclssurvey1/getstudentgroups.json', termstudy, null).then(function(response){
			$scope.grouplist=response.data;
		},null);
	}
	
	$scope.viewStatistics=function(){
		$location.path('/SurveyStats');
		
	}
	
	$scope.getstats = function(){
		
		var statinputs = {
				"batch":$scope.batch,
				"study":$scope.stud,
				"yearInSchool":$scope.year
		}
		$http.post('/hclssurvey1/getavgscores.json', statinputs, null).then(function(response){
			$scope.statresults=response.data;
			$scope.getStaticsGraph();
		},null);
		
	}
	$scope.focusAreas = [ "Self Awareness", "Intentional Learner", "Communication", "Relationship Development", "Diversity and Difference", "Engaging Leadership", "Directive Leadership", "Champions Effective Processes", "Problem Solving", "Strategic Perspective", "Ethics and Integrity", "Innovative Spirit" ];
	$scope.getStaticsGraph = function() {
		var lwidth = [];
		var lBgElements = [];

		for (i = 0; i < 12; i++) {
			lwidth[i] = {
				"index" : i,
				"value" : parseInt($scope.statresults[i])
			};
		}

		lwidth = lwidth.sort(function(x, y) {
			return parseInt(y.value) - parseInt(x.value)
		});

		console.log(lwidth);

		for (k = 0; k < 12; k++) {
			var bgElement = {
				"y" : 0,
				"width" : 0,
				"color" : "",
				"text" : ""
			};
			bgElement.y = 77 + 43 * k;
			bgElement.width = (parseInt(lwidth[k].value) - 5) * 700 / 15;
			var lIndex = lwidth[k].index;
			if (k == 10 || k == 11)
				bgElement.color = "#4F81BD";
			else if (k == 0 || k == 1)
				bgElement.color = "#4F81BD";
			else
				bgElement.color = "#4F81BD";
			lBgElements[lIndex] = bgElement;
		}

		for (i = 0; i < lBgElements.length; i++)
			lBgElements[i].text = $scope.focusAreas[i];
		lBgElements.sort(function(a, b) {
			return (parseInt(b.width) - parseInt(a.width));
		});
		$scope.bgElements = lBgElements;
		lBgElements = [];
	}

	
	// Pagination code start
	$scope.pager = {};
	$scope.setPage = setPage;

	function setPage(page) {
		$scope.studentsTmp = filterFilter($scope.students, $scope.searchText);
		/*if (page < 1 || page > $scope.pager.totalPages) {
			return;
		}*/
		$scope.numberofrecords=$scope.studentsTmp.length;
		$scope.pager = PagerService.GetPager($scope.studentsTmp.length, page);
		$scope.items = $scope.studentsTmp.slice($scope.pager.startIndex, $scope.pager.endIndex);
		$scope.clearCheckAll();
		$scope.checkAllChecked = false;
	}
	// Pagination code end
})

.service('PagerService', function PagerService() {
	var service = {};

	service.GetPager = GetPager;

	return service;

	function GetPager(totalItems, currentPage, pageSize) {
		currentPage = currentPage || 1;

		pageSize = pageSize || 10;

		var totalPages = Math.ceil(totalItems / pageSize);

		var startPage, endPage;
		if (totalPages <= 10) {
			startPage = 1;
			endPage = totalPages;
		} else {
			if (currentPage <= 6) {
				startPage = 1;
				endPage = 10;
			} else if (currentPage + 4 >= totalPages) {
				startPage = totalPages - 9;
				endPage = totalPages;
			} else {
				startPage = currentPage - 5;
				endPage = currentPage + 4;
			}
		}
		var startIndex = (currentPage - 1) * pageSize;
		var endIndex = startIndex + pageSize;
		var pages = [];
		for (i = startPage; i < (endPage + 1); i++)
			pages.push(i);
		return {
			totalItems : totalItems,
			currentPage : currentPage,
			pageSize : pageSize,
			totalPages : totalPages,
			startPage : startPage,
			endPage : endPage,
			startIndex : startIndex,
			endIndex : endIndex,
			pages : pages
		};
	}
})

.controller("LineGraphController", function($scope, $rootScope, $http,$location,$window, $timeout,toastr, user) {

	window.scrollTo(0, 0);
	$scope.majorlist = [ {
		value : 0,
		text : 'Mechanical Engineering'
	}, {
		value : 1,
		text : 'Computer Science (BA)'
	}, {
		value : 2,
		text : 'Computer Science (BS)'
	}, {
		value : 3,
		text : 'Environmental Engineering'
	}, {
		value : 4,
		text : 'Civil Engineering'
	}, {
		value : 5,
		text : 'Electrical Engineering'
	}, {
		value : 6,
		text : 'Managment Science'
	}, {
		value : 7,
		text : 'Undeclared'
	}, {
		value : 8,
		text : 'Other - '
	}, {
		value : 9,
		text : 'Double Major -'
	} ];

// New
$scope.checkboxArray = [false,false,false,false,false,false,false,false,false,false,false,false];

	$scope.focusAreas = [ "Self Awareness", "Intentional Learner", "Communication", "Relationship Development", "Diversity and Difference", "Engaging Leadership", "Directive Leadership", "Champions Effective Processes", "Problem Solving", "Strategic Perspective", "Ethics and Integrity", "Innovative Spirit" ];
	$scope.finalObj = user.getData();
	console.log($scope.finalObj);

	$scope.getPath = function(str) {
		var X = [];
		var Y = [];
		var retStr = "M ";
		var path = parseInt(str)
		try {
			for (i = 0; i < 12; i++) {
				X[i] = i + 1;
				Y[i] = parseInt($scope.ldrCmpObj[i][path]);
				X[i] = 90 + 60 * parseInt(X[i]);
				Y[i] = 553 - 23 * parseInt(Y[i]);
				if (i === 0) {
					retStr = retStr + X[i] + " " + Y[i];
				} else {
					retStr = retStr + " L " + X[i] + " " + Y[i];
				}
			}
		} catch (err) {
		}
		return retStr;
	}

	$scope.bgElements = [];
	$scope.populateBgElements = function() {
		console.log("populateBgElements --> " + $scope.ldrCmpObj);
		var lwidth = [];
		var lBgElements = [];

		for (i = 0; i < 12; i++) {
			lwidth[i] = {
				"index" : i,
				"value" : parseInt($scope.ldrCmpObj[i][2])
			};
		}

		lwidth = lwidth.sort(function(x, y) {
			return parseInt(y.value) - parseInt(x.value)
		});

		console.log(lwidth);

		for (k = 0; k < 12; k++) {
			var bgElement = {
				"y" : 0,
				"width" : 0,
				"color" : "",
				"text" : ""
			};
			bgElement.y = 77 + 43 * k;
			bgElement.width = (parseInt(lwidth[k].value) - 5) * 700 / 15;
			var lIndex = lwidth[k].index;
			if (k == 10 || k == 11)
				bgElement.color = "#4F81BD";
			else if (k == 0 || k == 1)
				bgElement.color = "#4F81BD";
			else
				bgElement.color = "#4F81BD";
			lBgElements[lIndex] = bgElement;
		}

		for (i = 0; i < lBgElements.length; i++)
			lBgElements[i].text = $scope.focusAreas[i];
		lBgElements.sort(function(a, b) {
			return (parseInt(b.width) - parseInt(a.width));
		});
		$scope.bgElements = lBgElements;
		lBgElements = [];
	}

	$scope.bgElement = [];
	$scope.populateBgElement = function() {
		console.log("populateBgElement --> " + $scope.ldrCmpObj);
		var lwid = [];
		var lBgElement = [];

		for (i = 0; i < 12; i++) {
			lwid[i] = {
				"index" : i,
				"value" : parseInt($scope.ldrCmpObj[i][2])
			};
		}
		console.log(lwid);
		for (k = 0; k < 12; k++) {
			var bgEle = {
				"y" : 0,
				"width" : 0,
				"color" : "",
				"text" : ""
			};
			bgEle.y = 77 + 43 * k;
			bgEle.width = (parseInt(lwid[k].value) - 5) * 700 / 15;
			var lInd = lwid[k].index;
			if (k >= 0 && k <= 2)
				bgEle.color = "#619f42"; /*color changed*/
			else if (k >= 3 && k <= 5)
				bgEle.color = "#354ca1"; /*color changed*/
			else if (k >= 6 && k <= 8)
				bgEle.color = "#f99b2a"; /*color changed*/
			else
				bgEle.color = "#cc0000"; /*color changed*/
			lBgElement[lInd] = bgEle;
		}

		for (i = 0; i < lBgElement.length; i++) {
			lBgElement[i].text = $scope.focusAreas[i];
		}
		$scope.bgElement = lBgElement;
		lBgElement = [];
	}

	$scope.tableElements = [];
	$scope.populateTableElements = function() {
		for (i = 0; i < 12; i++) {
			$scope.tableElements[i] = [];
			$scope.tableElements[i][0] = $scope.focusAreas[i];
			for (k = 0; k < 3; k++) {
				$scope.tableElements[i][k + 1] = parseInt($scope.ldrCmpObj[i][k]);
			}
		}
	}

	$scope.getFaaWidth = function(i) {
		var lIndex = i * 3;
		var retVal = parseInt($scope.tableElements[lIndex][3]) + parseInt($scope.tableElements[lIndex + 1][3]) + parseInt($scope.tableElements[lIndex + 2][3]);
		retVal = (retVal - 15) * 700 / 45;
		console.log("getFaaWidth --> " + i + " --> " + retVal);
		return retVal;
	}

	$scope.ldrCmpObj = [];
	$scope.populateLdrCmpObj = function() {
		var responseObj = $scope.surveyRespObj.surveyResp.split(",");
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

	$scope.init = function(surveyResponse) {
		var lFinalObj = {
			"info" : "",
			"quizQues" : "",
			"respObj" : ""
		}
		if (surveyResponse != null && surveyResponse.smuId != null) {
			var reqObj = {
				"smuId" : surveyResponse.smuId
				};
			
			$http.post('/hclssurvey1/getsurveyresult.json', reqObj, null).then(function(response) {
				$scope.surveyRespObj = response.data;
				$scope.populateLdrCmpObj();
				$scope.populateTableElements();
				$scope.populateBgElements();
				$scope.populateBgElement();

				var respStrArr = $scope.surveyRespObj.surveyResp.split(",");

				var lRespObj = [];
				for (i = 0; i < 55; i++) {
					lRespObj[i] = [];
					for (j = 0; j < 3; j++) {
						var index = (i * 3) + j;
						lRespObj[i][j] = respStrArr[index];
					}
				}
				lFinalObj.respObj = lRespObj;

			}, null);
			$http.post('/hclssurvey1/getstudentinfo.json', reqObj, null).then(function(response) {
				lFinalObj.info = response.data;
			}, null);
			$http.post('/hclssurvey1/files/quizQues.txt', reqObj, null).then(function(response) {
				lFinalObj.quizQues = response.data;
				$scope.finalObj = lFinalObj;
				/*$timeout(10);
				if($scope.surveyResponses[($scope.surveyResponses.length)-1].smuId==surveyResponse.smuId)
					$window.print();*/
				
			}, null);
			
			

		} else {
			$scope.surveyRespObj = surveyResponse;
			$scope.populateLdrCmpObj();
			$scope.populateTableElements();
			$scope.populateBgElements();
			$scope.populateBgElement();
		}
	}

	$scope.surveyRespObj = {};
	

	// $scope.populateBgElements();
	// $scope.populateTableElements();

$scope.submit=function() {
	var counter = 0;
	var competencyarray = {
			"competency1":"",
			"competency2":"",
			"addedcompetency":0
	};
	for (i=0;i<=11;i++) {
		if ($scope.checkboxArray[i]){
			counter = counter + 1;
			if (counter==1)
			//$scope.key="competency"+counter;
			competencyarray.competency1=$scope.bgElements[i].text;
			if(counter==2)
			competencyarray.competency2=$scope.bgElements[i].text;
					}
	}
		if (counter===2) {
			competencyarray.addedcompetency=1;
		$http.post('/hclssurvey1/savecompetency.json', competencyarray, null).then(
				function(response) {
					toastr.success('Your competencies are recorded', 'Thanks!');
					$location.path('/profile');
				}, 
				function(error) {
					toastr.error('Error occurred. Please try later', 'Error!');
				})
				
	}
	else { if (counter < 2) {
		       toastr.error('Please select atleast two completencies', 'Error!');
		       return; }
		   else {
		   	   toastr.error('Please select maximum of two competencies', 'Error!');
		   	   return; }
		 }
}
})

.controller("infoCtrl", function($scope, $location, user, $http, toastr, $rootScope) {
	$scope.location = $location;
	if (user.getData()===undefined)
		$scope.infoSection = 1;
	else
		$scope.infoSection = user.getData();
	$scope.information = {
		id : "",
		name : "",
		preferredName : "",
		email : "",
		yearInSchool : "",
		major : "",
		otherMajor : "",
		choices : [],
		hartsource : "",
		goodLeaderName : "",
		poorLeaderName : "",
		study:""
	};
	$scope.initialQues = [ 'I know what I need to do to get started toward reaching my goals.', 'I have a specific action plan to help me reach my goals', 'If I want to change something in my life, I initiate the transition process.', 'I know how to change specific things that I want to change in my life.', 'I feel confident about making a successful transition to college.', 'I feel adequately prepared to manage the rigors of an engineering education.', 'I see myself being engaged in one or more student groups during my first year at SMU.', 'I see myself taking on leadership roles at SMU.', 'I am usually one of the first to take on leadership responsibilities within a group or team.' ];

	$scope.initialQuesOptions = [ "Definitely Disagree", "Mostly Disagree", "Mostly Agree", "Definitely Agree" ]

	
	//$scope.yearInSchool = [ 'First Year', 'Sophomore', 'Junior', 'Senior', 'Graduate Student (First year)', 'Graduate Student (Second year)', 'Ph.D. Student' ];

	$rootScope.majors = [ 'Mechanical Engineering', 'Computer Science (BA)', 'Computer Science (BS)', 'Environmental Engineering', 'Civil Engineering', 'Electrical Engineering', 'Managment Science/EMIS', 'Undeclared', 'Other', 'Double Major (specify if you have declared, or intend to declare, a double major)' ];

	$scope.hartsources = [ 'Correspondence I received this summer', 'Previous campus visit', 'Engineering Recruiting Office', 'Hart Center Website', 'Through a Friend or Sibling', "I don't know about the Hart Center" ];

	$scope.init = function() {
		$http.post('/hclssurvey1/getstudentinfo.json', {
			"smuId" : null
		}, null).then(function(response) {
			$scope.information = response.data;
			if($scope.information.study=="2"){
				$scope.yearInSchool = ['Graduate Student (First year)', 'Graduate Student (Second year)'];
			$scope.yearInSchool = [	{
				value : 5,
				text : 'Graduate Student (First year)'
			}, {
				value : 6,
				text : 'Graduate Student (Second year)'
			}];
			}
			else if ($scope.information.study=="1"){
				$scope.yearInSchool =[
			{
				value : 1,
				text : 'First Year'
			}, {
				value : 2,
				text : 'Sophomore'
			}, {
				value : 3,
				text : 'Junior'
			}, {
				value : 4,
				text : 'Senior'
			}];
			}
			else
				$scope.yearInSchool =[, {
					value : 7,
					text : 'Ph.D. Student'
				}];
			if ($scope.information.surveyStatus == 3) {
				alert('You have already completed the survey!')
				$location.path('/profile');
			} else {
				$http.post('/hclssurvey1/getstudentinitialresp.json', null, null).then(function(response) {
					if (response.data != null && response.data.choices != null) {
						$scope.information.choices = response.data.choices;
						$scope.information.hartsource = response.data.hartsource;
					} else {
						$scope.information.choices = [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
					}
				}, null);
			}
		}, null);
	}

	$scope.dynSave = function() {
		$http.post('/hclssurvey1/savestudentinitialresp.json', $scope.information, null).then(null, null);
	}

	$scope.dynSaveglpl = function() {
		var surveyRespObj = {
			"goodLeader" : $scope.information.goodLeaderName,
			"poorLeader" : $scope.information.poorLeaderName,

		}

		$http.post('/hclssurvey1/savesurveyresultglpl.json', surveyRespObj, null).then(null, null);
	}
	$scope.back = function() {
		$scope.infoSection = $scope.infoSection - 1;
	}
	$scope.next = function(currentSection) {
		if (currentSection === 1) {
			if ($scope.information.smuId == null || $scope.information.name == null || $scope.information.email == null || $scope.information.yearInSchool == null || $scope.information.major == null || $scope.information.smuId === "" || $scope.information.name === "" || $scope.information.email === "" || $scope.information.yearInSchool === "" || $scope.information.major === "") {
				toastr.error('All fields prefixed by * are required', 'Error!');
				return;
			} else {
				if (($scope.information.major == 8 && ($scope.information.otherMajor == "" || $scope.information.otherMajor == null)) || ($scope.information.major == 9 && ($scope.information.otherMajor == "" || $scope.information.otherMajor == null))) {
					toastr.error('Please input your other/double major', 'Error!');
					return;
				}

				$scope.infoSection = $scope.infoSection + 1;
				$scope.information.surveyStatus = 2;
				$http.post('/hclssurvey1/savestudentinfo.json', $scope.information, null).then(null, null);
			}
		}

		if (currentSection === 2) {

			for (i = 0; i <= 8; i++) {
				if ($scope.information.choices[i] === "0") {
					toastr.error('Please respond to all questions', 'Error!');
					return;
				}
			}
			if ($scope.information.hartsource == null) {
				toastr.error('Please select a value from dropdown', 'Error!');
				return;
			} else
				$scope.infoSection = $scope.infoSection + 1;
			$http.post('/hclssurvey1/savestudentinitialresp.json', $scope.information, null).then(null, null);
		}
	}

	$scope.redirectSurvey = function() {
		if ($scope.information.goodLeaderName == "" || $scope.information.poorLeaderName == "" || $scope.information.goodLeaderName == null || $scope.information.poorLeaderName == null) {
			// $.Notify({ caption: 'Error',content: "All Information is
			// mandatory!",type: 'alert'});
			toastr.error('Please input names in both fileds', 'Error!');
			return;
		} else {
			user.sendData($scope.information);
			$location.path('/quiz');
		}
	}
})

.controller("defaultpageController", function($scope, $http, $location) {
	$scope.init = function() {
		$http.post('/hclssurvey1/isadmin.json', null, null).then(function(response) {
			var isadmin = response.data;
			if (isadmin)
				$location.path('/adminhome');
			else
				$location.path('/profile');
		}, null);
	}
})

.service('user', function() {
	this.getData = function() {
		return this.data;
	}
	this.sendData = function(data) {
		this.data = data;
	}
})

.controller("thankYou", function($scope, $location, toastr, $window, $rootScope, user, $http) {
	window.scrollTo(0, 0);
	toastr.success('Hart Assessment is completed', 'Congratulations!');
	$scope.redirectpath = function() {

		$location.path('/results');
	}
	$scope.init = function() {
	$scope.dataforthankyoupage = user.getData();
	var batchterm ={
			"batch":$scope.dataforthankyoupage.info.studentgroup,
			"term":$scope.dataforthankyoupage.info.batch,
			"yearInSchool":$scope.dataforthankyoupage.info.study
	}
	$http.post('/hclssurvey1/getdebriefdatenote.json', batchterm, null).then(function(response) {
		var tempthankyounote = response.data.thankyounote;
		$scope.sessiondate=response.data.session_date;
		var debriefdate = new Date(response.data.session_date);
		if(tempthankyounote=="null")
			$scope.thankyounote="";
		else 
			$scope.thankyounote=tempthankyounote;
	
		if ($scope.dataforthankyoupage.info.study=="3")
				$scope.linkFlag = 2;//show direct link to report
			var today = new Date();
			if (today <= debriefdate && $scope.dataforthankyoupage.info.study == "2")
				$scope.linkFlag = 0;//show report grad 
			else if (today <= debriefdate && $scope.dataforthankyoupage.info.study == "1")
				$scope.linkFlag = 1;//show report undergrad
			elses
				$scope.linkFlag = 2;
	}, null);

}
	
})

.config(function(toastrConfig) {
	angular.extend(toastrConfig, {
		timeout : 100,
	});
}).config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/info', {
		templateUrl : 'views/info.html',
		controller : 'infoCtrl'
	}).when('/quiz', {
		templateUrl : 'views/quiz.html',
		controller : 'mainAppCtrl'
	}).when('/results', {
		templateUrl : 'views/line-chart.html',
		controller : 'LineGraphController'
	}).when('/thankyou', {
		templateUrl : 'views/thankyou.html',
		controller : 'LineGraphController'
	}).when('/admin', {
		templateUrl : 'views/admin.html',
		controller : 'AdminController'
	}).when('/adminhome', {
		templateUrl : 'views/adminhome.html',
		controller : 'AdminController'
	}).when('/SurveyStats', {
		templateUrl : 'views/SurveyStats.html',
		controller : 'AdminController'
	}).when('/default', {
		templateUrl : 'views/default.html',
		controller : 'defaultpageController'
	}).when('/profile', {
		templateUrl : 'views/profile.html',
		controller : 'ProfileController'
	}).when('/competencies', {
		templateUrl : 'views/competencies.html',
		controller : 'LineGraphController'
	}).when('/home', {
		templateUrl : 'views/home.html',
		
	}).when('/SurveyComplete', {
		templateUrl : 'views/SurveyComplete.html',
		
	}).when('/contact', {
		templateUrl : 'views/contact.html',
		
	}).when('/assessments', {
		templateUrl : 'views/Myassessments.html',
		controller : 'AssessmentController'
	}).when('/leadership', {
		templateUrl : 'views/Myleadership.html',
		controller : 'AssessmentController'
	}).when('/career', {
		templateUrl : 'views/careers.html',
		controller : 'AssessmentController'
	}).when('/MyActionplan', {
		templateUrl : 'views/MyActionplan.html',
		controller : 'MyActionplanController'
	}).otherwise({
		redirectTo : '/default'

	});
} ]);
