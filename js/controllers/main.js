(function(angular) {
  'use strict';

    var controllers=angular.module("app.controllers.main",["app.services.main"]);

    controllers.controller("MainController",["$scope","$location","$routeParams","$route","MainService",function($scope,$location,$routeParams,$route,MainService){

   
    $scope.text="";

    $scope.todos=MainService.get();

    $scope.add=function(){
      if(!$scope.text){
        return;
      } 
      MainService.add($scope.text);
      $scope.text="";
    };

    $scope.remove= MainService.remove;

    $scope.clear=function(){
      var newTodos=MainService.clear();
      $scope.todos=newTodos;
    };

    $scope.clearShow=MainService.clearShow;

    $scope.checkAll=MainService.checkAll;

    $scope.currentEditingId=-1;
    $scope.editing=function(id){
      $scope.currentEditingId=id;
    };
    $scope.save=function(){
      $scope.currentEditingId=-1;
    };

    $scope.toggle = function() {
        MainService.update();
    }


    $scope.selector={};
    var status=$routeParams.status;

    switch(status){
      case "active":
        $scope.selector={complete:false};
      break;
      case "completed":
        $scope.selector={complete:true};
      break;
      default:
        $route.updateParams({status:""});
        $scope.selector={};
      break;
    }

    //filter默认模糊匹配，自定义一个严格的匹配模式
    $scope.compare=function(source,target){
      return source===target;
    }

  }]);
})(angular);