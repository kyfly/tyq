app.controller('IndexCtrl', ['$scope', function ($scope) {
//侧边栏显示内容
    $scope.sidebars = [
        {
            'id': 'sidebarHome',
            'display_name': '首页',
            'url': '/MS/home'
        },
        {
            'id': 'sidebarWechatArticle',
            'display_name': '文章管理',
            'url': '/MS/wechat/article'
        },
        {
            'id': 'sidebarUserList',
            'display_name': '用户列表',
            'url': '/MS/user/list'
        },
        {
            'id': 'sidebarUserBlacklist',
            'display_name': '用户黑名单',
            'url': '/MS/user/blacklist'
        },
        {
            'id': 'sidebarUserInfo',
            'display_name': '用户详情',
            'url': '/MS/user/info'
        },
        {
            'id': 'sidebarUserScheme',
            'display_name': '控糖方案',
            'url': '/MS/user/scheme'
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
        },
        {
            'id': 'sidebarStatistics',
            'display_name': '统计',
            'url': '/MS/statistics'
        }
    ];
    //跳转函数，包括操作侧边栏按钮和跳转至相应页面
    //这里可以试试css选择器
    $scope.redirect = function (index) {
        for (var i = 0; i < $scope.sidebars.length; i++) {
            $scope.sidebars[i].active = false;
        }
        $scope.sidebars[index].active = true;

        $('.button-collapse').sideNav('hide');
    };

}]);

app.controller('HomeCtrl', ['$scope', function ($scope) {

}]);