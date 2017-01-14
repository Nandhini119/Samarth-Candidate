/* RegisterCtrl controller -> responsible for authentication and having $state,
 $auth as dependencies*/
angular.module('sm-candidateprofile')
    .controller('RegisterCtrl', [
        '$auth',
        '$state',
        'Flash',
        'professionService',
        function($auth,
            $state,
            Flash,
            professionService) {
            let vm = this;
            vm.user = {};


            professionService.profession()
                .then(function success(response) {
                    //console.log(response);
                    vm.professions = response.data;
                }, function error(error) {
                    console.log("Error on inserting data");
                });


            /* Login() function which will be actually called in the associated view for
            registering the user*/
            vm.register = function __register() {
                /* $auth.signup() is a predefined function provided by satellizer for
                initiating registration
                of the user . This returns a promise and accepts an object with all the
                required fields which
                needs to be sent to the api for registration

                NOTE :- To change the registration api endpoint/URI , please override
                $authProvider.signupUrl with new
                value in /auth/authmodule.js */
                $auth.signup({

                    name: vm.user.name,
                    adharcard: vm.user.adharcard,
                    mobile: vm.user.number,
                    email: vm.user.email,
                    location: vm.user.location,
                    pwd: vm.user.password,
                    profession: vm.user.profession

                }).then(function() {
                    let message = 'Successfully completed registration..!';
                    Flash.create('success', message);
                    // redirects to a mentioned state if successfull
                    $state.go('candidate.dashboard');
                }).catch(function() {
                    let message = 'Some Error ! Please Try Again';
                    Flash.create('danger', message);
                });
                // $auth.signup ends
            };
        }
    ]);
