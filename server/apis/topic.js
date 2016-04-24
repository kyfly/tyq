exports.default = {
    name: "topic",
    desc: "糖友圈话题",
    controller: "topic",
    routes: [{
        api: "/topics",
        method: "get",
        action: "find",
        remote: "/topics",
        desc: "话题列表"
    },{
        api: "/topics/:id",
        method: "get",
        action: "findById",
        remote: "/topics/:id",
        desc: "话题详情"
    },{
        api: "/topics/:id",
        method: "put",
        action: "updateById",
        remote: "/topics/:id",
        desc: "话题详情"
    },{
        api: "/topics/:id",
        method: "delete",
        action: "distroyById",
        remote: "/topics/:id",
        desc: "删除话题"
    },{
        api: "/topics/:id/reply",
        method: "get",
        action: "replyList",
        remote: "/topics/:id/reply",
        desc: "话题回复列表"
    },{
        api: "/topics/:id/reply/:fk",
        method: "delete",
        action: "distroyReply",
        remote: "/topics/:id/reply/:fk",
        desc: "删除话题回复"
    },{
        api: "/publish",
        method: "get",
        action: "publish",
        remote: "/publish",
        desc: "公告列表"
    },{
        api: "/publish",
        method: "post",
        action: "createPublish",
        remote: "/publish",
        desc: "发布公告"
    },{
        api: "/publish/:id",
        method: "post",
        action: "updatePublishById",
        remote: "/publish/:id",
        desc: "编辑公告"
    },{
        api: "/publish/:id",
        method: "delete",
        action: "distroyPublishById",
        remote: "/publish/:id",
        desc: "删除公告"
    }],
    properties: [{
        id: "string",
        name: "string"
    }]
}