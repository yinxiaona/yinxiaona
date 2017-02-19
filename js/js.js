//主页面
var app=angular.module("foodApp",['ui.router']);
app.controller("foodCtrl",['$scope',"$http",function($scope,$http){
	$scope.flag=false;
	$scope.items='';
	$scope.change=function(item){
			$scope.flag=$scope.items==item?!$scope.flag:false;
			$scope.items=item;
			if(!$scope.flag){
				$(".aside").fadeIn();
			}else{
				$(".aside").fadeOut();
			}
			}

	$scope.getClass=function(ite){
				if($scope.items==ite){
					return $scope.flag;
				}else{
					return !$scope.flag;
				}
		}

	$http.get("js/restaurants.json")
			.success(function(data){
			$scope.data=data;
			console.log($scope.data)
			})


	//实现下拉的功能
	$scope.remove=function(){
		$(".aside").hide();
	}

}])


app.config(function($stateProvider,$urlRouterProvider){

			$urlRouterProvider.when("",'index.html');
			$stateProvider
				.state('food',{
					url:'/food',  //显示在地址栏里面
					templateUrl:'./page/food.html',
					controller:'foods',

				})
				.state('sort',{
					url:'/sort',
					templateUrl:'./page/sort.html',
					controller:'sort',
					resolve:{
						query:function($http){
							return $http.get("js/restaurants.json")
						}
					}
				})
				.state('filter',{
					url:'/filter',
					templateUrl:'./page/filter.html'
				})

		})

//sort页面
var Sapp=angular.module("foodList",['ui.router']);

	Sapp.config(function($stateProvider,$urlRouterProvider){

		console.log($stateProvider)
			// .state("")
	})

