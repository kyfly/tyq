app.controller(
'WechatArticleCtrl', ['$scope', function ($scope) {
	$scope.articles = getArticles();
	$scope.chooseAll = function () {
		$scope.articles.content.forEach(function (article) {
			article.select = true;
		});
	}
	$scope.batchAction = function () {
		var articles = $scope.articles.content;
		for(var x in articles) if (articles[x].select === true) {
			console.log(articles[x].id)
		}
	}
	$scope.changePage = function (page) {
		console.log(page)
		$scope.articles = getArticles();
	}
	function getArticles() {
		var articles = [];
		for (var i = 0; i < 10; i ++)
		{
			var article = {
		       "id": i,
		       "title": "更多精彩请关注我们官方微信号",
		       "thumb_media_id": 'THUMB_MEDIA_ID',
		       "thumb_url": 'THUMB_URL',
		       "show_cover_pic": 1,
		       "author": 'AUTHOR',
		       "digest": 'DIGESTDIGESTDIGESTDIGESTDIGESTDIGESTDIGESTDIGESTDIGESTDIGESTDIGESTDIGESTDIGESTDIGESTDIGEST'
		    }
		    articles.push(article);
		}
		return {
			total: 300,
			count: 10,
			content: articles
		}
	}
}]);

app.controller('WechatAccountCtrl', ['$scope', function ($scope) {
}]);