var rq = require('../lib/request');
exports.find = function (req, res, next) {
    res.send({
        total: 2000,
        count: 20,
        content: rq.getMore({
            id: 'ID',
            headImg: '/img/store.jpg',
            name: 'NAME',
            phone: '17765989545',
            BGtype: '一型糖尿病',
            lastBG: '5mmol/L',
            points: 89,
            level: 5,
            topics: 8,
            replies: 223,
            role: 1
        })
    });
}
exports.findById = function (req, res, next) {
    res.send({
        id: 'ID',
        headImg: '/img/weixin.png',
        name: 'NAME',
        phone: '8454545454',
        BGtype: '一型糖尿病',
        lastBG: '5mmol/L',
        points: '89',
        role: 1,
        sex: '男',
        topics: 8,
        level: 5,
        replies: 223
    });
}
exports.updateById = function (req, res, next) {
    res.send(req.body)
}
exports.findHealth = function (req, res, next) {
    res.send({
        tops: 160,
        weight: 60,
        BMI: 20,
        symptoms: "多饮, 多食",
        chronic: "肾病, 眼病",
        labourIntensive: "轻体力劳动",
        medication: "二甲双X"
    });
}
exports.updateHealth = function (req, res, next) {
    res.send(req.body)
}
exports.findExamine = function (req, res, next) {
    res.send({
        GDM: {
            fasting: 6.4,
            OTGG2h: 9.5,
            HBA1c: 8.7,
            INS: 4.4,
            CP: 6.6
        },
        BG: {
            CH: 7.8,
            HDICH: 5.6,
            TC: 3.4,
            LDICH: 4.4
        },
        GPT: {
            GPT: 3.0
        }
    })
}
exports.updateExamine = function (req, res, next) {
    res.send(req.body)
}
exports.findLog = function (req, res, next) {
    res.send({
    diet: [{
            dinnerType: 1,
            eated: [{
                type: 1,
                dosage: 150,
                unit: "g"
            }],
            remark: 'REMARK',
            remarkImg: ['/img/store.jpg']
        },{
            dinnerType: 2,
            eated: [{
                type: 1,
                dosage: 150,
                unit: "g"
            }],
            remark: 'REMARK',
            remarkImg: ['/img/store.jpg']
        }],
        sport: [{
            time: new Date(),
            record: 'RECORD',
            rematk: 'REMARK',
            remarkImg: ['/img/store.jpg']
        },{
            time: new Date(),
            record: 'RECORD',
            rematk: 'REMARK',
            remarkImg: ['/img/store.jpg']
        }],
        ADrug: [{
            time: new Date(),
            record: 'RECORD',
            rematk: 'REMARK',
            remarkImg: ['/img/store.jpg']
        },{
            time: new Date(),
            record: 'RECORD',
            rematk: 'REMARK',
            remarkImg: ['/img/store.jpg']
        }]
    });
}
exports.findPoints = function (req, res, next) {
    {
        total: 2000,
        count: 20,
        content: [{
            id: 1,
            created: new Date(),
            count: 2,
            reason: {
                message: 'MESSAGE',
                goodId: 1
            }
        },{
            id: 2,
            created: new Date(),
            count: 3,
            reason: {
                message: 'MESSAGE',
                goodId: 2
            }
        },{
            id: 3,
            created: new Date(),
            count: 3,
            reason: {
                message: 'MESSAGE'
            }
        }]
    }
}
exports.destroyPoints = function (req, res, next) {
    res.send({status: 200})
}
exports.findSchema = function (req, res, next) {
    res.send({
        diet: [{
            type: 1,
            dosage: 150,
            unit: "g"
        },{
            type: 3,
            dosage: 4,
            unit: "ng/ml"
        }],
        sport: [{
            type: 1,
            dosage: 1.2,
            unit: "mmo/l"
        },{
            type: 1,
            dosage: 1.2,
            unit: "mmo/l"
        }]
    });
}
exports.updateSchema = function (req, res, next) {
    res.send(req.body)
}
exports.findAnalysis = function (req, res, next) {
    res.send([{
        day: 1,
        BG: [2,3,4,5,6,6,8,8]
    },{
        day: 2,
        BG: [2,3,4,5,6,6,8,8]
    },{
        day: 3,
        BG: [2,3,4,5,6,6,8,8]
    },{
        day: 4,
        BG: [2,3,4,5,6,6,8,8]
    },{
        day: 5,
        BG: [2,3,4,5,6,6,8,8]
    }])
}
exports.createMessages = function (req, res, next) {
    res.send({
        status: 200
    })
}
exports.createTopics = function (req, res, next) {
    res.send({
        status: 200
    })
}
exports.findTopics = function (req, res, next) {
    res.send({
        total: 300,
        count: 20,
        content: rq.getMore({
            id: 'ID',
            content: 'CONTENT',
            imgs: '/img/testImg1.png',
            created: new Date(),
            reply: 858,
            view: 555,
            like: 88,
            state: {
                locked: true,
                istop: false
            }
        })
    });
}
exports.destroyTopics = function (req, res, next) {
    res.send({
        status: 200
    })
}
exports.findExpress = function (req, res, next) {
    res.send([{
        id: 1,
        name: 'NAME',
        phone: 57867,
        addr: 'ADDRESSADDRESSADDRESSADDRESSADDRESSADDRESS',
        default: true
    },{
        id: 1,
        name: 'NAME',
        phone: 57867,
        addr: 'ADDRESSADDRESSADDRESSADDRESSADDRESSADDRESS',
        default: false
    },{
        id: 1,
        name: 'NAME',
        phone: 57867,
        addr: 'ADDRESSADDRESSADDRESSADDRESSADDRESSADDRESSADDRESS',
        default: false
    },{
        id: 1,
        name: 'NAME',
        phone: 57867,
        addr: 'ADDRESSADDRESSADDRESSADDRESSADDRESSADDRESSADDRESS',
        default: false
    }])
}
exports.createExpress = function (req, res, next) {
    res.send({
        status: 200
    })
}
exports.destroyExpress = function (req, res, next) {
    res.send({
        status: 200
    })
}
exports.findOrders = function (req, res, next) {
    res.send()
}