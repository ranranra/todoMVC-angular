(function(angular) {
  'use strict';


var myApp=angular.module("myApp",["ngRoute", 'app.controllers.main']);
  myApp.config(["$routeProvider",function($routeProvider){
    $routeProvider
      .when("/:status?",{
        controller:"MainController",
        templateUrl:"main_tmpl"
      })
      .otherwise({
        redirectTo:"/"
      });

  }]);

 /* myApp.controller("MainController",["$scope","$location","$routeParams","$route",function($scope,$location,$routeParams,$route){

    function getId(){
      var id=Math.random();
      for(var i=0;i<$scope.todos.length;i++){
        if($scope.todos[i].id===id){
          id=getId();
          break;
        }
      }
      return id;
    }

    $scope.text="";

    $scope.todos=[
      {id:0.11,text:"吃饭",complete:false},
      {id:0.22,text:"睡觉",complete:false},
      {id:0.33,text:"打豆豆",complete:true}
    ];

    $scope.add=function(){
      if(!$scope.text){
        return;
      }
      $scope.todos.push({
        id:getId(),
        text:$scope.text,
        complete:false
      });
      $scope.text="";
    };

    $scope.remove=function(id){
      for(var i=0;i<$scope.todos.length;i++){
        if($scope.todos[i].id===id){
          $scope.todos.splice(i,1);
          break;
        }
      }
    };

    $scope.clear=function(){
      var arr=[];
      for(var i=0;i<$scope.todos.length;i++){
        if(!$scope.todos[i].complete){
          arr.push($scope.todos[i]);
        }
      }
      $scope.todos=arr;
    };

    $scope.clearShow=function(){
      for(var i=0;i<$scope.todos.length;i++){
        if($scope.todos[i].complete){
          return true;
        }
      }
      return false;
    };

    var now=true;
    $scope.checkAll=function(){
      for(var i=0;i<$scope.todos.length;i++){
        $scope.todos[i].complete=now;
      }
      now=!now;
    };

    $scope.currentEditingId=-1;
    $scope.editing=function(id){
      $scope.currentEditingId=id;
    };
    $scope.save=function(){
      $scope.currentEditingId=-1;
    };

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
      break;
    }

    //filter默认模糊匹配，自定义一个严格的匹配模式
    $scope.compare=function(source,target){
      return source===target;
    }

  }]);
*/
 /* myApp.controller("MainController",["$scope","$location",function($scope,$location){

    function getId(){
      var id=Math.random();
      for(var i=0;i<$scope.todos.length;i++){
        if($scope.todos[i].id===id){
          id=getId();
        }
      }
      return id;
    }

    $scope.text="";

    $scope.todos=[
      {id:0.11,text:"吃饭",complete:false},
      {id:0.22,text:"睡觉",complete:false},
      {id:0.33,text:"打豆豆",complete:true}
    ];

    $scope.add=function(){
      if(!$scope.text){
        return;
      }
      $scope.todos.push({
        id:getId(),
        text:$scope.text,
        complete:false
      });
      $scope.text="";
    };

    $scope.remove=function(id){
      for(var i=0;i<$scope.todos.length;i++){
        if($scope.todos[i].id===id){
          $scope.todos.splice(i,1);
          break;
        }
      }
    };

    $scope.clear=function(){
      var arr=[];
      for(var i=0;i<$scope.todos.length;i++){
        if(!$scope.todos[i].complete){
          arr.push($scope.todos[i]);
        }
      }
      $scope.todos=arr;
    };

    $scope.clearShow=function(){
      for(var i=0;i<$scope.todos.length;i++){
        if($scope.todos[i].complete){
          return true;
        }
      }
      return false;
    };

    var now=true;
    $scope.checkAll=function(){
      for(var i=0;i<$scope.todos.length;i++){
        $scope.todos[i].complete=now;
      }
      now=!now;
    };

    $scope.currentEditingId=-1;
    $scope.editing=function(id){
      $scope.currentEditingId=id;
    };
    $scope.save=function(){
      $scope.currentEditingId=-1;
    };

    $scope.selector={};
    $scope.$location=$location;
    $scope.$watch("$location.path()",function(now,old){
      switch(now){
        case "/active":
          $scope.selector={complete:false};
        break;
        case "/completed":
          $scope.selector={complete:true};
        break;
        default:
          $scope.selector={};
        break;
      }
    });

    //filter默认模糊匹配，自定义一个严格的匹配模式
    $scope.compare=function(source,target){
      return source===target;
    }

  }]);*/

})(angular);
