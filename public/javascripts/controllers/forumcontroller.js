app.controller('ForumUserlistCtrl', ['$scope', 'User', '$timeout', function ($scope, User, $timeout) {
    $scope.page = 1;
    $scope.search = {};
    var getUsers = function (page, search) {
        User.find({
            scope: "liveness",
            page: page,
            search: search
        }, function (res) {
            console.log(res);
            $scope.users = res;
        }, function () {
            Materialize.toast("获取用户列表失败!", 2000);
        });
    };
    getUsers($scope.page);

    $scope.changePage = function (page) {
        getUsers(page, $scope.search.content);
    };

    $scope.searchUsers = function () {
        getUsers($scope.page, $scope.search.content);
        $timeout(function () {
            $scope.users.count = 1000;
        }, 300);
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

app.controller('ForumPublishCtrl', ['$scope', 'Topic', 'FileUploader', function ($scope, Topic, FileUploader) {
    $scope.publishItem = {};
    $scope.publishItem.img = [];
    var uploader = $scope.uploader = new FileUploader({
        url: '/ue/uploads?action=uploadimage'
    });
    // FILTERS
    uploader.filters.push({
        name: 'imageFilter',
        fn: function (item /*{File|FileLikeObject}*/, options) {
            var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
        }
    });
    console.log(uploader);
    uploader.onSuccessItem = function (fileItem, response, status, headers) {
        //console.info('onSuccessItem', fileItem, response, status, headers);
        Materialize.toast('上传成功', 2000);
        console.log(response.url);
        $scope.publishItem.img.push(response.url);
    };
    $scope.myremove = function () {
        $scope.uploader.queue[this.$index].remove();
        $scope.publishItem.img.splice(this.$index, 1);
    };
    $scope.publishTopic = function () {
        if (!$scope.publishItem.title || !$scope.publishItem.content) {
            Materialize.toast('标题和内容不能为空', 2000);
        }
        else {
            Topic.createTopic(
                {id: localStorage.$Express$currentUserId},
                $scope.publishItem, function () {
                    Materialize.toast('发布成功', 2000);
                }, function () {
                    Materialize.toast('发布失败', 2000);
                }
            )
        }
    };
}]);
/*
 话题管理
 */
app.controller('ForumTopicCtrl', ['$scope', 'Topic', 'User', function ($scope, Topic, User) {
    $scope.page = 1;
    $scope.search = {};
    var getTopic = function (page, search) {
        Topic.find({
            page: page,
            search: search
        }, function (res) {
            $scope.topics = res;
        });
    };
    $scope.changePage = function (page) {
        getTopic(page, $scope.search.content);
    };

    getTopic($scope.page);

    $scope.searchTopics = function () {
        getTopic($scope.page, $scope.search.content);
    };

    //显示最新
    $scope.showUpToDate = function (page, search) {
        Topic.find = ({
                page: page,
                search: search,
                filter: {
                    type: 1
                }
            }, function (res) {
                $scope.topics = res;
                Materialize.toast('已经显示最新', 2000);
            }
        )
    };

    //显示最热
    $scope.showUpToDate = function (page, search) {
        Topic.find = ({
                page: page,
                search: search,
                filter: {
                    type: 2
                }
            }, function (res) {
                $scope.topics = res;
                Materialize.toast('已经显示最热', 2000);
            }
        )
    };

    //得到回复列表
    $scope.getReply = function () {
        //console.log(this);
        //$scope.all = false;
        Topic.replyList({
            id: this.topic.id
        }, function (res) {
            //console.log(res);
            $scope.replies = res;
        });
    };

    //修改标签
    $scope.upToDate = function () {
        Topic.updateById({
                id: this.topic.id
            }, {
                type: 1
            }, function () {
                Materialize.toast('已经改为最新', 2000);
                $scope.realType = "最新";
            }, function () {
                Materialize.toast('更改失败', 2000);
            }
        )

    };
    $scope.hottest = function () {
        Topic.updateById({
                id: this.topic.id
            }, {
                type: 2
            }, function () {
                Materialize.toast('已经改为最热', 2000);
                $scope.realType = "最热";
            }, function () {
                Materialize.toast('更改失败', 2000);
            }
        )

    };
    $scope.select = function () {
        Topic.updateById({
                id: this.topic.id
            }, {
                type: 3
            }, function () {
                Materialize.toast('已经改为精选', 2000);
                $scope.realType = "精选";
            }, function () {
                Materialize.toast('更改失败', 2000);
            }
        )
    };
    $scope.qusetion = function () {
        Topic.updateById({
                id: this.topic.id
            }, {
                type: 4
            }, function () {
                Materialize.toast('已经改为提问', 2000);
                $scope.realType = "提问";
            }, function () {
                Materialize.toast('更改失败', 2000);
            }
        )

    };

    //清理
    $scope.clearTopic = function () {
        var thisElement = this;
        User.destroyTopics({
                id: thisElement.topic.user.id
            }, function () {
                Materialize.toast('清理该用户话题成功', 2000);
                getTopic($scope.page, $scope.search.content);
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
            getTopic($scope.page, $scope.search.content);
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
    $scope.chooseAll = function () {
        var flag = 0;
        $scope.topics.content.forEach(function (topic) {
            if (topic.select == true) {
                flag++;
            }
        });
        if (flag == $scope.topics.content.length) {
            $scope.topics.content.forEach(function (topic) {
                if (topic.select == true) {
                    topic.select = !topic.select;
                }
            });
        } else {
            $scope.topics.content.forEach(function (topic) {
                if (topic.select == false) {
                    topic.select = !topic.select;
                }
            });
        }
    };
    $scope.delete = function () {
        var flag = 0;
        var success=0;
        $scope.topics.content.forEach(function (topic) {
            if (topic.select == true) {
                flag++;
            }
            console.log(topic.id);
        });
        if (flag) {
            $scope.topics.content.forEach(function (topic) {
                if (topic.select == true) {
                    Topic.destroyById({
                        id: topic.id
                    }, function () {
                        Materialize.toast('删除话题成功！', 2000);
                    }, function () {
                        Materialize.toast('删除话题失败！', 2000);
                    });
                }
            })
            getTopic($scope.page, $scope.search.content);
        }
        else {
            Materialize.toast('请选中至少一条再进行删除', 2000);
        }
    }
}]);

//用户个人话题
app.controller('ForumUsertopicCtrl', ['$scope', 'Topic', 'User', '$stateParams', function ($scope, Topic, User, $stateParams) {
    $scope.page = 1;
    $scope.search = {};
    var getTopic = function (page, search) {
        $scope.all = false;
        User.findTopics({
            page: page,
            id: $stateParams.id,
            search: search
        }, function (res) {
            $scope.usertopics = res;
        });
    };

    $scope.changePage = function (page) {
        getTopic(page, $scope.search.content);
    };

    $scope.searchTopics = function () {
        getTopic($scope.page, $scope.search.content);
    };

    getTopic($scope.page, $scope.search.content);
    User.findById({
            id: $stateParams.id
        },
        function (res) {
            $scope.userInfos = res;
        }
    );

    //得到回复列表
    $scope.getReply = function () {
        console.log(this);
        Topic.replyList({
            id: this.usertopic.id
        }, function (res) {
            //console.log(res);
            $scope.replies = res;
        });
    };

    //修改标签
    $scope.upToDate = function () {
        Topic.updateById({
                id: this.usertopics.id
            }, {
                type: 1
            }, function () {
                Materialize.toast('已经改为最新', 2000);
                $scope.realType = "最新";
            }, function () {
                Materialize.toast('更改失败', 2000);
            }
        )

    };
    $scope.hottest = function () {
        Topic.updateById({
                id: this.usertopics.id
            }, {
                type: 2
            }, function () {
                Materialize.toast('已经改为最热', 2000);
                $scope.realType = "最热";
            }, function () {
                Materialize.toast('更改失败', 2000);
            }
        )

    };
    $scope.select = function () {
        Topic.updateById({
                id: this.usertopics.id
            }, {
                type: 3
            }, function () {
                Materialize.toast('已经改为精选', 2000);
                $scope.realType = "精选";
            }, function () {
                Materialize.toast('更改失败', 2000);
            }
        )
    };
    $scope.qusetion = function () {
        Topic.updateById({
                id: this.usertopics.id
            }, {
                type: 4
            }, function () {
                Materialize.toast('已经改为提问', 2000);
                $scope.realType = "提问";
            }, function () {
                Materialize.toast('更改失败', 2000);
            }
        )

    };


    //清理
    $scope.clearTopic = function () {
        var thisElement = this;
        console.log(thisElement);
        User.destroyTopics({
                id: thisElement.usertopic.id
            }, function () {
                Materialize.toast('清理该用户话题成功', 2000);
                getTopic($scope.page, $scope.search.content);
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
            getTopic($scope.page, $scope.search.content);
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
    $scope.chooseAll = function () {
        var flag = 0;
        $scope.usertopics.content.forEach(function (usertopic) {
            if (usertopic.select == true) {
                flag++;
            }
        });
        if (flag == $scope.usertopics.content.length) {
            $scope.usertopics.content.forEach(function (usertopic) {
                if (usertopic.select == true) {
                    usertopic.select = !usertopic.select;
                }
            });
        } else {
            $scope.usertopics.content.forEach(function (usertopic) {
                if (usertopic.select == false) {
                    usertopic.select = !usertopic.select;
                }
            });
        }
    };
    $scope.delete = function () {
        var flag = 0;
        $scope.usertopics.content.forEach(function (usertopic) {
            if (usertopic.select == true) {
                flag++;
            }
          console.log(usertopic.id);
        });
        if (flag) {
            $scope.usertopics.content.forEach(function (usertopic) {
                if (usertopic.select == true) {
                    Topic.destroyById({
                        id: usertopic.id
                    }, function () {
                        Materialize.toast('删除话题成功！', 2000);

                    }, function () {
                        Materialize.toast('删除话题失败！', 2000);
                    });
                }
            })
            getTopic($scope.page, $scope.search.content);
        }
        else {
            Materialize.toast('请选中至少一条再进行删除', 2000);
        }
    }
}]);

app.controller('ForumNoticeEditCtrl', ['$scope', 'Notice', '$stateParams', '$location', function ($scope, Notice, $stateParams, $location) {
    console.log($stateParams.id);
    var id = $stateParams.id;
    Notice.findPublishById({id: id},
        function (res) {
            $scope.notice = res;
        });
    $scope.updateNotice = function () {
        $scope.notice.updated = new Date();
        Notice.updatePublishById({id: id},
            $scope.notice, function (res) {
                Materialize.toast('修改成功！', 2000);
                $location.path('/forum/notices');
            }, function (res) {
                Materialize.toast('修改失败！', 2000);
            }
        )
    }

}]);
app.controller('ForumNoticeCtrl', ['$scope', 'Notice', '$stateParams', function ($scope, Notice, $stateParams) {
    var get = function () {
        Notice.publish(function (res) {
                $scope.noticeList = res;
                console.log(res);
            }
        )
    };
    get();
    $scope.topNotice = function () {
        var notice = this.notice;
        console.log(this)
        notice.updated = new Date();
        Notice.updatePublishById({id: notice.id},
            notice, function (res) {
                Materialize.toast('置顶成功', 2000);
                get();
            }, function (res) {
                Materialize.toast('置顶失败！', 2000);
            }
        )
    }
    $scope.publishNtc = {};
    $scope.publishNotice = function () {
        if (!$scope.publishNtc.content || !$scope.publishNtc.title) {
            Materialize.toast('公告标题和内容都不能为空', 2000);
            return;
        }
        else {
            Notice.createPublish($scope.publishNtc, function (res) {

                Materialize.toast('发布成功', 2000);
                get();
                $scope.publishNtc = {};

            }, function (res) {
                Materialize.toast('发布失败', 2000);
            })

        }

    }
    $scope.deleteNotice = function () {
        var thisNotice = this.notice;
        console.log(thisNotice);
        Notice.destroyPublishById({
            id: thisNotice.id
        }, function () {
            Materialize.toast('删除成功！', 2000);
            get();
        }, function () {
            Materialize.toast('删除失败！', 2000);
        });
    };

    $scope.chooseAll = function () {
        var flag = 0;
        $scope.noticeList.forEach(function (notice) {
            if (notice.select == true) {
                flag++;
            }
        });
        if (flag == $scope.noticeList.length) {
            $scope.noticeList.forEach(function (notice) {
                if (notice.select == true) {
                    notice.select = !notice.select;
                }
            });
        } else {
            $scope.noticeList.forEach(function (notice) {
                if (notice.select == false) {
                    notice.select = !notice.select;
                }
            });
        }
    };
    $scope.deleteAll = function () {
        var flag = 0;
        $scope.noticeList.forEach(function (notice) {
            if (notice.select == true) {
                flag++;
            }
        });
        if (flag) {
            $scope.noticeList.forEach(function (notice) {
                if (notice.select == true) {
                    Notice.destroyPublishById({
                        id: notice.id
                    }, function () {
                        Materialize.toast('删除成功！', 2000);
                    }, function () {
                        Materialize.toast('删除失败！', 2000);
                    });
                }
            })
            get();
        } else {
            Materialize.toast('请选中至少一条再进行删除', 2000);
        }
        ;
    }
    //$scope.choseArr = [];//定义数组用于存放前端显示
    //var str = "";//
    //var flag = '';//是否点击了全选，是为a
    //$scope.x = false;//默认未选中
    //$scope.all = function (c, v) {//全选
    //    if (c == true) {
    //        $scope.x = true;
    //        $scope.choseArr = v;
    //    } else {
    //        $scope.x = false;
    //        $scope.choseArr = [""];
    //    }
    //    flag = 'a';
    //};
    //$scope.chk = function (z, x) {//单选或者多选
    //    if (flag == 'a') {//在全选的基础上操作
    //        str = $scope.choseArr.join();
    //    }
    //    if (x == true) {//选中
    //        str = str + z + ',';
    //    } else {
    //        str = str.replace(z + ',', '');//取消选中
    //    }
    //    $scope.choseArr = (str.substr(0, str.length - 1)).split(',');
    //
    //};
    //$scope.deleteAll=function(choseArr){
    //    console.log($scope.choseArr);
    //}


}]);
app.controller('ForumBlacklistCtrl', ['$scope', 'User', function ($scope, User) {
    $scope.page = 1;
    $scope.search = {};
    var getBlacklist = function (page, search) {
        User.find({
            page: page,
            filter: {
                where: {
                    role: 0
                }
            },
            search: search
        }, function (res) {
            console.log(res);
            $scope.blacklist = res;
        }, function () {
            Materialize.toast("获取黑名单列表失败!", 2000);
        });
    };
    getBlacklist($scope.page);

    $scope.changePage = function (page) {
        getBlacklist(page, $scope.search.content);
    };

    $scope.searchUsers = function () {
        getBlacklist($scope.page, $scope.search.content);
    };

    $scope.removeFromBlacklist = function () {
        var thisElement = this;
        User.updateById({
            id: thisElement.user.id
        }, {role: 1}, function () {
            Materialize.toast('恢复成功！', 2000);
            getBlacklist($scope.page, $scope.search.content);
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

