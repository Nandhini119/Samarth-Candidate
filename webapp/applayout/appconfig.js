/* sm-candidateprofile Module is in root folder in smcandidateprofile.js */
angular.module('sm-candidateprofile')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        // console.log('inside appconfig');
        // Url routing starts here
        $urlRouterProvider.when('/','/home/login');
        $urlRouterProvider.otherwise('/home/login');
        $stateProvider
            .state('candidate', {               
             url: '/home',
                views: {
                    'content@': {
                        templateUrl: '/applayout/templates/content.html'
                    },
                    navbar: {
                        templateUrl: '/applayout/templates/navbar.html',
                        controller: 'navCtrl'
                    },
                    footer: {
                        templateUrl: '/applayout/templates/footer.html'
                    }
                }
            });
           
        // redirects to login page if user request a non-existing state
        
    }]);

/* NOTE :- home state child  routes are in candidatehome/candidatehomemodules.js
          config for overridding satellizer properties is defined in auth/authmodule.js
*/