(function(angular) {
  'use strict';

    angular.module("app.services.main",[])
    .service("MainService",["$window",function($window){

      var storage=$window.localStorage;
      var todos=storage["my_todo_list"]?JSON.parse(storage["my_todo_list"]):[];

      function getId(){
        var id=Math.random();
        for(var i=0;i<todos.length;i++){
          if(todos[i].id===id){
            id=getId();
          }
        }
        return id;
      }

      function save(){
        storage["my_todo_list"]=JSON.stringify(todos)
      }

      this.get=function(){
        return todos;
      }

      this.add=function(text){
        todos.push({
          id:getId(),
          text:text,
          complete:false
        });
        save();
      };

      this.remove=function(id){
        for(var i=0;i<todos.length;i++){
          if(todos[i].id===id){
            todos.splice(i,1);
            break;
          }
        }
        save();
      };

      this.clear=function(){
        var arr=[];
        for(var i=0;i<todos.length;i++){
          if(!todos[i].complete){
            arr.push(todos[i]);
          }
        }
        todos=arr;
        save();
        return todos;
      };

      this.clearShow=function(){
        for(var i=0;i<todos.length;i++){
          if(todos[i].complete){
            return true;
          }
        }
        return false;
        save();
      };

      this.update = function() {
        save();
      };

      var now=true;
      this.checkAll=function(){
        for(var i=0;i<todos.length;i++){
          todos[i].complete=now;
        }
        now=!now;
        save();
      };

  }]);
})(angular);