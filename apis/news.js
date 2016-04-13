exports.default = {
    name: "news",
    desc: "糖友圈微信公众平台图文素材",
    controller: "news",
    routes: [{
        api: "/news",
        method: "get",
        action: "list",
        remote: "/api/news",
        desc: "图文素材列表"
    },{
        api: "/news/:id",
        method: "get",
        action: "findById",
        remote: "/api/news/:id",
        desc: "图文详情"
    },{
        api: "/news/:id",
        method: "put",
        action: "modify",
        remote: "/api/news/:id",
        desc: "修改图文信息"
    },{
        api: "/news/:id/synchronize",
        method: "post",
        action: "synchronize",
        remote: "/api/news/:id/synchronize",
        desc: "同步单条图文信息到发现页面"
    },{
        api: "/news/:id",
        method: "delete",
        action: "distroy",
        remote: "/api/news/:id",
        desc: "删除一条图文信息"
    }],
    properties: {
        id: {
            type: "id",
            desc: "图文ID"
        },
        title: {
            type: "string",
            desc: "图文标题"
        },
        thumb_url: {
            type: "string",
            desc: "图文信息封面"
        },
        digest: {
            type: "string",
            desc: "图文摘要"
        },
        content: {
            type: "string",
            desc: "图文内容"
        },
        content_source_url: {
            type: "string",
            desc: "图文消息阅读原文链接"
        },
        update_time: {
            type: "date",
            desc: "图文最后更新时间"
        }
    }
}