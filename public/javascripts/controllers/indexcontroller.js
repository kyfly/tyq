app.controller('IndexCtrl', ['$scope', function ($scope) {
    $scope.$on('$stateChangeStart', function (evt, next) {
        if (next.name !== 'index')
            $scope.redirect(next.stateIndex, next.type);
    });

//侧边栏显示内容
    $scope.sidebars1 = [
        {
            'id': 'sidebarWechatArticle',
            'display_name': '文章管理',
            'url': '/MS/wechat/article'
        }
    ];

    $scope.sidebars2 = [
        {
            'id': 'sidebarUserInfo',
            'display_name': '用户详情',
            'url': '/MS/user/info'
        },
        {
            'id': 'sidebarUserBlacklist',
            'display_name': '用户黑名单',
            'url': '/MS/user/blacklist'
        }

    ];

    $scope.sidebars3 = [
        {
            'id': 'sidebarForumUserlist',
            'display_name': '用户列表',
            'url': '/MS/forum/userlist'
        },
        {
            'id': 'sidebarForumPublish',
            'display_name': '发表话题   ',
            'url': '/MS/forum/publish'
        },
        {
            'id': 'sidebarForumTopic',
            'display_name': '话题管理',
            'url': '/MS/forum/topic'
        },
        {
            'id': 'sidebarForumNotice',
            'display_name': '公告管理',
            'url': '/MS/forum/notice'
        }
    ];
    //跳转函数，包括操作侧边栏按钮和跳转至相应页面
    //这里可以试试css选择器
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
