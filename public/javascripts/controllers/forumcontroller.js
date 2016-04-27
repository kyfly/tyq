app.controller('ForumUserlistCtrl', ['$scope', function ($scope) {
    $scope.userList = [{
        id: 1,
        headImgUrl: "/img/weixin.jpg",
        name: "sm",
        score: 20,
        level: 20,
        comments: 20,
        replies: 30
    }, {
        id: 2,
        headImgUrl: "/img/weixin.jpg",
        name: "sm",
        score: 20,
        level: 20,
        comments: 20,
        replies: 30
    }, {
        id: 3,
        headImgUrl: "/img/weixin.jpg",
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
        headImgUrl: "/img/weixin.jpg",
        name: "sm",
        score: 20,
        level: 20,
        comments: 20,
        replies: 30
    }, {
        id: 2,
        headImgUrl: "/img/weixin.jpg",
        name: "sm",
        score: 20,
        level: 20,
        comments: 20,
        replies: 30
    }, {
        id: 3,
        headImgUrl: "/img/weixin.jpg",
        name: "sm",
        score: 20,
        level: 20,
        comments: 20,
        replies: 30
    }];
}]);

app.controller('ForumPublishCtrl', ['$scope', 'Ueditor', function ($scope, Ueditor) {
    $scope.editorConfig = Ueditor.config;
    $scope.publishItem = {};
    $scope.publishTopic = function () {
        var content = $scope.publishEditorContent;
        var title = $scope.publishItem.title;

        if (!content || !title) {
            Materialize.toast('文章标题和内容都不能为空', 2000);
            return;
        }
        console.log(content);
        console.log(title);
        //$http({
        //    url: '/ue/uploads?dir=user&id=' + $scope.$currentUser.id + '&action=uploadtext',
        //    method: "post",
        //    data: {
        //        'content': $scope.articleEditorContent
        //    }
        //}).success(function (res) {
        //
        //
        //});
    }

}]);

app.controller('ForumTopicCtrl',['$scope','Topic',function ($scope,Topic) {
    Topic.find({},
        function (topics) {
        $scope.topics = topics;
    });


    //$scope.peopleInfo = [
    //    {
    //        id: "name1",
    //        imgSrc: "/img/weixin.jpg",
    //        name: "李畅",
    //        time: "2016.2.9 12时18分",
    //        title: "新人在此！！！",
    //        content: "大家好，我是新人",
    //        contentImg: "",
    //        numberOfReader: "55",
    //        numberOfLike: "55",
    //        numberOfComment: "100"
    //    },
    //    {
    //        id: "name2",
    //        imgSrc: "/img/weixin.jpg",
    //        name: "金老师",
    //        time: "2016.2.9 12时16分",
    //        title: "21岁 一型糖尿病",
    //        content: "刚确诊了，分手了 双重打击 有没有类似于群这样的 我加一个",
    //        contentImg: "/img/testImg1.png",
    //        numberOfReader: "67",
    //        numberOfLike: "44",
    //        numberOfComment: "34"
    //    },
    //    {
    //        id: "name3",
    //        imgSrc: "/img/weixin.jpg",
    //        name: "刘建东",
    //        time: "2016.2.9 10时18分",
    //        title: "测试测试",
    //        content: "这里是一次测试，请勿回复！！",
    //        contentImg: "",
    //        numberOfReader: "23",
    //        numberOfLike: "3",
    //        numberOfComment: "0"
    //    }
    //];

    $scope.choseArr = [];//定义数组用于存放前端显示
    var str = "";//
    var flag = '';//是否点击了全选，是为a
    $scope.x = false;//默认未选中
    $scope.all = function (c, v) {//全选
        if (c == true) {
            $scope.x = true;
            $scope.choseArr = v;
        } else {
            $scope.x = false;
            $scope.choseArr = [""];
        }
        flag = 'a';
    };
    $scope.chk = function (z, x) {//单选或者多选
        if (flag == 'a') {//在全选的基础上操作
            str = $scope.choseArr.join();
        }
        if (x == true) {//选中
            str = str + z + ',';
        } else {
            str = str.replace(z + ',', '');//取消选中
        }
        $scope.choseArr = (str.substr(0, str.length - 1)).split(',');
    };
    $scope.delete = function () {// 操作CURD
        if ($scope.choseArr[0] == "" || $scope.choseArr.length == 0) {//没有选择一个的时候提示
            Materialize.toast("请至少选中一条数据再操作!", 2000);
            return;
        }
        for (var i = 0; i < $scope.choseArr.length; i++) {
            //alert($scope.choseArr[i]);
            console.log($scope.choseArr[i]);//遍历选中的id
        }
    };
}]);

app.controller('ForumNoticeCtrl', ['$scope', function ($scope) {
    $scope.noticeList = [{
        id:0,
        time: "2015.0422",
        content: "这是一次测试"
    }, {
        id:1,
        time: "2015.0522",
        content: "另外一次测试"
    }, {
        id:2,
            time: "2016.0422",
            content: "最后次测试"
        }];
    $scope.choseArr = [];//定义数组用于存放前端显示
    var str = "";//
    var flag = '';//是否点击了全选，是为a
    $scope.x = false;//默认未选中
    $scope.all = function (c, v) {//全选
        if (c == true) {
            $scope.x = true;
            $scope.choseArr = v;
        } else {
            $scope.x = false;
            $scope.choseArr = [""];
        }
        flag = 'a';
    };
    $scope.chk = function (z, x) {//单选或者多选
        if (flag == 'a') {//在全选的基础上操作
            str = $scope.choseArr.join();
        }
        if (x == true) {//选中
            str = str + z + ',';
        } else {
            str = str.replace(z + ',', '');//取消选中
        }
        $scope.choseArr = (str.substr(0, str.length - 1)).split(',');
    };
}]);
app.controller('ForumBlacklistCtrl', ['$scope', function ($scope) {

    $scope.blackList = [{
        id: 1,
        headImgUrl: "/img/weixin.jpg",
        name: "sm",
        score: 20,
        level: 20,
        comments: 20,
        replies: 30
    }, {
        id: 2,
        headImgUrl: "/img/weixin.jpg",
        name: "sm",
        score: 20,
        level: 20,
        comments: 20,
        replies: 30
    }, {
        id: 3,
        headImgUrl: "/img/weixin.jpg",
        name: "sm",
        score: 20,
        level: 20,
        comments: 20,
        replies: 30
    }];
    $scope.choseArr = [];//定义数组用于存放前端显示
    var str = "";//
    var flag = '';//是否点击了全选，是为a
    $scope.x = false;//默认未选中
    $scope.all = function (c, v) {//全选
        if (c == true) {
            $scope.x = true;
            $scope.choseArr = v;
        } else {
            $scope.x = false;
            $scope.choseArr = [""];
        }
        flag = 'a';
    };
    $scope.chk = function (z, x) {//单选或者多选
        if (flag == 'a') {//在全选的基础上操作
            str = $scope.choseArr.join();
        }
        if (x == true) {//选中
            str = str + z + ',';
        } else {
            str = str.replace(z + ',', '');//取消选中
        }
        $scope.choseArr = (str.substr(0, str.length - 1)).split(',');
    };
}]);