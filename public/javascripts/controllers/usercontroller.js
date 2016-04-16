app.controller('UserListCtrl', ['$scope', function ($scope) {
    $scope.userList = [{
        id:1,
        headImgUrl: "/lib/img/weixin.jpg",
        name: "sm",
        score: 20,
        level: 20,
        comments: 20,
        replies: 30
    },{
        id:2,
        headImgUrl: "/lib/img/weixin.jpg",
        name: "sm",
        score: 20,
        level: 20,
        comments: 20,
        replies: 30
    },{
        id:3,
        headImgUrl: "/lib/img/weixin.jpg",
        name: "sm",
        score: 20,
        level: 20,
        comments: 20,
        replies: 30
    }
    ]
}]);

app.controller('UserBlacklistCtrl', ['$scope', function ($scope) {

}]);

app.controller('UserInfoCtrl', ['$scope', function ($scope) {

}]);

app.controller('UserSchemeCtrl', ['$scope', function ($scope) {

}]);

/*
用户积分
 */
app.controller('UserScoreCtrl',['$scope',function($scope){
$scope.user = {
    id:2,
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
    },{
        time: "2016-04-06 12:44",
        change: 1,
        reason: "签到"
    },{
        time: "2016-04-06 12:44",
        change: 1,
        reason: "签到"
    },{
        time: "2016-04-06 12:44",
        change: 1,
        reason: "签到"
    },{
        time: "2016-04-06 12:44",
        change: 1,
        reason: "签到"
    }]
};


}]);