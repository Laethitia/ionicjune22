//inonic.native is a string and it will lokk for a a specific string called 

angular.module('starter.controllers', ["ionic.native"])


.controller('DashCtrl', function($scope) {})


//tasks is a factory you are calling up on in 
.controller('TasksCtrl', function($scope, Tasks, $ionicModal, $cordovaLocalNotifications, $cordovaInAppBrowser) {
  $scope.tasks = Tasks.all();
  $scope.remove = function(task) {
    Tasks.remove(task);
    $cordovaLocalNotifications.schedule({
       id: 1,
       text: 'Single ILocalNotification',

    })
  };
  // you are opening up a browser and it will open up google.com
    $scope.openBrowser=function(){
      $cordovaInAppBrowser.create("https://www.google.com")
    }

  $ionicModal.fromTemplateUrl("templates/modal.html", {
    scope: $scope,
    animation: "slide-in-up"
  }).then(function(modal){
    $scope.modal = modal;
  });

//given you input so you can enter for the description and task
//scope. new is an object that we have appended in the ng-module in the form 
  $scope.new = {
    taskName: "",
    taskDesc: ""
  };
  //
    $scope.newTask = function(){

    //once the scope is done, it is going to do a toast for a native cordova functionality. then the Modal is going to hide once you have 
    //native functionality does not work in the browser, you have to test it on a emunilator
    //emulator to test-- jenymotion personal
        if(Tasks.create($scope.new)){
          $cordovaToast.show("Task Created", "short", "bottom");
          $scope.modal.hide();
        }
    }

})

.controller('TaskDetailCtrl', function($scope, $stateParams, Tasks) {
  $scope.task = Tasks.get($stateParams.taskId);
})

.controller('AccountCtrl', function($scope) {});
