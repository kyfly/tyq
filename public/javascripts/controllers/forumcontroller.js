app.controller('ForumUserlistCtrl', ['$scope', 'User', function ($scope, User) {
    User.find({
        scope: "liveness"
    }, function (res) {
        console.log(res);
        $scope.users = res;
    }, function () {
        Materialize.toast("获取用户列表失败!", 2000);
    });

    $scope.moveToBlacklist = function () {
        var thisElement = this;
        User.updateById({
            id: thisElement.user.id
        }, {role: 0}, function () {
            Materialize.toast('拉黑成功！', 2000);
            var id = thisElement.user.id;
            for (var x in $scope.users.content)
                if ($scope.users.content[x].id === id) {
                    $scope.users.content.splice(x, 1);
                }
        }, function () {
            Materialize.toast('拉黑失败！', 2000);
        });
    };
    $scope.setAsAdmin = function () {
        var thisElement = this;
        User.updateById({
            id: thisElement.user.id
        }, {role: 2}, function () {
            Materialize.toast('成功设为管理员！', 2000);
            var id = thisElement.user.id;
            for (var x in $scope.users.content)
                if ($scope.users.content[x].id === id) {
                    $scope.users.content.splice(x, 1);
                }
        }, function () {
            Materialize.toast('设置管理员失败！', 2000);
        });
    }
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

app.controller('ForumTopicCtrl', ['$scope', 'Topic', 'User', function ($scope, Topic, User) {
    $scope.page = 1;
    var getTopic = function (page) {
        $scope.all = false;
        Topic.find({
            page: page
        }, function (res) {
            $scope.topics = res;
        });
    };

    $scope.changePage = function (page){
        getTopic(page);
    };

    getTopic($scope.page);

    $scope.changeUserPage = function (thisId) {
        window.location.href = "users/" + thisId + "/usertopic";
    };

    //清理
    $scope.clearTopic = function () {
        var thisElement = this;
        console.log(thisElement);
        User.destroyTopics({
                id: thisElement.topic.user.id
            }, function(){
                Materialize.toast('清理该用户话题成功',2000);
                getTopic($scope.page);
            }, function () {
                Materialize.toast('清理话题失败！', 2000);
            }
        );
    };


    $scope.topicDelete = function () {
        var thisElement = this;
        console.log(thisElement);
        Topic.destroyById({
            id: thisElement.topic.id
        }, function () {
            Materialize.toast('删除话题成功！', 2000);
            getTopic($scope.page);
        }, function () {
            Materialize.toast('删除话题失败！', 2000);
        });
    };

    $scope.whetherLock = "锁定";
    $scope.isLocked = function () {

        console.log(this);
        var state = this.topic.state.locked;
        if (state === true) {
            Materialize.toast('话题已经解锁.', 2000);
            this.topic.state.locked = false;
            $scope.whetherLock = "锁定";

        } else {
            Materialize.toast('话题已经锁定.', 2000);
            this.topic.state.locked = true;
            $scope.whetherLock = "解锁";

        }
    };


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

app.controller('ForumNoticeCtrl', ['$scope', 'Notice', function ($scope, Notice) {
    Notice.publish(function (res) {
            console.log(res);
            $scope.noticeList = res;
        }
    );
    $scope.deleteNotice = function () {
        var thisNotice = this.notice;
        console.log(thisNotice);
        Notice.distroyPublishById({
            id: thisNotice.id
        }, function () {
            Materialize.toast('删除成功！', 2000);
            Notice.publish(function (res) {
                    $scope.noticeList = res;
                }
            );
        }, function () {
            Materialize.toast('删除失败！', 2000);
        });
    }


    //$scope.noticeList = [{
    //    id: 0,
    //    time: "2015.0422",
    //    content: "这是一次测试"
    //}, {
    //    id: 1,
    //    time: "2015.0522",
    //    content: "另外一次测试"
    //}, {
    //    id: 2,
    //    time: "2016.0422",
    //    content: "最后次测试"
    //}];
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
app.controller('ForumBlacklistCtrl', ['$scope', 'User', function ($scope, User) {
    User.find({}, function (res) {
        console.log(res);
        $scope.blacklist = res;
    }, function () {
        Materialize.toast("获取黑名单列表失败!", 2000);
    });

    $scope.removeFromBlacklist = function () {
        var thisElement = this;
        User.updateById({
            id: thisElement.user.id
        }, {role: 1}, function () {
            Materialize.toast('恢复成功！', 2000);
            var id = thisElement.user.id;
            for (var x in $scope.blacklist.content)
                if ($scope.blacklist.content[x].id === id) {
                    $scope.blacklist.content.splice(x, 1);
                }
        }, function () {
            Materialize.toast('恢复失败！', 2000);
        });
    };

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

app.controller('ForumUsertopicCtrl', ['$scope', 'Topic', 'User', '$stateParams', function ($scope, Topic, User, $stateParams) {

    User.findTopics({
        id: $stateParams.id
    }, function (res) {
        console.log(res);
        $scope.usertopics = res;
    });

    User.findById({
            id: $stateParams.id
        },
        function (res) {
            console.log(res);
            $scope.userInfos = res;

        }
    );

    $scope.changeUserPage = function (thisId) {
        window.location.href = "users/detail/" + thisId + "/health";
    };

    $scope.topicDelete = function () {
        var thisElement = this;
        console.log(thisElement);
        Topic.destroyById({
            id: thisElement.topic.id
        }, {status: 200}, function () {
            Materialize.toast('删除话题成功！', 2000);
            thisElement.topic.deleted = true;
            var id = thisElement.topic.id;
            for (var x in $scope.topics.content)
                if ($scope.topics.content[x].id === id) {
                    $scope.topics.content.splice(x, 1);
                }
        }, function () {
            Materialize.toast('删除话题失败！', 2000);
        });
    };

    $scope.whetherLock = "锁定";
    $scope.isLocked = function () {

        console.log(this);
        var state = this.usertopic.state.locked;
        if (state === true) {
            Materialize.toast('话题已经解锁.', 2000);
            this.usertopic.state.locked = false;
            $scope.whetherLock = "锁定";

        } else {
            Materialize.toast('话题已经锁定.', 2000);
            this.usertopic.state.locked = true;
            $scope.whetherLock = "解锁";

        }
    };


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