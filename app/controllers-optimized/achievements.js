define(["angularApp"],function(e){e.controller("AchievementsCtrl",["$scope","$interval","$timeout",function(e,t,n){e.setInt=function(){t(game.coreLoop,game.options.interval),log("Core loop interval set.")},e.init=function(){game.options.angularInit||(game.options.angularInit=!0,e.setInt()),game.achievements.angularInit()},n(e.init)}])});