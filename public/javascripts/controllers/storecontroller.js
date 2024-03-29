app.controller('StoreReleaseCtrl',
    ['$scope', 'Store', function ($scope, Store) {
        $scope.search = {};
        var getGoods = function (exchengeable, page, search) {
            $scope.all = false;
            Store.find({
                exchengeable: exchengeable,
                page: page,
                search: search
            }, function (res) {
                $scope.goods = res;
            });
        };

        $scope.changePage = function (page) {
            getGoods($scope.exchengeableState, page, $scope.search.content)
        };

        $scope.searchGoods = function () {
            getGoods($scope.exchengeableState, $scope.page, $scope.search.content);
        };

        var batchAction = function () {
            var goods = $scope.goods.content;
            var ids = [];
            for (var x in goods) if (goods[x].select === true) {
                ids.push(goods[x].id)
            }
            return ids;
        };
        var deleteGood = function (id) {
            var goods = $scope.goods.content;
            goods.forEach(function (good, index) {
                if (good.id === id) {
                    goods.splice(index, 1);
                }
            });
        };
        var deleteGoods = function (ids) {
            ids.forEach(function (id) {
                deleteGood(id);
            });
        };
        var exchengeable = function (ids, exchengeable) {
            Store.store({
                goods: ids,
                exchengeable: exchengeable
            }, function (res) {
                deleteGoods(ids);
            });
            getGoods(!exchengeable, $scope.page, $scope.search.content)
        };
        $scope.page = 1;
        $scope.exchengeableState = true;
        $scope.chooseAll = function () {
            $scope.goods.content.forEach(function (good) {
                good.select = !good.select;
            });
        };
        $scope.exchenge = function () {
            $scope.page = 1;
            getGoods(true, $scope.page, $scope.search.content);
            $scope.exchengeableState = true;
        };
        $scope.unexchenge = function () {
            $scope.page = 1;
            getGoods(false, $scope.page, $scope.search.content);
            $scope.exchengeableState = false;
        };
        $scope.destroy = function () {
            var id = this.good.id;
            Store.destroyById({id: id}, function (res) {
                deleteGood(id);
            });
            getGoods($scope.exchengeableState, $scope.page)
        };
        $scope.exchengeable = function () {
            var id = this.good.id;
            exchengeable([id], true);
        };
        $scope.unexchengeable = function () {
            var id = this.good.id;
            exchengeable([id], false);
        };
        $scope.destroyMore = function () {
            var ids = batchAction();
            Store.destroyMore({ids: ids}, function (res) {
                deleteGoods(ids);
            });
            getGoods($scope.exchengeableState, $scope.page)
        };
        $scope.exchengeableMore = function () {
            var ids = batchAction();
            exchengeable(ids, true);
        };
        $scope.unexchengeableMore = function () {
            var ids = batchAction();
            exchengeable(ids, false);
        };
        getGoods(true, $scope.page, $scope.search.content);
    }]);
app.controller('GoodDetailCtrl',
    ['$scope', '$stateParams', 'Store', '$sce', function ($scope, $stateParams, Store, $sce) {
        var id = $stateParams.id;
        Store.findById({id: id}, function (res) {
            res.explain = $sce.trustAsHtml(res.explain);
            $scope.good = res;
        });
    }]);
app.controller('StoreEditCtrl',
    ['$scope', '$stateParams', '$http', 'Store', 'Ueditor', '$window', function ($scope, $stateParams, $http, Store, ueditor, $window) {
        var id = $stateParams.id;
        $scope.editorConfig = ueditor.config;
        if (id) {
            Store.findById({id: id}, function (res) {
                $scope.good = res.content;
            });
        } else {
            $scope.good = {};
        }
        $scope.uploadImg = function () {
            var Fd = new FormData();
            var file = document.getElementById('goodImg').files;
            var path = '/ue/uploads?action=uploadimage';
            if (!file[0]) {
                console.log(111)
            }
            Fd.append('file', file[0]);
            $http({
                url: path,
                data: Fd,
                method: 'POST',
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            })
            .success(function (data) {
                $scope.good.img = data.url;
                Materialize.toast("上传成功!", 2000);
            })
            .error(function (err) {
                Materialize.toast("上传失败!", 2000);
            });
        }
        $scope.submit = function () {
            Store.create($scope.good, function (res) {
                $window.history.back();
            })
        }
    }]);
app.controller('StoreOrderCtrl', ['$scope', 'Store', function ($scope, Store) {
    $scope.search = {};
    var getOrders = function (page, search) {
        $scope.all = false;
        Store.orders({
            page: page,
            search: search
        }, function (res) {
            $scope.orders = res;
        })
    };

    $scope.changePage = function (page) {
        getOrders(page, $scope.search.content);
    };

    var batchAction = function () {
        var orders = $scope.orders.content;
        var ids = [];
        for (var x in orders) if (orders[x].select === true) {
            ids.push(orders[x].id)
        }
        return ids;
    };
    $scope.page = 1;

    $scope.searchOrders = function () {
        getOrders($scope.page, $scope.search.content);
    };

    $scope.checkOrder = function () {
        $scope.currentOrder = this.order;
        if (this.order.Logistical.company) {
            $scope.currentOrder.disabled = true;
        }
    };
    $scope.chooseAll = function () {
        $scope.orders.content.forEach(function (order) {
            order.select = !order.select;
        });
    };
    $scope.destroy = function () {
        var id = this.order.id;
        Store.destroyOrderById({id: id}, function (res) {
            getOrders($scope.page, $scope.search.content);
        });
    };
    $scope.logistical = function () {
        Store.updateOrderById({
            id: $scope.currentOrder.id
        }, {
            Logistical: $scope.currentOrder.Logistical
        }, function (res) {
            console.log(res);
            getOrders($scope.page, $scope.search.content);
        });
    };
    $scope.destroyMore = function () {
        var ids = batchAction();
        Store.destroyOrdersMore({ids: ids}, function (res) {
            console.log(res);
            getOrders($scope.page, $scope.search.content);
        })
    };
    $scope.exchengeableMore = function () {

    };
    getOrders($scope.page, $scope.search.content);
}]);