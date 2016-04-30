var rq = require('../lib/request');
exports.find = function (req, res, next) {
    res.send({
        total: 2000,
        count: 20,
        content: rq.getMore({
            id: 'ID',
            headImg: '/img/logo.png',
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
            remarkImg: ['/img/logo.png']
        },{
            dinnerType: 2,
            eated: [{
                type: 1,
                dosage: 150,
                unit: "g"
            }],
            remark: 'REMARK',
            remarkImg: ['/img/logo.png']
        }],
        sport: [{
            time: new Date(),
            record: 'RECORD',
            rematk: 'REMARK',
            remarkImg: ['/img/logo.png']
        },{
            time: new Date(),
            record: 'RECORD',
            rematk: 'REMARK',
            remarkImg: ['/img/logo.png']
        }],
        ADrug: [{
            time: new Date(),
            record: 'RECORD',
            rematk: 'REMARK',
            remarkImg: ['/img/logo.png']
        },{
            time: new Date(),
            record: 'RECORD',
            rematk: 'REMARK',
            remarkImg: ['/img/logo.png']
        }]
    });
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
    res.send()
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
        total: 2000,
        count: 20,
        content: rq.getMore({
            id: 'ID',
            headImg: '/img/logo.ong',
            name: 'NAME',
            level: 20,
            topics: 23,
            replies: 45,
            points: 522,
            role: 2,
            openid: 'OPENIDOPENIDOPENIDOPENID'
        })
    });
}
exports.distroyTopics = function (req, res, next) {
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
exports.distroyExpress = function (req, res, next) {
    res.send({
        status: 200
    })
}
exports.findOrders = function (req, res, next) {
    res.send()
}