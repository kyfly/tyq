exports.default = {
    name: "topic",
    desc: "糖友圈用户",
    controller: "topic",
    routes: [{
        api: "/topics",
        method: "get",
        action: "list",
        remote: "/api/topics",
        desc: "糖友圈用户列表"
    },{
        api: "/topics/:id",
        method: "get",
        action: "findById",
        remote: "/api/topics/:id",
        desc: "糖友圈用户详情"
    },{
        api: "/topics/:id",
        method: "put",
        action: "modify",
        remote: "/api/topics/:id",
        desc: "修改用户信息"
    }],
    properties: [{
        id: "string",
        name: "string"
    }]
}