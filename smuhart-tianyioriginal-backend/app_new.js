
// add modules as a dipendency injection
var surveyApp = angular.module("surveyApp", ['ngRoute','ngMaterial', 'ngMessages', 'toastr'])

.controller("AssessmentController", function($scope, $location, $rootScope, $http, user, toastr) {
	window.scrollTo(0, 0);
	this.location = $location;
})

.controller("ceController", function($scope, $location, $rootScope, $http, user, toastr) {
	window.scrollTo(0, 0);
	this.location = $location;
	this.videoquiz = 0;
	console.log(this.videoquiz)
		this.cev1 = function() {
		this.videoquiz = 1;
		window.scrollTo(0, 1000);
	}
		this.cev2 = function() {
		this.videoquiz = 2;
		window.scrollTo(0, 1000);
	}
		this.submit = function() {
		window.scrollTo(0, 0);
		this.videoquiz = 0;
	}
})

.controller("coController", function($scope, $location, $rootScope, $http, user, toastr) {
	this.location = $location;
	this.videoquiz = 0;
	console.log(this.videoquiz)
		this.cov1 = function() {
		this.videoquiz = 1;
		window.scrollTo(0, 1000);
	}
		this.cov2 = function() {
		this.videoquiz = 2;
		window.scrollTo(0, 1000);
	}
		this.cov3 = function() {
		this.videoquiz = 3;
		window.scrollTo(0, 1000);
	}
		this.cov4 = function() {
		this.videoquiz = 4;
		window.scrollTo(0, 1000);
	}
		this.cov5 = function() {
		this.videoquiz = 5;
		window.scrollTo(0, 1000);
	}
		this.submit = function() {
		window.scrollTo(0, 0);
		this.videoquiz = 0;
	}
})

.controller("drController", function($scope, $location, $rootScope, $http, user, toastr) {
	this.location = $location;
	this.videoquiz = 0;
	console.log(this.videoquiz)
		this.dr1 = function() {
		this.videoquiz = 1;
		window.scrollTo(0, 1000);
	}
		this.dr2 = function() {
		this.videoquiz = 2;
		window.scrollTo(0, 1000);
	}
		this.dr3 = function() {
		this.videoquiz = 3;
		window.scrollTo(0, 1000);
	}
		this.dr4 = function() {
		this.videoquiz = 4;
		window.scrollTo(0, 1000);
	}
		this.submit = function() {
		window.scrollTo(0, 0);
		this.videoquiz = 0;
	}
})


.controller("dlController", function($scope, $location, $rootScope, $http, user, toastr) {
	this.location = $location;
	this.videoquiz = 0;
	console.log(this.videoquiz)
		this.dlv1 = function() {
		this.videoquiz = 1;
		window.scrollTo(0, 1000);
	}
		this.submit = function() {
		window.scrollTo(0, 0);
		this.videoquiz = 0;
	}
})

.controller("ddController", function($scope, $location, $rootScope, $http, user, toastr) {
	this.location = $location;
	this.videoquiz = 0;
	console.log(this.videoquiz)
		this.ddv1 = function() {
		this.videoquiz = 1;
		window.scrollTo(0, 1000);
	}
		this.ddv2 = function() {
		this.videoquiz = 2;
		window.scrollTo(0, 1000);
	}
		this.ddv3 = function() {
		this.videoquiz = 3;
		window.scrollTo(0, 1000);
	}
		this.submit = function() {
		window.scrollTo(0, 0);
		this.videoquiz = 0;
	}
})

.controller("elController", function($scope, $location, $rootScope, $http, user, toastr) {
	this.location = $location;
	this.videoquiz = 0;
	console.log(this.videoquiz)
		this.elv1 = function() {
		this.videoquiz = 1;
		window.scrollTo(0, 1000);
	}
		this.elv2 = function() {
		this.videoquiz = 2;
		window.scrollTo(0, 1000);
	}
		this.submit = function() {
		window.scrollTo(0, 0);
		this.videoquiz = 0;
	}
})

.controller("eiController", function($scope, $location, $rootScope, $http, user, toastr) {
	this.location = $location;
	this.videoquiz = 0;
	console.log(this.videoquiz)
		this.eiv1 = function() {
		this.videoquiz = 1;
		window.scrollTo(0, 1000);
	}
		this.eiv2 = function() {
		this.videoquiz = 2;
		window.scrollTo(0, 1000);
	}
		this.submit = function() {
		window.scrollTo(0, 0);
		this.videoquiz = 0;
	}
})

.controller("isController", function($scope, $location, $rootScope, $http, user, toastr) {
	this.location = $location;
	this.videoquiz = 0;
	console.log(this.videoquiz)
		this.isv1 = function() {
		this.videoquiz = 1;
		window.scrollTo(0, 1000);
	}
		this.isv2 = function() {
		this.videoquiz = 2;
		window.scrollTo(0, 1000);
	}
		this.isv3 = function() {
		this.videoquiz = 3;
		window.scrollTo(0, 1000);
	}
		this.submit = function() {
		window.scrollTo(0, 0);
		this.videoquiz = 0;
	}
})

.controller("ilController", function($scope, $location, $rootScope, $http, user, toastr) {
	this.location = $location;
	this.videoquiz = 0;
	console.log(this.videoquiz)
		this.ilv1 = function() {
		this.videoquiz = 1;
		window.scrollTo(0, 1000);
	}
		this.ilv2 = function() {
		this.videoquiz = 2;
		window.scrollTo(0, 1000);
	}
		this.ilv3 = function() {
		this.videoquiz = 3;
		window.scrollTo(0, 1000);
	}
		this.ilv4 = function() {
		this.videoquiz = 4;
		window.scrollTo(0, 1000);
	}
		this.ilv5 = function() {
		this.videoquiz = 5;
		window.scrollTo(0, 1000);
	}
		this.submit = function() {
		window.scrollTo(0, 0);
		this.videoquiz = 0;
	}
})

.controller("psController", function($scope, $location, $rootScope, $http, user, toastr) {
	this.location = $location;
	this.videoquiz = 0;
	console.log(this.videoquiz)
		this.psv1 = function() {
		this.videoquiz = 1;
		window.scrollTo(0, 1000);
	}
		this.psv2 = function() {
		this.videoquiz = 2;
		window.scrollTo(0, 1000);
	}
		this.psv3 = function() {
		this.videoquiz = 3;
		window.scrollTo(0, 1000);
	}
		this.submit = function() {
		window.scrollTo(0, 0);
		this.videoquiz = 0;
	}
})

.controller("saController", function($scope, $location, $rootScope, $http, user, toastr) {
	this.location = $location;
	this.videoquiz = 0;
	console.log(this.videoquiz)
		this.sav1 = function() {
		this.videoquiz = 1;
		window.scrollTo(0, 1000);
	}
		this.sav2 = function() {
		this.videoquiz = 2;
		window.scrollTo(0, 1000);
	}
		this.sav3 = function() {
		this.videoquiz = 3;
		window.scrollTo(0, 1000);
	}
		this.sav4 = function() {
		this.videoquiz = 4;
		window.scrollTo(0, 1000);
	}
		this.sav5 = function() {
		this.videoquiz = 5;
		window.scrollTo(0, 1000);
	}
		this.submit = function() {
		window.scrollTo(0, 0);
		this.videoquiz = 0;
	}
})

.controller("spController", function($scope, $location, $rootScope, $http, user, toastr) {
	this.location = $location;
	this.videoquiz = 0;
	console.log(this.videoquiz)
		this.spv1 = function() {
		this.videoquiz = 1;
		window.scrollTo(0, 1000);
	}
		this.submit = function() {
		window.scrollTo(0, 0);
		this.videoquiz = 0;
	}
})
.controller("careerController", function($scope, $location, $rootScope, $http, user, toastr) {
	this.location = $location;
})

.controller("profController", function($scope, $location, $rootScope, $http, user, toastr) {
	this.location = $location;
		$scope.assessment = function() {
		$location.path('/profile');
	}
		$scope.competencylib = function() {
		$location.path('/competencies');
	}
		$scope.actionplan = function() {
		$location.path('/profile');
	}
		$scope.careerdev = function() {
		$location.path('/careers');
	}
})

.controller("ProfileController", function($scope, $location, $rootScope, $http, user, toastr) {

	$scope.init = function() {
		$http.post('/hclssurvey1/getstudentinfo.json', {
			"smuId" : null
		}, null).then(function(response) {
			$scope.profileInfo = response.data;
		}, null);
	}
	$scope.getSurveyResult = function(smuId) {
		$rootScope.surveyResponses = [ {
			"smuId" : smuId,
		} ];
		$location.path('/results');
	}

	$scope.RedirectInfo = function() {
// 
		user.sendData(1);
		$location.path('/info');
	}
})

//include toastr in all controllers as a parameter
.controller("mainAppCtrl", function($scope, $location, $rootScope,user,toastr){
		window.scrollTo(0, 0);
		this.startNum = 0;
		this.endNum = 4;
		// new
		this.disableSubmit = false;
		this.widthOnSubmit = 0;
		this.responseObj = {};
		//message on enter to quiz
		toastr.info('Start survey', 'Information');
		//use this response object in order to use validation on quiz
		this.responseObj=[["4","3","2"],
				  ["4","3","2"],	
				  ["4","3","2"],	
				  ["4","3","2"],	
				  ["4","3","2"],	
				  ["4","3","3"],	
				  ["4","3","2"],	
				  ["4","3","2"],	
				  ["4","3","2"],	
				  ["4","3","2"],	
				  ["4","3","3"],	
				  ["4","3","3"],	
				  ["4","3","2"],	
				  ["4","3","2"],	
				  ["4","3","2"],
				  ["4","3","3"],	
				  ["4","3","3"],	
				  ["4","3","3"],	
				  ["4","3","2"],	
				  ["4","3","2"],	
				  ["4","3","3"],	
				  ["4","3","3"],	
				  ["4","3","3"],	
				  ["4","3","3"],	
				  ["4","3","2"],	
				  ["4","3","3"],	
				  ["4","3","3"],	
				  ["4","3","3"],	
				  ["4","3","3"],	
				  ["4","3","3"],	
				  ["4","3","4"],	
				  ["4","3","3"],	
				  ["4","3","3"],	
				  ["4","3","3"],	
				  ["4","3","3"],	
				  ["4","3","4"],	
				  ["4","3","4"],	
				  ["4","3","3"],	
				  ["4","3","3"],	
				  ["4","3","3"],	
				  ["4","3","4"],	
				  ["4","3","4"],	
				  ["4","3","4"],	
				  ["4","3","3"],	
				  ["4","3","3"],	
				  ["4","3","4"],	
				  ["4","3","4"],	
				  ["4","3","4"],	
				  ["4","3","4"],	
				  ["4","3","3"],	
				  ["4","3","4"],	
				  ["4","3","4"],	
				  ["4","3","4"],	
				  ["4","3","4"],	
				  ["4","3","4"]];

		this.ldrCmpObj = {};
		this.userInfo = user.getData();

		this.back = function(){
			if(this.startNum===0) {
				user.sendData(3);
				$location.path('/info');
				window.scrollTo(0, 0);
			}
			else{
				this.startNum = this.startNum-5;
				this.endNum = this.endNum-5;
				window.scrollTo(0, 0);
			}
		}

		this.next = function(){
			var i;
			for(i=this.startNum; i<=this.endNum; i++){

				if(this.responseObj[i][0]==="" || this.responseObj[i][1]==="" || this.responseObj[i][2]===""){
				//validation msg if quiz is empty on current page
				toastr.error('All questions are mandatory', 'Error');
					return;
				}	
			}
				this.startNum = this.startNum+5;
				this.endNum = this.endNum+5;
				window.scrollTo(0, 0);
		}

	this.populateLdrCmpObj = function () {
		this.ldrCmpObj = [];
		for (i=0;i<2;i++) {
			this.ldrCmpObj[i] = [];
			for (k=0;k<3;k++) {
				j=i*5;
				this.ldrCmpObj [i][k] = parseInt(this.responseObj[j][k]) +
						 parseInt(this.responseObj[j+1][k]) +
						 parseInt(this.responseObj[j+2][k]) +
						 parseInt(this.responseObj[j+3][k]) +
						 parseInt(this.responseObj[j+4][k]);
			}
		}
		this.ldrCmpObj[2] = [];
		for (k=0;k<3;k++) {
			j=10;
			this.ldrCmpObj [i][k] = parseInt(this.responseObj[4][k]) +
					 parseInt(this.responseObj[9][k]) +
					 parseInt(this.responseObj[14][k]) +
					 parseInt(this.responseObj[24][k]) +
					 parseInt(this.responseObj[29][k]);
		}
		for (i=3;i<12;i++) {
			this.ldrCmpObj[i] = [];
			for (k=0;k<3;k++) {
				j=(i-1)*5;
				this.ldrCmpObj [i][k] = parseInt(this.responseObj[j][k]) +
						 parseInt(this.responseObj[j+1][k]) +
						 parseInt(this.responseObj[j+2][k]) +
						 parseInt(this.responseObj[j+3][k]) +
						 parseInt(this.responseObj[j+4][k]);
			}
		}
		console.log("populateLdrCmpObj --> " + this.ldrCmpObj);
	}

		this.submit = function(){
			//use this for loop for last quiz validation on submit button
			//new
			this.disableSubmit = true;
			var i;
			for(i=this.startNum; i<=this.endNum; i++){

				if(this.responseObj[i][0]==="" || this.responseObj[i][1]==="" || this.responseObj[i][2]===""){
				toastr.error('All questions are mandatory', 'Error');
				this.disableSubmit = false;
					return;
				}	
			}
			this.finalObj = {info:this.userInfo, quizQues:this.questions, respObj:this.responseObj};
			user.sendData(this.finalObj);
			this.populateLdrCmpObj();
			$rootScope.ldrCmpObj=this.ldrCmpObj;
			this.widthOnSubmit = 10;
			console.log("up");
			toastr.success('Redirecting', 'Success!');
			console.log("down");
			console.log("inside");
			// setTimeout(function(){ $location.path('/results'); }, 1000);
			$scope.timeInMs_old = 0;

    var countUp_old = function() {
        $scope.timeInMs_old+= 500;        
        setTimeout(function () {
        $scope.$apply(countUp_old);
    }, 500);
    }

    setTimeout(function () {
    	console.log("a")
        $location.path('/results');
    }, 500);
    
	}

		this.options = ['1','2','3','4'];
		
		this.sections = ['Good Leader', 'Poor Leader', 'Me as a Leader'];
		
		this.questions = ["Candid Self-Appraisal: Aware of personal strengths and shortcomings",
							"Self Management: Avoids spreading self too thin",
							"Self Disciplined: Stays on task even under difficult circumstances",
							"Optimistic: Believes most problems can be solved",
							"Open to Feedback: Willing to receive constructive feedback",
							"Improves Performance: Improves performance over time",
							"Willing to Stretch: Addresses challenges outside of personal comfort zone",
							"Reflective Learner: Reflects on and learns from experiences",
							"grows from Adversity: Learns from mistakes or adversity",
							"Seeks Feedback: Asks for honest feedback on his or her performance",
							"Inclusive: Welcomes and includes all kinds of people",
							"Empathetic: Puts self in others' shoes; deeply considers others' point-of-view",
							"Mends Fences: Can bring people back together after disagreements",
							"Seeks Common ground: Strives to find common ground whenever possible",
							"Transparent: Encourages direct and open discussions about important issues",
							"Student of People:  Seeks opportunities to learn about different types of people (e.g., races, nationalities, cultures)",
							"Values Differences: Sees the value in others' unique differences",
							"Cultural Perspective: When working with people from other backgrounds",
							"Culturally Versatile: Adapts behavior to fit different cultural expectations",
							"Multicultural Motivator: Can effectively motivate multicultural groups or teams",
							"Inspires Commitment:  gains commitment from others",
							"Leverages Others' Strengths: Finds ways to utilize others' strengths",
							"Influences Without Authority: Able to Influences others without requiring a formal leadership position",
							"Considerate: gives as much weight to others' perspectives as to one's own",
							"Careful Listener: Listens intently to others' ideas, suggestions, and concerns",
							"gives Direction:  Clearly communicates goals, deadlines, and expectations",
							"Prioritizes Effectively: Is good  at helping group/team prioritize tasks",
							"Clarifies Roles: Ensures group or team members understand their roles",
							"Provides guidance: Offers guidance or support at the appropriate times",
							"gives Candid Feedback: Provides prompt feedback, both positive and negative",
							"Shares Leadership:  Remains engaged when others are in control",
							"Shares Responsibility: Willing to share important tasks, not just things he/she doesn't want to do",
							"Believes in Others: Believes in everyone's ability to make valuable contributions",
							"Trusting of Others: Is comfortable depending on others over whom he/she has no control",
							"Maintains Accountability: Holds others accountable in a respectful way",
							"Defines Problems Effectively:  gets to the root cause of the issue",
							"Makes Informed Decisions: gathers information necessary to make good decisions",
							"Logical Thinker: Thinks problems through clearly and logically",
							"Uses Judgment: Shows good judgment when making decisions",
							"Decisive: Makes effective decisions in a timely manner",
							"Sees Big Picture:  Effectively frames large-scale problems or challenges",
							"Systemic Awareness: Identifies patterns and cycles that impact performance",
							"Considers Options:  Recognizes trade-offs; doesn't assume a single best way",
							"Pragmatic: Can articulate pros and cons when making important decisions",
							"Recognizes Opportunity: Identifies issues and opportunities for strategic change",
							"Encourages Honesty:  Words and deeds facilitate an atmosphere of honesty",
							"Trustworthy: gains trust from others",
							"Ethical Decision-maker: Uses ethical considerations to guide decisions",
							"Responsible: Is accountable for own actions; doesn't blame others",
							"Principled: Places ethical behavior above personal gain",
							"Entrepreneurial:  Seizes new opportunities",
							"Thinks Differently: Forms unique ideas and associations",
							"Inventive: Creates new and different ways to solve problems",
							"generative: Consistently generates new ideas",
							"Maker Instinct: Can access his or her inner drive to make, build, and grow things"];

		// sections name as not required on UI
		// this.focusAreas=["Self Awareness",
		// 				 "Intentional Learner",
		// 				 "Relationship Development",
		// 				 "Diversity and Difference",
		// 				 "Engaging Leadership",
		// 				 "Directive Leadership",
		// 				 "Champions Effective Processes",
		// 				 "Problem Solving",
		// 				 "Strategic Perspective",
		// 				 "Ethics and Integrity",
		// 				 "Innovative Spirit"
		// 	 ];
})
//include toastr as a paramater
.controller("LineGraphController", function($scope, $rootScope,toastr,user){
window.scrollTo(0, 0);
var j=0;
// survey complete msg
toastr.success('Survey completed successfully', 'Success');

this.ldrCmpObj=$rootScope.ldrCmpObj;

this.focusAreas=["Self Awareness",
				 "Intentional Learner",
				 "Communication",
				 "Relationship Development",
				 "Diversity and Difference",
				 "Engaging Leadership",
				 "Directive Leadership",
				 "Champions Effective Processes",
				 "Problem Solving",
				 "Strategic Perspective",
				 "Ethics and Integrity",
				 "Innovative Spirit"
				 ];

this.finalObj = user.getData();
console.log(this.finalObj);

this.getPath=function(str) {
	var X = [];
	var Y = [];
	var retStr = "M ";
	var path = parseInt(str)
	try {
	for (i=0;i<12;i++) {
		X[i] = i + 1;
		Y[i] = parseInt(this.ldrCmpObj[i][path]);
		X[i] = 90 + 60 * parseInt (X[i]);
		Y[i] = 553 - 23 * parseInt (Y[i]);
		if (i===0) {
			retStr = retStr + X[i] + " " + Y[i] ;
		}
		else {
			retStr = retStr + " L " + X [i] + " " + Y [i];
		}
	}
	} catch (err) {}	
	return retStr;
}

this.bgElements=[];
this.populateBgElements=function() {
	console.log("populateBgElements --> " + this.ldrCmpObj);
	var lwidth = [];
	var lBgElements = [];

	for (i=0;i<12;i++) {
		lwidth [i] = {"index":i, "value":
				 parseInt(this.ldrCmpObj[i][2])};
	}

	lwidth = lwidth.sort(function(x, y){return parseInt(y.value) - parseInt(x.value)});

	console.log(lwidth);
	
	for (k=0;k<12;k++) {
		var bgElement = {  
	      "y":0,
	      "width":0,
	      "color":"",
	      "text":""
	   	};
		bgElement.y=77+43*k;
		bgElement.width=(parseInt(lwidth[k].value) - 5)*700/15;
		var lIndex = lwidth[k].index;
/*		if (k == 10 || k == 11)
			bgElement.color="#C00000";
		else if (k == 0 || k == 1)
			bgElement.color="#00B050";
		else*/
			bgElement.color="#4F81BD";
		lBgElements[lIndex]=bgElement;
	}

	for (i=0;i<lBgElements.length;i++)
	lBgElements[i].text=this.focusAreas[i];
	lBgElements.sort(function(a, b) {
		return (parseInt(b.width) - parseInt(a.width));
	});
	this.bgElements=lBgElements;
	lBgElements=[];
}

this.bgElement=[];
this.populateBgElement=function() {
	console.log("populateBgElement --> " + this.ldrCmpObj);
	var lwid = [];
	var lBgElement = [];

	for (i=0;i<12;i++) {
		lwid [i] = {"index":i, "value":
				 parseInt(this.ldrCmpObj[i][2])};
	}

	// lwidth = lwidth.sort(function(x, y){return parseInt(y.value) - parseInt(x.value)});

	console.log(lwid);
	
	for (k=0;k<12;k++) {
		var bgEle = {  
	      "y":0,
	      "width":0,
	      "color":"",
	      "text":""
	   	};
		bgEle.y=77+43*k;
		bgEle.width=(parseInt(lwid[k].value) - 5)*700/15;
		var lInd = lwid[k].index;
		if (k >= 0 && k <= 2)
			bgEle.color="#619f42";
		else if (k >= 3 && k <= 5)
			bgEle.color="#354ca1";
		else if (k >= 6 && k <= 8)
			bgEle.color="#f99b2a";
		else
			bgEle.color="#cc0000";
		lBgElement[lInd]=bgEle;
	}

	for (i=0;i<lBgElement.length;i++)
	lBgElement[i].text=this.focusAreas[i];
	// lBgElements.sort(function(a, b) {
		// return (parseInt(b.width) - parseInt(a.width));
	// });
	this.bgElement=lBgElement;
	lBgElement=[];
}


this.tableElements = [];
this.populateTableElements = function () {
	for (i=0;i<12;i++) {
		this.tableElements[i] = [];
		this.tableElements [i][0] = this.focusAreas[i];
		for (k=0;k<3;k++) {
			this.tableElements [i][k+1] = parseInt(this.ldrCmpObj[i][k]);
		}
	}
}

this.getFaaWidth = function (i) {
	var lIndex = i*3;
	var retVal = parseInt(this.tableElements[lIndex][3])
					+ parseInt(this.tableElements[lIndex+1][3])
					+ parseInt(this.tableElements[lIndex+2][3]);
	retVal = retVal * 35 / 3;
	// console.log("getFaaWidth --> " + i + " --> " + retVal);
	return retVal;
}

this.populateBgElements();
this.populateTableElements();
this.populateBgElement();

})

//include toastr as a paramater here

.controller("infoCtrl", function($scope,$location,user,toastr){
	this.location = $location;
	//msg for welcome to app
	toastr.success('Welcomes to SMU', 'Success');
//	
	if (user.getData()===undefined)
	this.infoSection = 3;
	else
	this.infoSection = user.getData(); 
	this.information = {id:"47026997", name:"a", preferredName:"a", email:"", date:"", yearInSchool:"", major:"", otherMajor:"", doubleMajor:"", choiceone:"", choicetwo:"", choicethr:"", choicefou:"", choicefiv:"", choicesix:"", choicesev:"", choiceeig:"", choicenin:"", hartsource:"",  goodLeaderName:"g", poorLeaderName:"p"};
	this.information.date = new Date();
	this.initialQues = ['I know what I need to do to get started toward reaching my goals.',
						 'I have a specific action plan to help me reach my goals',
						 'If I want to change something in my life, I initiate the transition process.',
						 'I know how to change specific things that I want to change in my life.',
						 'I feel confident about making a successful transition to college.',
						 'I feel adequately prepared to manage the rigors of an engineering education.',
		 				 'I see myself being engaged in one or more student groups during my first year of college.',
						 'I see myself taking on leadership roles in college.',
						 'I am usually one of the first to take on leadership responsibilities within a group or team.'];
	
	this.initialQuesOptions = ["Definitely Disagree", "Mostly Disagree", "Mostly Agree", "Definitely Agree"];
	// add these new 3 array
	this.yearInSchool = ['First Year','Sophomore','Junior','Senior','Graduate Student (First year)','Graduate Student (Second year)','Ph.D. Student'];

	this.majors = ['Mechanical Engineering',
					'Computer Science(BA)',
					'Computer Science(BS)',
					'Environmental Engineering',
					'Civil Engineering',
					'Electrical Engineering',
					'Managment Science',
					'Undeclared',
					'Other',
					'Double Major (specify if you have declared, or intend to declare, a double major'];

	this.hartsources = ['Correspondence I received this summer',
						'Previous campus visit',
						'Engineering Recruiting Office',
						'Hart Center Website',
						'Through a Friend or Sibling',
						"I don't know about the Hart Center"];
// added validation
	this.resObj1=["2","2","2","2","2","2","2","2","2"];

	this.back = function(){
		this.infoSection = this.infoSection-1;
	}

	this.next = function(currentSection){
		console.log(this.information);
		if(currentSection===1){
			if(this.information.id==="" || this.information.name==="" || this.information.preferredName==="" || this.information.email==="" || this.information.yearInSchool==="" || this.information.major===""){
				// msg for validation on info page
				toastr.error('All fields are mandatory', 'Error');
				return;
			}
// validation
			else {
				if((this.information.major==="Other" && this.information.otherMajor==="") || 
				   (this.information.major==="Double Major (specify if you have declared, or intend to declare, a double major" && this.information.doubleMajor==="")){
				toastr.error('Please specify your major correctly', 'Error!');
				return;
			}
							if(this.information.major==="Other" && this.information.otherMajor===""){
				toastr.error('Please specify your major correctly', 'Error!');
				return;
			}
			this.infoSection = this.infoSection + 1;
		}
	}

		if(currentSection===2){

// validation
			for(i=0; i<=8; i++){
				if(this.resObj1[i]==="0"){
				toastr.error('All questions are mandatory', 'Error!');
					return;
				}	
			}

			if(this.information.hartsource===""){
				// msg for validation on info page
				toastr.error('All fields are mandatory', 'Error');
				return;
			} 
			else this.infoSection = this.infoSection + 1;
		}
	}
	
	this.redirectSurvey = function(){
		if(this.information.name==="" || this.information.id==="" || this.information.goodLeaderName==="" || this.information.poorLeaderName===""){
				// msg for validation on info page
			toastr.error('All fields are mandatory', 'Error');
			return;
		}
		else{
			user.sendData(this.information);
			this.location.path('/quiz');	
		}     
	}
})

.service('user', function(){
	this.getData = function(){
		return this.data;
	}
	this.sendData = function(data){
		this.data = data;
	}
})

.config(function(toastrConfig) {
  angular.extend(toastrConfig, {
timeOut:500,
});
})
// write controller either here or on the html (write at one place only oterwise controller will call 2 times)
// in controller here write controllername as controllerAliasName
//do for linegraphcomntroller also
.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/info', {
        templateUrl: 'views/info.html',
        controller: 'infoCtrl as ctrl'
      })
      .when('/quiz', {
        templateUrl: 'views/quiz.html',
        controller: 'mainAppCtrl as ctrl'
      })
      .when('/results', {
        templateUrl: 'views/line-chart.html',
        controller: 'LineGraphController as ctrl'
      })
      .when('/profile', {
		templateUrl : 'views/profile.html',
		controller : 'ProfileController'
	  })
	  .when('/competencies', {
		templateUrl : 'views/competencies.html',
		controller : 'ilController'
	  })
	  .when('/profile1', {
		templateUrl : 'views/profile1.html',
		controller : 'profController'
	  })
	  .when('/careers', {
		templateUrl : 'views/careers.html',
		controller : 'careerController'
	  })
	  .when('/Myleadership', {
		templateUrl : 'views/Myleadership.html',
		controller : 'AssessmentController'
	  })
      .otherwise({
        redirectTo: '/info'
      });
  }]);
