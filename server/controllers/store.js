exports.create = function (req, res, next) {
    res.send({
        status: 200
    })
}
exports.find = function (req, res, next) {
    res.send({
        total: 300,
        count: 20,
        content: re.getMore({
            id: 'ID',
            name: 'GOODSNAME',
            img: '/img/logo.png',
            count: 20,
            restCount: 10,
            cLevel: 30,
            cPoint: 100,
            single: true,
            price: 35.0,
            postage: true,
            storeAt: new Date()
        })
    })
}
exports.findById = function (req, res, next) {
    res.send({
            id: 'ID',
            name: 'GOODSNAME',
            img: '/img/logo.png',
            count: 20,
            restCount: 10,
            cLevel: 30,
            cPoint: 100,
            single: true,
            price: 35.0,
            postage: true,
            storeAt: new Date()
        })
}
exports.updateById = function (req, res, next) {
    res.send({
        status: 200
    })
}
exports.distroyById = function (req, res, next) {
    res.send({
        status: 200
    })
}
exports.store = function (req, res, next) {
    res.send({
        status: 200
    })
}
exports.createOrder = function (req, res, next) {
    res.send({
        status: 200
    })
}
exports.findOrders = function (req, res, next) {
    res.send({
        total: 300,
        count: 20,
        content: getMore({
            id: 'ID',
            created: new Date(),
            orderNo: 'ORDERNUMBER',
            state: 0,
            count: 111,
            Logistical: {
                tracking: 'TRACKINGNUMBER',
                company: 'COMPANYCOMPANYCOMPANYCOMPANY'
            },
            goods: {
                id: 'GOODSID',
                name: 'GOODSNAME',
                img: '/img/logo.png',
                cPoint: 458,
                postage: true
            },
            user: {
                id: 5,
                name: 'USERNAME',
                phone: 8647584125,
                addr: 'ADDRESSADDRESSADDRESSADDRESSADDRESS'
            }
        })
    })
}
exports.findOrderById = function (req, res, next) {
    res.send({
            id: 'ID',
            created: new Date(),
            orderNo: 'ORDERNUMBER',
            state: 0,
            count: 111,
            Logistical: {
                tracking: 'TRACKINGNUMBER',
                company: 'COMPANYCOMPANYCOMPANYCOMPANY'
            },
            goods: {
                id: 'GOODSID',
                name: 'GOODSNAME',
                img: '/img/logo.png',
                cPoint: 458,
                postage: true
            },
            user: {
                id: 5,
                name: 'USERNAME',
                phone: 8647584125,
                addr: 'ADDRESSADDRESSADDRESSADDRESSADDRESS'
            }
        })
}
exports.updateOrderById = function (req, res, next) {
    res.send({
        status: 200
    })
}
exports.destroyOrderById = function (req, res, next) {
    res.send({
        status: 200
    })
}