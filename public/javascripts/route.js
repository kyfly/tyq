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
        .state('forumBlacklist', {
            url: '/forum/blacklist',
            templateUrl: '/views/forum/blacklist.html',
            controller: 'ForumBlacklistCtrl'
        })
        .state('userScore',{
            url:'/users/score/:id',
            templateUrl:"/views/users/score.html",
            controller:"UserScoreCtrl"
        })
        .state('forumUserlist', {
            url: '/forum/userlist',
            templateUrl: '/views/forum/userlist.html',
            controller: 'ForumUserlistCtrl'
        })
        .state('forumPublish', {
            url: '/forum/publishes',
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
