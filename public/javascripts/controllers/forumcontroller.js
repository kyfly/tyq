app.controller('ForumUserlistCtrl', ['$scope', function ($scope) {
    $scope.userList = [{
        id: 1,
        headImgUrl: "/lib/img/weixin.jpg",
        name: "sm",
        score: 20,
        level: 20,
        comments: 20,
        replies: 30
    }, {
        id: 2,
        headImgUrl: "/lib/img/weixin.jpg",
        name: "sm",
        score: 20,
        level: 20,
        comments: 20,
        replies: 30
    }, {
        id: 3,
        headImgUrl: "/lib/img/weixin.jpg",
        name: "sm",
        score: 20,
        level: 20,
        comments: 20,
        replies: 30
    }];
}]);

app.controller('ForumBlacklistCtrl', ['$scope', function ($scope) {
    $scope.blacklist = [{
        id: 1,
        headImgUrl: "/lib/img/weixin.jpg",
        name: "sm",
        score: 20,
        level: 20,
        comments: 20,
        replies: 30
    }, {
        id: 2,
        headImgUrl: "/lib/img/weixin.jpg",
        name: "sm",
        score: 20,
        level: 20,
        comments: 20,
        replies: 30
    }, {
        id: 3,
        headImgUrl: "/lib/img/weixin.jpg",
        name: "sm",
        score: 20,
        level: 20,
        comments: 20,
        replies: 30
    }];
}]);

app.controller('ForumPublishCtrl', ['$scope', 'Ueditor', function ($scope, Ueditor) {
    $scope.editorConfig = {
        serverUrl: "/ue/uploads",
        toolbars: [[
            'fullscreen', 'source', '|', 'undo', 'redo', '|',
            'bold', 'italic', 'underline', 'fontborder', 'strikethrough', '|',
            'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|',
            'simpleupload', 'insertimage', 'attachment', 'insertvideo', 'music'
        ]],
        initialFrameHeight: 300,
        //关闭字数统计
        wordCount: false,
        //关闭elementPath
        elementPathEnabled: false,
        //关闭右键菜单功能
        enableContextMenu: false
    };
    $scope.article = {};
    $scope.createArticle = function () {

        var content = $scope.articleEditorContent;
        var title = $scope.article.title;

        if (!content || !title) {
            Materialize.toast('文章标题和内容都不能为空', 2000);
            return;
        }
        $http({
            url: '/ue/uploads?dir=user&id=' + $scope.$currentUser.id + '&action=uploadtext',
            method: "post",
            data: {
                'content': $scope.articleEditorContent
            }
        }).success(function (res) {
            $scope.article.contentUrl = res.url;
            $scope.article.created = new Date();
            $scope.article.coterieId = $stateParams.id;

        });
    }

}]);

app.controller('ForumTopicCtrl', ['$scope', function ($scope) {
    $scope.peopleInfo = [
        {
            id: "name1",
            imgSrc: "/lib/img/weixin.jpg",
            name: "李畅",
            time: "2016.2.9 12时18分",
            title: "新人在此！！！",
            content: "大家好，我是新人",
            contentImg: "",
            numberOfReader: "55",
            numberOfLike: "55",
            numberOfComment: "100"
        },
        {
            id: "name2",
            imgSrc: "/lib/img/weixin.jpg",
            name: "金老师",
            time: "2016.2.9 12时16分",
            title: "21岁 一型糖尿病",
            content: "刚确诊了，分手了 双重打击 有没有类似于群这样的 我加一个",
            contentImg: "/lib/img/testImg1.png",
            numberOfReader: "67",
            numberOfLike: "44",
            numberOfComment: "34"
        },
        {
            id: "name3",
            imgSrc: "/lib/img/weixin.jpg",
            name: "刘建东",
            time: "2016.2.9 10时18分",
            title: "测试测试",
            content: "这里是一次测试，请勿回复！！",
            contentImg: "",
            numberOfReader: "23",
            numberOfLike: "3",
            numberOfComment: "0"
        }
    ];
}]);

app.controller('ForumNoticeCtrl', ['$scope', function ($scope) {

}]);