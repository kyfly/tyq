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
        //�ر�����ͳ��
        wordCount: false,
        //�ر�elementPath
        elementPathEnabled: false,
        //�ر��Ҽ��˵�����
        enableContextMenu: false
    };
    $scope.article = {};
    $scope.createArticle = function () {

        var content = $scope.articleEditorContent;
        var title = $scope.article.title;

        if (!content || !title) {
            Materialize.toast('���±�������ݶ�����Ϊ��', 2000);
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

}]);

app.controller('ForumNoticeCtrl', ['$scope', function ($scope) {

}]);