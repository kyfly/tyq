app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/MS/home');
    $stateProvider
        .state('home', {
            url: '/MS/home',
            templateUrl: '/views/home.html',
            controller: 'HomeCtrl'
        })
        .state('userList', {
            url: '/MS/user/list',
            templateUrl: '/views/users/list.html',
            controller: 'UserListCtrl'
        })
        .state('userBlacklist', {
            url: '/MS/user/blacklist',
            templateUrl: '/views/users/blacklist.html',
            controller: 'UserBlacklistCtrl'
        })
        .state('userInfo', {
            url: '/MS/user/info',
            templateUrl: '/views/users/info.html',
            controller: 'UserInfoCtrl'
        })
        .state('userScheme', {
            url: '/MS/user/scheme',
            templateUrl: '/views/users/scheme.html',
            controller: 'UserSchemeCtrl'
        })
        /*
        用户积分管理
         */
        .state('userScore',{
        url:'/MS/user/score/:id',
            templateUrl:"/views/users/score.html",
            controller:"UserScoreCtrl"
    })
        .state('forumPublish', {
            url: '/MS/forum/publish',
            templateUrl: '/views/forum/publish.html',
            controller: 'ForumPublishCtrl'
        })
        .state('forumTopic', {
            url: '/MS/forum/topic',
            templateUrl: '/views/forum/topic.html',
            controller: 'ForumTopicCtrl'
        })
        .state('forumNotice', {
            url: '/MS/forum/notice',
            templateUrl: '/views/forum/notice.html',
            controller: 'ForumNoticeCtrl'
        })
        .state('wechatArticle', {
            url: '/MS/wechat/article',
            templateUrl: '/views/wechat/article.html',
            controller: 'WechatArticleCtrl'
        })
        .state('statistics', {
            url: '/MS/statistics',
            templateUrl: '/views/statistics/statistics.html',
            controller: 'StatisticsCtrl'
        })

});
