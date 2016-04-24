exports.default = {
    name: "store",
    desc: "糖友圈商城",
    controller: "store",
    routes: [{
        api: "/goods",
        method: "post",
        action: "create",
        remote: "/goods",
        desc: "上传商品"
    },{
        api: "/goods",
        method: "get",
        action: "find",
        remote: "/goods",
        desc: "获取商品列表"
    },{
        api: "/goods/:id",
        method: "get",
        action: "findById",
        remote: "/goods/:id",
        desc: "商品详细信息"
    },{
        api: "/goods/:id",
        method: "put",
        action: "updateById",
        remote: "/goods/:id",
        desc: "修改商品信息"
    },{
        api: "/goods/:id",
        method: "delete",
        action: "distroyById",
        remote: "/goods/:id",
        desc: "删除商品"
    },{
        api: "/goods/store",
        method: "post",
        action: "store",
        remote: "/goods/store",
        desc: "上架/下架商品"
    },{
        api: "/goods/:id/orders",
        method: "post",
        action: "createOrder",
        remote: "/goods/:id/orders",
        desc: "下订单"
    },{
        api: "/orders",
        method: "get",
        action: "findOrders",
        remote: "/orders",
        desc: "订单列表"
    },{
        api: "/orders/:id",
        method: "get",
        action: "findOrderById",
        remote: "/orders/:id",
        desc: "订单详情"
    },{
        api: "/orders/:id",
        method: "put",
        action: "updateOrderById",
        remote: "/orders/:id",
        desc: "编辑订单信息"
    },{
        api: "/orders/:id",
        method: "delete",
        action: "destroyOrderById",
        remote: "/orders/:id",
        desc: "删除订单"
    }]
}