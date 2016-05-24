/**
 * Created by yuchao on 2016/5/24.
 */
app.controller('FrontCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.iconList = [
        {
            ImgSrc: "/img/users.png",
            explain: "注册人数",
            preName: "新增人数",
            postName: "全部人数",
        },
        {
            ImgSrc: "/img/record.png",
            explain: "血糖记录",
            preName: "新增记录人数",
            postName: "全部记录人数",

        },
        {
            ImgSrc: "/img/coterie.png",
            explain: "社区",
            preName: "昨日pv",
            postName: "昨日uv",

        },
        {
            ImgSrc: "/img/article.png",
            explain: "文章",
            preName: "昨日新增文章",
            postName: "全部新增文章",

        }
    ]

    $http({
        url: '/usercumulate?access_token=TOKEN',
        method: 'GET'
    }).success(function (res) {
       $scope.iconList[0].numOne=res.user.new;
        $scope.iconList[0].numTwo=res.user.all;
        $scope.iconList[1].numOne=res.BGRecord.new;
        $scope.iconList[1].numTwo=res.BGRecord.all;
        $scope.iconList[2].numOne=res.forum.pv;
        $scope.iconList[2].numTwo=res.forum.uv;
        $scope.iconList[3].numOne=res.article.pv;
        $scope.iconList[3].numTwo=res.article.uv;
        console.log(res);
    }).error(function () {

    })


}]);
