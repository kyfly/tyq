app.controller(
'WechatArticlesCtrl', ['$scope', 'Article', function ($scope, Article) {
	Article.find(function (articles) {
		$scope.articles = articles;
	});
	$scope.chooseAll = function () {
		$scope.articles.content.forEach(function (article) {
			article.select = !article.select;
		});
	}
	var batchAction = function () {
		var articles = $scope.articles.content;
		var ids = [];
		for(var x in articles) if (articles[x].select === true) {
			ids.push(articles[x].id)
		}
		return ids;
	}
	$scope.synchronize = function () {
		console.log(this)
	}
	$scope.distroy = function () {
		var articles = $scope.articles.content;
		var id = this.article.id;
		articles.forEach(function (article, index) {
			if (article.id === id) {
				articles.splice(index, 1);
			}
		});
	}
	$scope.distroyMore = function () {
		var more = batchAction();
		console.log(more)
	}
	$scope.synchronizeMore = function () {
		var more = batchAction();
		console.log(more)
	}
	$scope.changePage = function (page) {
		console.log(page)
		//$scope.articles = getArticles();
	}
}]);
app.controller(
'WechatArticleCtrl', 
['$scope', '$stateParams', 'Article', '$sce',
function ($scope, $stateParams, Article, $sce) {
	Article.findById({
		id: $stateParams.id
	}, function (article) {
		article.content = $sce.trustAsHtml(article.content);
		$scope.article = article;
	});
}]);
app.controller(
'WechatArticleEditCtrl', 
['$scope', '$stateParams', 'Article', '$sce', 'Ueditor', '$timeout',
function ($scope, $stateParams, Article, $sce, Ueditor, $timeout) {
    $scope.editorConfig = Ueditor.config;
    var edit;
    if ($stateParams.id) {
    	edit = true;
    	Article.findById({
			id: $stateParams.id
		}, function (article) {
			$timeout(function() {
		      $scope.article = article;
		    }, 0);
		});
    } else {
    	edit = false;
    	$scope.article = {};
    }
	$scope.save = function () {
		if (edit) {
			Article.updateById({
				id: $stateParams.id
			},$scope.article, function (res) {
				console.log(res)
			});
		} else {
			Article.create($scope.article, function (res) {
				console.log(res)
			});
		}
	}
}]);

app.controller('WechatAccountCtrl', ['$scope', function ($scope) {
	$scope.config = {
		url: 'http://cms.dmday.cn/wechat/users',
		token: '57Wlt791UGt3VrPGzRbRLaErSXTK1wasznnUs8v1k6X',
		EncodingAESKey: '57Wlt791UGt3VrPGzRbRLaErSXTK1wasznnUs8v1k6X'
	}
}]);