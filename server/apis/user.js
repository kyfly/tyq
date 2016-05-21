exports.default = {
    name: "user",
    desc: "糖友圈用户",
    controller: "user",
    routes: [{
        api: "/users",
        method: "get",
        action: "find",
        remote: "/users",
        desc: "糖友圈用户列表"
    },{
        api: "/users/:id",
        method: "get",
        action: "findById",
        remote: "/users/:id",
        desc: "糖友圈用户详情"
    },{
        api: "/users/:id",
        method: "put",
        action: "updateById",
        remote: "/users/:id",
        desc: "修改用户信息"
    },{
        api: "/users/:id/health",
        method: "get",
        action: "findHealth",
        remote: "/users/:id/health",
        desc: "用户健康信息"
    },{
        api: "/users/:id/health",
        method: "put",
        action: "updateHealth",
        remote: "/users/:id/health",
        desc: "修改健康信息"
    },{
        api: "/users/:id/examine",
        method: "get",
        action: "findExamine",
        remote: "/users/:id/examine",
        desc: "用户检查信息"
    },{
        api: "/users/:id/examine",
        method: "put",
        action: "updateExamine",
        remote: "/users/:id/examine",
        desc: "修改用户检查信息"
    },{
        api: "/users/:id/log",
        method: "get",
        action: "findLog",
        remote: "/users/:id/log",
        desc: "用户控糖日志"
    },{
        api: "/users/:id/schema",
        method: "get",
        action: "findSchema",
        remote: "/users/:id/schema",
        desc: "用户控糖方案"
    },{
        api: "/users/:id/schema",
        method: "put",
        action: "updateSchema",
        remote: "/users/:id/schema",
        desc: "修改用户控糖方案"
    },{
        api: "/users/:id/analysis",
        method: "get",
        action: "findAnalysis",
        remote: "/users/:id/analysis",
        desc: "用户血糖分析"
    },{
        api: "/users/:id/points",
        method: "get",
        action: "findPoints",
        remote: "/users/:id/points",
        desc: "用户积分变化列表"
    },{
        api: "/users/:id/points/:fk",
        method: "delete",
        action: "destroyPoints",
        remote: "/users/:id/points/:fk",
        desc: "删除用户积分变化记录"
    },/*{
        api: "/users/:id/messages",
        method: "post",
        action: "createMessages",
        remote: "/users/:id/messages",
        desc: "用户发送消息"
    },*/{
        api: "/users/:id/topics",
        method: "post",
        action: "createTopics",
        remote: "/users/:id/topics",
        desc: "发布话题"
    },{
        api: "/users/:id/topics",
        method: "get",
        action: "findTopics",
        remote: "/users/:id/topics",
        desc: "用户发布话题列表"
    },{
        api: "/users/:id/topics",
        method: "delete",
        action: "destroyTopics",
        remote: "/users/:id/topics",
        desc: "清理用户发布的所有话题"
    },{
        api: "/users/:id/express",
        method: "get",
        action: "findExpress",
        remote: "/users/:id/express",
        desc: "获取用户快递信息"
    },{
        api: "/users/:id/express",
        method: "post",
        action: "createExpress",
        remote: "/users/:id/express",
        desc: "用户添加快递信息"
    },{
        api: "/users/:id/express",
        method: "delete",
        action: "destroyExpress",
        remote: "/users/:id/express",
        desc: "用户删除快递信息"
    },{
        api: "/users/:id/orders",
        method: "get",
        action: "findOrders",
        remote: "/users/:id/orders",
        desc: "用户获取订单列表"
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