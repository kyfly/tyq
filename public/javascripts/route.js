app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/MS/wechat/article');
    $stateProvider
        .state('userInfo', {
            url: '/MS/user/info',
            templateUrl: '/views/users/info.html',
            controller: 'UserInfoCtrl',
            stateIndex: 0,
            type: 2
        })
        .state('userBlacklist', {
            url: '/MS/user/blacklist',
            templateUrl: '/views/users/blacklist.html',
            controller: 'UserBlacklistCtrl',
            stateIndex: 1,
            type: 2
        })
        .state('userScore',{
        url:'/MS/user/score/:id',
            templateUrl:"/views/users/score.html",
            controller:"UserScoreCtrl",
            stateIndex: 0,
            type: 2
    })
        .state('forumUserlist', {
            url: '/MS/forum/userlist',
            templateUrl: '/views/forum/userlist.html',
            controller: 'ForumUserlistCtrl',
            stateIndex: 0,
            type: 3
        })
        .state('forumPublish', {
            url: '/MS/forum/publish',
            templateUrl: '/views/forum/publish.html',
            controller: 'ForumPublishCtrl',
            stateIndex: 1,
            type: 3
        })
        .state('forumTopic', {
            url: '/MS/forum/topic',
            templateUrl: '/views/forum/topic.html',
            controller: 'ForumTopicCtrl',
            stateIndex: 2,
            type: 3
        })
        .state('forumNotice', {
            url: '/MS/forum/notice',
            templateUrl: '/views/forum/notice.html',
            controller: 'ForumNoticeCtrl',
            stateIndex: 3,
            type: 3
        })
        .state('wechatArticle', {
            url: '/MS/wechat/article',
            templateUrl: '/views/wechat/article.html',
            controller: 'WechatArticleCtrl',
            stateIndex: 0,
            type: 1
        })

});
