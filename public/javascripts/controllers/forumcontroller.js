app.controller('ForumUserlistCtrl', ['$scope', 'User', function ($scope, User) {
    $scope.page = 1;
    var getUsers = function (page) {
        User.find({
            scope: "liveness",
            page: page
        }, function (res) {
            console.log(res);
            $scope.users = res;
        }, function () {
            Materialize.toast("获取用户列表失败!", 2000);
        });
    };
    getUsers($scope.page);

    $scope.changePage = function (page) {
        getUsers(page);
    };

    $scope.moveToBlacklist = function () {
        var thisElement = this;
        User.updateById({
            id: thisElement.user.id
        }, {role: 0}, function () {
            Materialize.toast('拉黑成功！', 2000);
            getUsers($scope.page);
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
            getUsers($scope.page);
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
/*
 话题管理
 */
app.controller('ForumTopicCtrl', ['$scope', 'Topic', 'User', function ($scope, Topic, User) {
    $scope.page = 1;
    var getTopic = function (page) {
        Topic.find({
            page: page
        }, function (res) {
            console.log(res);
            $scope.topics = res;
        });
    };

    $scope.changePage = function (page) {
        getTopic(page);
    };

    getTopic($scope.page);

    //清理
    $scope.clearTopic = function () {
        var thisElement = this;
        User.destroyTopics({
                id: thisElement.topic.user.id
            }, function () {
                Materialize.toast('清理该用户话题成功', 2000);
                getTopic($scope.page);
            }, function () {
                Materialize.toast('清理话题失败！', 2000);
            }
        );
    };

    //删除
    $scope.topicDelete = function () {
        var thisElement = this;
        Topic.destroyById({
            id: thisElement.topic.id
        }, function () {
            Materialize.toast('删除话题成功！', 2000);
            getTopic($scope.page);
        }, function () {
            Materialize.toast('删除话题失败！', 2000);
        });
    };


    //锁定
    $scope.isLocked = function () {
        var that = this;
        var state = that.topic.state.locked;
        if (state === true) {
            Topic.updateById({
                id: that.topic.id
            }, {
                state: {
                    locked: false
                }
            }, function () {
                Materialize.toast('话题已经解锁', 2000);
                that.topic.state.locked = false;
            });
        } else {
            Topic.updateById({
                id: that.topic.id
            }, {
                state: {
                    locked: true
                }
            }, function () {
                Materialize.toast('话题已经锁定', 2000);
                that.topic.state.locked = true;
            });
        }
    };

    //置顶
    $scope.toTop = function () {
        var thisElement = this;
        var state = thisElement.topic.state.istop;
        if (state === true) {
            Topic.updateById({
                id: thisElement.topic.id
            }, {
                state: {
                    istop: false
                }
            }, function () {
                Materialize.toast('已经取消置顶', 2000);
                thisElement.topic.state.istop = false;
            });
        } else {
            Topic.updateById({
                id: thisElement.topic.id
            }, {
                state: {
                    istop: true
                }
            }, function () {
                Materialize.toast('话题已经置顶', 2000);
                thisElement.topic.state.istop = true;
            });
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
app.controller('ForumNoticeEditCtrl', ['$scope', 'Notice', function ($scope, Notice) {

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
        Notice.destroyPublishById({
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
    };
    $scope.editNotice = function () {
        var thisNotice = this.notice;
        Notice.updatePublishById(
            {id: thisNotice.id},
            function () {

            }
        )

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
app.controller('ForumBlacklistCtrl', ['$scope', 'User', function ($scope, User) {
    $scope.page = 1;
    var getBlacklist = function (page) {
        User.find({
            page: page
        }, function (res) {
            console.log(res);
            $scope.blacklist = res;
        }, function () {
            Materialize.toast("获取黑名单列表失败!", 2000);
        });
    };
    getBlacklist($scope.page);

    $scope.changePage = function (page) {
        getBlacklist(page);
    };

    $scope.removeFromBlacklist = function () {
        var thisElement = this;
        User.updateById({
            id: thisElement.user.id
        }, {role: 1}, function () {
            Materialize.toast('恢复成功！', 2000);
            getBlacklist($scope.page);
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

//用户个人话题
app.controller('ForumUsertopicCtrl', ['$scope', 'Topic', 'User', '$stateParams', function ($scope, Topic, User, $stateParams) {
    $scope.page = 1;

    var getTopic = function (page) {
        $scope.all = false;
        User.findTopics({
            page: page,
            id: $stateParams.id
        }, function (res) {
            console.log(res);
            $scope.usertopics = res;
        });
    };


    $scope.changePage = function (page) {
        getTopic(page);
    };

    getTopic($scope.page);
    User.findById({
            id: $stateParams.id
        },
        function (res) {
            $scope.userInfos = res;
        }
    );

    //清理
    $scope.clearTopic = function () {
        var thisElement = this;
        console.log(thisElement);
        User.destroyTopics({
                id: thisElement.usertopic.id
            }, function () {
                Materialize.toast('清理该用户话题成功', 2000);
                getTopic($scope.page);
            }, function () {
                Materialize.toast('清理话题失败！', 2000);
            }
        );
    };

    //删除
    $scope.topicDelete = function () {
        var thisElement = this;
        Topic.destroyById({
            id: thisElement.usertopic.id
        }, function () {
            Materialize.toast('删除话题成功！', 2000);
            getTopic($scope.page);
        }, function () {
            Materialize.toast('删除话题失败！', 2000);
        });
    };


    //锁定
    $scope.isLocked = function () {
        var that = this;
        console.log(that);
        var state = that.usertopic.state.locked;
        if (state === true) {
            Topic.updateById({
                id: that.usertopic.id
            }, {
                state: {
                    locked: false
                }
            }, function () {
                Materialize.toast('话题已经解锁', 2000);
                that.usertopic.state.locked = false;
            });
        } else {
            Topic.updateById({
                id: that.usertopic.id
            }, {
                state: {
                    locked: true
                }
            }, function () {
                Materialize.toast('话题已经锁定', 2000);
                that.usertopic.state.locked = true;
            });
        }
    };

    //置顶
    $scope.toTop = function () {
        var thisElement = this;
        var state = thisElement.usertopic.state.istop;
        if (state === true) {
            Topic.updateById({
                id: thisElement.usertopic.id
            }, {
                state: {
                    istop: false
                }
            }, function () {
                Materialize.toast('已经取消置顶', 2000);
                thisElement.usertopic.state.istop = false;
            });
        } else {
            Topic.updateById({
                id: thisElement.usertopic.id
            }, {
                state: {
                    istop: true
                }
            }, function () {
                Materialize.toast('话题已经置顶', 2000);
                thisElement.usertopic.state.istop = true;
            });
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

//回复管理
app.controller('ForumReplyCtrl', ['$scope', 'Topic', 'User', '$stateParams', function ($scope, Topic, User, $stateParams) {

    var getReply = function () {
        $scope.all = false;
        Topic.replyList({
            id: $stateParams.id
        }, function (res) {
            console.log(res);
            $scope.replies = res;
        });
    };

    getReply();

    //删除
    $scope.topicDelete = function () {
        var thisElement = this;
        Topic.destroyById({
            id: thisElement.topic.id
        }, function () {
            Materialize.toast('删除话题成功！', 2000);
            getReply($scope.page);
        }, function () {
            Materialize.toast('删除话题失败！', 2000);
        });
    };


    //全选
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