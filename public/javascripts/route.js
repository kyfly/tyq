app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/weixin/account');
    $stateProvider
        .state('wechatUsers', {
            url: '/users/wechat',
            templateUrl: '/views/users/info.html',
            controller: 'UserInfoCtrl'
        })
        .state('serviceUsers', {
            url: '/users/service',
            templateUrl: '/views/users/service.html',
            controller: 'UserServiceCtrl'
        })
        .state('userScore',{
            url:'/users/score/:id',
            templateUrl:"/views/users/score.html",
            controller:"UserScoreCtrl"
        })
        .state('userDetail',{
            url:'/users/detail/:id',
            templateUrl:"/views/users/detail.html",
            controller:"UserDetailCtrl"
        })
        .state('userDetail.health', {
            url: '/health',
            templateUrl: '/views/users/detail/health.html'
        })
        .state('userDetail.check', {
            url: '/check',
            templateUrl: '/views/users/detail/check.html'
        })
        .state('userDetail.scheme', {
            url: '/scheme',
            templateUrl: '/views/users/detail/scheme.html'
        })
        .state('userDetail.dialogue', {
            url: '/dialogue',
            templateUrl: '/views/users/detail/dialogue.html'
        })
        .state('userDetail.BG', {
            url: '/BG',
            templateUrl: '/views/users/detail/BGinfo.html'
        })
        .state('forumUserlist', {
            url: '/forum/userlist',
            templateUrl: '/views/forum/userlist.html',
            controller: 'ForumUserlistCtrl'
        })
        .state('forumBlacklist', {
            url: '/forum/blacklist',
            templateUrl: '/views/forum/blacklist.html',
            controller: 'ForumBlacklistCtrl'
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
        .state('wechatArticles', {
            url: '/weixin/articles',
            templateUrl: '/views/wechat/articles.html',
            controller: 'WechatArticlesCtrl'
        })
        .state('wechatArticleCreate', {
            url: '/weixin/articles/create',
            templateUrl: '/views/wechat/edit.html',
            controller: 'WechatArticleEditCtrl'
        })
        .state('wechatArticle', {
            url: '/weixin/articles/:id',
            templateUrl: '/views/wechat/article.html',
            controller: 'WechatArticleCtrl'
        })
        .state('wechatArticleEdit', {
            url: '/weixin/articles/:id/edit',
            templateUrl: '/views/wechat/edit.html',
            controller: 'WechatArticleEditCtrl'
        })
        .state('wechatAccount', {
            url: '/weixin/account',
            templateUrl: '/views/wechat/account.html',
            controller: 'WechatAccountCtrl'
        })
        .state('releaseOfGoods', {
            url: '/goods/release',
            templateUrl: '/views/store/release.html',
            controller: 'StoreReleaseCtrl'
        })
        .state('orderForGoods', {
            url: '/goods/orders',
            templateUrl: '/views/store/order.html',
            controller: 'StoreOrderCtrl'
        })
});
