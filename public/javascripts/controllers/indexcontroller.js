app.controller('IndexCtrl', ['$scope', function ($scope) {
    $scope.$on('$stateChangeStart', function (evt, next) {
        $scope.path = next.url;
    });

    //菜单项
    $scope.sidebars = [{
        name: '微信管理',
        icon: 'mdi-file-cloud-circle',
        subM: [{
            id: 'sidebarWechatArticle',
            name: '公众号',
            url: '/weixin/public-number'
        }, 
        {
            id: 'sidebarWechatArticle',
            name: '文章管理',
            url: '/weixin/article'
        }]
    },{
        name: '用户管理',
        icon: 'mdi-social-person',
        subM: [{
            id: 'sidebarUserInfo',
            name: '平台客服',
            url: '/users/service'
        },
        {
            id: 'sidebarUserInfo',
            name: '平台用户',
            url: '/users/wechat'
        },
        {
            id: 'sidebarUserBlacklist',
            name: '黑名单',
            url: '/users/blacklist'
        }]
    },{
        name: '论坛管理',
        icon: 'mdi-communication-forum',
        subM: [{
            id: 'sidebarForumUserlist',
            name: '论坛用户',
            url: '/users/forum'
        },
        {
            id: 'sidebarForumPublish',
            name: '发表话题',
            url: '/forum/publishs'
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
    },{
        name: '商城管理',
        icon: 'mdi-communication-forum',
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

    $scope.redirect = function (index, key) {
        for (var i = 0; i < $scope.sidebars1.length; i++) {
            $scope.sidebars1[i].active = false;
        }
        for (var j = 0; j < $scope.sidebars2.length; j++) {
            $scope.sidebars2[j].active = false;
        }
        for (var k = 0; k < $scope.sidebars3.length; k++) {
            $scope.sidebars3[k].active = false;
        }
        switch (key) {
            case 1:
                $scope.sidebars1[index].active = true;
                break;
            case 2:
                $scope.sidebars2[index].active = true;
                break;
            case 3:
                $scope.sidebars3[index].active = true;
                break;
            default:
                $scope.sidebars1[0].active = true;
        }
        $('.button-collapse').sideNav('hide');
    };

}]);
