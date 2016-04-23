app.controller(
'WechatArticleCtrl', ['$scope', function ($scope) {
	$scope.articles = getArticles();
	function getArticles() {
		var articles = [];
		for (var i = 0; i < 20; i ++)
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
			count: 20,
			content: articles
		}
	}
}]);

app.controller('WechatAccountCtrl', ['$scope', function ($scope) {
}]);