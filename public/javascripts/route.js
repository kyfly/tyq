app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/weixin/article');
    $stateProvider
        .state('wechatUsers', {
            url: '/users/wechat',
            templateUrl: '/views/users/info.html',
            controller: 'UserInfoCtrl'
        })
        .state('serviceUsers', {
            url: '/users/service',
            templateUrl: '/views/users/info.html',
            controller: 'UserInfoCtrl'
        })
        .state('userBlacklist', {
            url: '/users/blacklist',
            templateUrl: '/views/users/blacklist.html',
            controller: 'UserBlacklistCtrl'
        })
        .state('userScore',{
            url:'/user/score/:id',
            templateUrl:"/views/users/score.html",
            controller:"UserScoreCtrl"
        })
        .state('forumUserlist', {
            url: '/users/forum',
            templateUrl: '/views/forum/userlist.html',
            controller: 'ForumUserlistCtrl'
        })
        .state('forumPublish', {
            url: '/forum/publishs',
            templateUrl: '/views/forum/publish.html',
            controller: 'ForumPublishCtrl'
        })
        .state('forumTopic', {
            url: '/forum/topics',
            templateUrl: '/views/forum/topic.html',
            controller: 'ForumTopicCtrl'
        })
        .state('forumNotice', {
            url: '/forum/notices',
            templateUrl: '/views/forum/notice.html',
            controller: 'ForumNoticeCtrl'
        })
        .state('wechatArticle', {
            url: '/weixin/article',
            templateUrl: '/views/wechat/article.html',
            controller: 'WechatArticleCtrl'
        })
        .state('wechatNumber', {
            url: '/weixin/public-number',
            templateUrl: '/views/wechat/article.html',
            controller: 'WechatArticleCtrl'
        })
        .state('releaseOfGoods', {
            url: '/goods/release',
            templateUrl: '/views/wechat/article.html',
            controller: 'WechatArticleCtrl'
        })
        .state('orderForGoods', {
            url: '/goods/orders',
            templateUrl: '/views/wechat/article.html',
            controller: 'WechatArticleCtrl'
        })
});
