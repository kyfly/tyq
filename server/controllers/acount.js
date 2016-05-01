exports.login = function (req, res, next) {
    res.send({
        id: "sjdhdhedhDKWKAkdskdlcKAKW4DVFD23SF4",
        token: "DOFI424tgrb5RDS4r4ghbEDFHEIOFHEUdsfv3r2g2g4g4sfI",
        created: "2015-12-02T04:05:00.396Z",
        ttl: 7200
    });
}
exports.register = function (req, res, next) {
    
}
exports.usercumulate = function (req, res, next) {
    res.send({
        user:
        {
            all: 20000,
            new: 10
        },
        BGRecord:{
            all: 300,
            new: 20
        },
        forum: {
            pv: 40000,
            uv: 3000
        },
        article: {
            pv: 4444,
            uv: 3000
        }
    })
}