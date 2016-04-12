exports.default = {
    name: "user",
    desc: "糖友圈用户",
    controller: "user",
    routes: [{
        api: "/users",
        method: "get",
        action: "list",
        remote: "/api/users",
        desc: "糖友圈用户列表"
    },{
        api: "/users/:id",
        method: "get",
        action: "findById",
        remote: "/api/users/:id",
        desc: "糖友圈用户详情"
    },{
        api: "/users/:id",
        method: "put",
        action: "modify",
        remote: "/api/users/:id",
        desc: "修改用户信息"
    }],
    properties: [{
        id: "string",
        name: "string"
    }]
}