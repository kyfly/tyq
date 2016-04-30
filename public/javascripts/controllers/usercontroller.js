app.controller('LoginCtrl', ['$scope', 'User', function ($scope, User) {

}]);
app.controller('UserInfoCtrl', ['$scope', 'User', function ($scope, User) {
    User.find({
        scope: "base"
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

    $scope.chose_all = function () {
        var str = "art_";
        var input = document.getElementsByTagName("input");
        var all = document.getElementById("all");
        var flag = 0;
        var ans = {"0": "", "1": "true"};
        if (all.getAttribute("checked") === null) {
            flag = 1;
            all.setAttribute("checked", "true");
        } else {
            all.removeAttribute("checked");
        }
        for (var i = 0; i < input.length; i++) {
            if (input[i].getAttribute("type") === "checkbox") {
                if (flag === 0) {
                    $scope.checkbox = false;
                    //input[i].removeAttribute("checked");
                } else {
                    $scope.checkbox = true;
                    //input[i].setAttribute("checked", true);
                }
            }
        }
    };
}]);

/*
 用户积分
 */
app.controller('UserScoreCtrl', ['$scope', function ($scope) {
    $scope.user = {
        id: 2,
        headImgUrl: "/img/weixin.jpg",
        name: "sm",
        score: 20,
        level: 20,
        comments: 20,
        replies: 300,
        changeItems: [{
            time: "2016-04-06 12:44",
            change: 1,
            reason: "签到"
        }, {
            time: "2016-04-06 12:44",
            change: 1,
            reason: "签到"
        }, {
            time: "2016-04-06 12:44",
            change: 1,
            reason: "签到"
        }, {
            time: "2016-04-06 12:44",
            change: 1,
            reason: "签到"
        }, {
            time: "2016-04-06 12:44",
            change: 1,
            reason: "签到"
        }]
    };


}]);

app.controller('UserDetailCtrl', ['$scope', 'User', '$stateParams', function ($scope, User, $stateParams) {
    $scope.isEdit = [];
    for (var i = 0; i < 50; i++) {
        $scope.isEdit[i] = false;
    }
    User.findById({
        id: $stateParams.id
    }, function (res) {
        console.log(res);
        $scope.user = res;
    }, function () {
        Materialize.toast("获取用户列表失败!", 2000);
    });

    User.findHealth({
        id: $stateParams.id
    }, function (res) {
        console.log(res);
        $scope.userHealth = res;
    });

    User.findExamine({
        id: $stateParams.id
    }, function (res) {
        console.log(res);
        $scope.userExamine = res;
    });

    User.findSchema({
        id: $stateParams.id
    }, function (res) {
        console.log(res);
        $scope.userSchema = res;
    });

    User.findLog({
        id: $stateParams.id
    }, function (res) {
        console.log(res);
        $scope.userLog = res;
});

    $scope.updateHealth = function () {
        User.updateHealth({
            id: $stateParams.id
        },$scope.userHealth, function (res) {
            console.log(res);
            Materialize.toast("更新成功!", 2000);
            for (var i = 0; i < 7; i++) {
                $scope.isEdit[i] = false;
            }
        }, function () {
            Materialize.toast("更新失败!", 2000);
        });
    };

    $scope.updateExamine = function () {
        User.updateExamine({
            id: $stateParams.id
        },$scope.userExamine, function (res) {
            console.log(res);
            Materialize.toast("更新成功!", 2000);
            for (var i = 7; i < 17; i++) {
                $scope.isEdit[i] = false;
            }
        }, function () {
            Materialize.toast("更新失败!", 2000);
        });
    };
    $scope.month = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
    $scope.monthShort = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
    $scope.weekdaysFull = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    $scope.weekdaysLetter = ['日', '一', '二', '三', '四', '五', '六'];
    $scope.today = '今天';
    $scope.clear = '清除';
    $scope.close = '确定';
}]);

app.controller('UserServiceCtrl', ['$scope', function ($scope) {
}]);