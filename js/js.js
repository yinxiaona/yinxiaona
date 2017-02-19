//主页面
var app=angular.module("foodApp",['ui.router']);
app.controller("foodCtrl",['$scope',"$http",function($scope,$http){
	$scope.flag=false;
	$scope.items='';
	$scope.change=function(item){
			$scope.flag=$scope.items==item?!$scope.flag:false;
			$scope.items=item;

			if(!$scope.flag){
				$(".bigbox").show();
			}else{
				$(".bigbox").hide();
			}

			}


	//三角样式
	$scope.getClass=function(ite){
				if($scope.items==ite){
					return $scope.flag;
				}else{
					return !$scope.flag;
				}
		}
	//获取区属
	$http.get("js/restaurants.json")
			.success(function(data){
			$scope.data=data;
			console.log($scope.data)
			})


	//实现点击遮罩层将盒子隐藏
	$scope.remove=function(){
		$scope.flag=true;
		$(".bigbox").hide();

	}



}])

app.run(function($rootScope){
	$rootScope.title='排序';
})


app.config(function($stateProvider,$urlRouterProvider){

			$urlRouterProvider.when("",'index.html');
			$stateProvider
				.state('food',{
					url:'/food',  //显示在地址栏里面
					templateUrl:'./page/food.html',

				})
				.state('sort',{
					url:'/sort',
					templateUrl:'./page/sort.html',
					controller:'sorts'
				})
				.state('filter',{
					url:'/filter',
					templateUrl:'./page/filter.html',
				})

		})

app.controller("sorts",function($scope,$rootScope){
	//排序
	$scope.change=function(items){
		$rootScope.title=items;
	}

})




