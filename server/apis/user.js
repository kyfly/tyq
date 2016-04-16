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
    properties: {
        id: {
            type: "id",
            desc: "用户ID"
        },
        name: {
            type: "string",
            desc: "用户姓名"
        },
        openid: {
            type: "string",
            desc: "用户微信ID"
        },
        role: {
            type: "number",
            desc: "用户角色，0：黑名单用户，1：管理员"
        },
        points: {
            type: "number",
            desc: "用户积分数量"
        },
        level: {
            type: "number",
            desc: "用户论坛等级"
        },
        posts: {
            type: "number",
            desc: "文章数量"
        }
    }
}