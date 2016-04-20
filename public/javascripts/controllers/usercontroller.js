app.controller('UserInfoCtrl', ['$scope', function ($scope) {
    $scope.userList = [{
        id: 1,
        headImgUrl: "/lib/img/weixin.jpg",
        name: "sm",
        phone: "18888888888",
        type: "一型糖尿病",
        BG: "5mmo/l",
        score: 20
    }, {
        id: 1,
        headImgUrl: "/lib/img/weixin.jpg",
        name: "sm",
        phone: "18888888888",
        type: "一型糖尿病",
        BG: "5mmo/l",
        score: 20
    }, {
        id: 1,
        headImgUrl: "/lib/img/weixin.jpg",
        name: "sm",
        phone: "18888888888",
        type: "一型糖尿病",
        BG: "5mmo/l",
        score: 20
    }];

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
        headImgUrl: "/lib/img/weixin.jpg",
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