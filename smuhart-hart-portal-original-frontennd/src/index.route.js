export function routerConfig($urlRouterProvider, $stateProvider, $locationProvider) {
  'ngInject';

  // TODO stateprovider
  $urlRouterProvider.otherwise('/home');
  $locationProvider.hashPrefix('');
  $stateProvider
    .state('app', {
      component: 'layout',
    })
    .state({
      name: 'app.info',
      url: '/info',
      template: require('./views/info.html'),
      controller: 'infoCtrl',
    }).state({
      name: 'app.quiz',
      url: '/quiz',
      template: require('./views/quiz.html'),
      controller: 'mainAppCtrl',
    }).state({
      name: 'app.results',
      url: '/results',
      template: require('./views/line-chart.html'),
      controller: 'LineGraphController',
    }).state({
      name: 'app.thankyou',
      url: '/thankyou',
      template: require('./views/thankyou.html'),
      controller: 'LineGraphController',
    }).state({
      name: 'app.admin',
      url: '/admin',
      template: require('./views/admin.html'),
      controller: 'AdminController',
    }).state({
      name: 'app.adminhome',
      url: '/adminhome',
      template: require('./views/adminhome.html'),
      controller: 'AdminController',
    }).state({
      name: 'app.SurveyStats',
      url: '/SurveyStats',
      template: require('./views/SurveyStats.html'),
      controller: 'AdminController',
    }).state({
      name: 'app.default',
      url: '/default',
      template: require('./views/default.html'),
      controller: 'defaultpageController',
    }).state({
      name: 'app.profile',
      url: '/profile',
      template: require('./views/profile.html'),
      controller: 'ProfileController',
    }).state({
      name: 'app.competencies',
      url: '/competencies',
      template: require('./views/competencies.html'),
      controller: 'LineGraphController',
    }).state({
      name: 'app.home',
      url: '/home',
      template: require('./views/home.html'),
    }).state({
      name: 'app.SurveyComplete',
      url: '/SurveyComplete',
      template: require('./views/SurveyComplete.html'),

    }).state({
      name: 'app.contact',
      url: '/contact',
      template: require('./views/contact.html'),

    }).state({
      name: 'app.assessments',
      url: '/assessments',
      template: require('./views/Myassessments.html'),
      controller: 'AssessmentController',

    }).state({
      name: 'app.complibrary',
      url: '/complibrary',
      template: require('./views/complibrary.html'),


    }).state({
      name: 'app.sa',
      url: '/sa',
      template: require('./views/Competencies/SelAwa.html'),
      controller: 'saController',

    }).state({
      name: 'app.il',
      url: '/il',
      template: require('./views/Competencies/IntLrn.html'),
      controller: 'ilController',

    }).state({
      name: 'app.cep',
      url: '/cep',
      template: require('./views/Competencies/ChaEfe.html'),
      controller: 'ceController',

    }).state({
      name: 'app.ec',
      url: '/ec',
      template: require('./views/Competencies/Com.html'),
      controller: 'coController',

    }).state({
      name: 'app.dr',
      url: '/dr',
      template: require('./views/Competencies/DevRel.html'),
      controller: 'drController',

    }).state({
      name: 'app.dd',
      url: '/dd',
      template: require('./views/Competencies/DivDif.html'),
      controller: 'ddController',

    }).state({
      name: 'app.el',
      url: '/el',
      template: require('./views/Competencies/EngLea.html'),
      controller: 'elController',

    }).state({
      name: 'app.is',
      url: '/is',
      template: require('./views/Competencies/InnSpi.html'),
      controller: 'isController',

    }).state({
      name: 'app.sp',
      url: '/sp',
      template: require('./views/Competencies/StrPer.html'),
      controller: 'spController',

    }).state({
      name: 'app.ps',
      url: '/ps',
      template: require('./views/Competencies/ProSol.html'),
      controller: 'psController',

    }).state({
      name: 'app.dl',
      url: '/dl',
      template: require('./views/Competencies/DirLea.html'),
      controller: 'dlController',

    }).state({
      name: 'app.ei',
      url: '/ei',
      template: require('./views/Competencies/EthInt.html'),
      controller: 'eiController',

    }).state({
      name: 'app.leadership',
      url: '/leadership',
      template: require('./views/Myleadership.html'),
      controller: 'AssessmentController',

    }).state({
      name: 'app.LeadershipFramework',
      url: '/LeadershipFramework',
      template: require('./views/LeadershipFramework.html'),

    }).state({
      name: 'app.Certification',
      url: '/Certification',
      template: require('./views/Certification.html'),

    }).state({
      name: 'app.LeadershipAssessmentInfo',
      url: '/LeadershipAssessmentInfo',
      template: require('./views/LeadershipAssessmentInfo.html'),

    }).state({
      name: 'app.career',
      url: '/career',
      template: require('./views/careers.html'),
      controller: 'AssessmentController',

    }).state({
      name: 'app.networking',
      url: '/networking',
      template: require('./views/networking.html'),
      controller: 'AssessmentController',
    }).state({
      name: 'app.MyActionplan',
      url: '/MyActionplan',
      template: require('./views/MyActionplan.html'),
      controller: 'MyActionplanController',
    });
}

