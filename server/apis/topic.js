exports.default = {
    name: "topic",
    desc: "糖友圈话题",
    controller: "topic",
    routes: [{
        api: "/topics",
        method: "get",
        action: "list",
        remote: "/api/topics",
        desc: "话题列表"
    },{
        api: "/topics/:id",
        method: "get",
        action: "findById",
        remote: "/api/topics/:id",
        desc: "话题详情"
    },{
        api: "/topics/:id",
        method: "delete",
        action: "distroy",
        remote: "/api/topics/:id",
        desc: "删除话题"
    }],
    properties: [{
        id: "string",
        name: "string"
    }]
}