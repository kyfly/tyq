app.controller('IndexCtrl', ['$scope', function ($scope) {
    $scope.$on('$stateChangeStart', function (evt, next) {
        $scope.path = next.url;
    });

    //菜单项
    $scope.sidebars = [{
        name: '微信管理',
        icon: 'mdi-file-cloud-circle',
        subM: [
            {
                id: 'sidebarWechatAccount',
                name: '公众号',
                url: '/weixin/account'
            },
            {
                id: 'sidebarWechatArticle',
                name: '文章管理',
                url: '/weixin/articles'
            }]
    }, {
        name: '用户管理',
        icon: 'mdi-social-person',
        subM: [
            {
                id: 'sidebarUserService',
                name: '平台客服',
                url: '/users/service'
            },
            {
                id: 'sidebarUserInfo',
                name: '平台用户',
                url: '/users/wechat'
            }]
    }, {
        name: '论坛管理',
        icon: 'mdi-communication-forum',
        subM: [
            {
                id: 'sidebarForumUserlist',
                name: '论坛用户',
                url: '/forum/userlist'
            },
            {
                id: 'sidebarForumBlacklist',
                name: '黑名单',
                url: '/forum/blacklist'
            },
            {
                id: 'sidebarForumPublish',
                name: '发表话题',
                url: '/forum/publishes'
            },
            {
                id: 'sidebarForumTopic',
                name: '话题管理',
                url: '/forum/topics'
            },
            {
                id: 'sidebarForumNotice',
                name: '公告管理',
                url: '/forum/notices'
            }]
    }, {
        name: '商城管理',
        icon: 'mdi-action-shopping-cart',
        subM: [{
            id: 'sidebarReleaseOfGoods',
            name: '商品上传',
            url: '/goods/release'
        },
            {
                id: 'sidebarOrderForGoods',
                name: '订单管理',
                url: '/goods/orders'
            }]
    }];
}]);
