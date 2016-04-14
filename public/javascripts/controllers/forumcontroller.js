app.controller('ForumPublishCtrl', ['$scope','Ueditor', function ($scope,Ueditor) {
    $scope.editorConfig = {
        serverUrl: "/ue/uploads",
        toolbars: [[
            'fullscreen', 'source', '|', 'undo', 'redo', '|',
            'bold', 'italic', 'underline', 'fontborder', 'strikethrough', '|',
            'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|',
            'simpleupload', 'insertimage','attachment','insertvideo', 'music'
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



    $(document).ready(function() {
        $('select').material_select();
    });


}]);

app.controller('ForumNoticeCtrl', ['$scope', function ($scope) {

}]);