app.controller('LoginCtrl', ['$scope', 'User', function ($scope, User) {

}]);
app.controller('UserInfoCtrl', ['$scope', 'User', function ($scope, User) {
    $scope.page = 1;
    $scope.search = {};
    var getUsers = function (page, search) {
        User.find({
            scope: "base",
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
    };

    $scope.moveToBlacklist = function () {
        var thisElement = this;
        User.updateById({
            id: thisElement.user.id
        }, {role: 0}, function () {
            Materialize.toast('拉黑成功！', 2000);
            getUsers($scope.page, $scope.search.content);
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
app.controller('UserScoreCtrl', ['$scope', 'User', '$stateParams', function ($scope, User, $stateParams) {
    var userId = $stateParams.id;
    User.findById({
        id: userId
    }, function (res) {
        console.log(res);
        $scope.user = res;
    });
    User.findPoints({
        id: userId
    }, function (res) {
        console.log(res);
        $scope.changeItems = res;
    });

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

app.controller('UserDetailCtrl', ['$scope', 'User', '$stateParams', function ($scope, User, $stateParams) {
    $scope.month = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
    $scope.monthShort = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
    $scope.weekdaysFull = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    $scope.weekdaysLetter = ['日', '一', '二', '三', '四', '五', '六'];
    $scope.today = '今天';
    $scope.clear = '清除';
    $scope.close = '确定';
    $scope.isEdit = [];
    $scope.sportEdit = [];
    $scope.$on('$stateChangeStart', function (evt, next) {
        $scope.state = next.name;
    });

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

    $scope.selectItems = {
        years: ['2014', '2015', '2016'],
        months: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
    };
    $scope.selectTime = {
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1
    };
    $scope.findAnalysis = function () {
        if ($scope.selectTime.year && $scope.selectTime.month) {
            User.findAnalysis({
                id: $stateParams.id,
                year: $scope.selectTime.year,
                mon: $scope.selectTime.month
            }, function (res) {
                $scope.BGAnalysis = res;
                console.log(res, '血糖分析')
            });
        }
    };

    $scope.updateHealth = function () {
        User.updateHealth({
            id: $stateParams.id
        }, $scope.userHealth, function (res) {
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
        }, $scope.userExamine, function (res) {
            console.log(res);
            Materialize.toast("更新成功!", 2000);
            for (var i = 7; i < 17; i++) {
                $scope.isEdit[i] = false;
            }
        }, function () {
            Materialize.toast("更新失败!", 2000);
        });
    };

    $scope.updateSchema = function () {
        User.updateSchema({
            id: $stateParams.id
        }, $scope.userSchema, function (res) {
            console.log(res);
            Materialize.toast("更新成功!", 2000);
            for (var i = 17; i < 22; i++) {
                $scope.isEdit[i] = false;
            }
            for (var j = 0; j < $scope.sportEdit.length; j++) {
                $scope.sportEdit[j] = false;
            }
        }, function () {
            Materialize.toast("更新失败!", 2000);
        });
    };

    $scope.addSportName = {};
    $scope.addSport = function () {
        $scope.userSchema.sport.push({
            dosage: $scope.addSportName.dosage,
            type: $scope.addSportName.type,
            unit: $scope.addSportName.unit
        });
    };

    $scope.deleteSport = function ($index) {
        $scope.userSchema.sport.splice($index, 1);
    };

}]);

app.controller('UserServiceCtrl', ['$scope', function ($scope) {
}]);