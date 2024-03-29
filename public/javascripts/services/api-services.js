(function (window, angular) {
    var module = angular.module('tyq.api', ['ngResource']);
    var urlBase = "/apis";
    var authHeader = 'authorization';
    module.factory('Article', ['ExpressResource', function (Resource) {
            var R = Resource(
                urlBase + '/news/:id',
                {'id': '@id'},
                {
                    "find": {
                        url: urlBase + '/news',
                        method: 'GET'
                    },
                    "findById": {
                        url: urlBase + '/news/:id',
                        method: 'GET'
                    },
                    "updateById": {
                        url: urlBase + '/news/:id',
                        method: 'PUT'
                    },
                    "create": {
                        url: urlBase + '/news',
                        method: 'POST'
                    }
                });
            R.modelName = "Article";
            return R;
        }])
        .factory('Notice',
            ['ExpressResource', function (Resource) {
                var R = Resource(
                    urlBase + '/publish/:id',
                    {'id': '@id'},
                    {
                        "publish": {
                            url: urlBase + '/publish',
                            method: 'GET',
                            isArray: true
                        },
                        "createPublish": {
                            url: urlBase + '/publish',
                            method: 'POST'
                        },
                        "updatePublishById": {
                            url: urlBase + '/publish/:id',
                            method: 'POST'
                        },
                        "destroyPublishById": {
                            url: urlBase + '/publish/:id',
                            method: 'DELETE'
                        },
                        "findPublishById": {
                            url: urlBase + '/publish/:id',
                            method: 'GET'
                        }
                    });
                R.modelName = "Notice";
                return R;
            }])
        .factory('Topic', ['ExpressResource', function (Resource) {
            var R = Resource(
                urlBase + '/topics/:id',
                {'id': '@id'},
                {
                    "find": {
                        url: urlBase + '/topics',
                        method: 'GET'
                    },
                    "findById": {
                        url: urlBase + '/topics/:id',
                        method: 'GET'
                    },
                    "updateById": {
                        url: urlBase + '/topics/:id',
                        method: 'PUT'
                    },
                    "destroyById": {
                        url: urlBase + '/topics/:id',
                        method: 'DELETE'
                    },
                    "replyList": {
                        url: urlBase + '/topics/:id/reply',
                        method: 'GET',
                        isArray: true
                    },
                    "destroyReply": {
                        url: urlBase + '/topics/:id/reply/:fk',
                        method: 'DELETE'
                    },

                    "createTopic":{
                        url: urlBase+'/topics',
                        method: 'POST'
                    }
                });
            R.modelName = "Topic";
            return R;
        }])
        .factory('User', ['ExpressResource', function (Resource) {
            var R = Resource(
                urlBase + '/users/:id',
                {'id': '@id'},
                {
                    "find": {
                        url: urlBase + '/users',
                        method: 'GET'
                    },
                    "findById": {
                        url: urlBase + '/users/:id',
                        method: 'GET'
                    },
                    "findPoints": {
                        url: urlBase + '/users/:id/points',
                        method: 'GET'
                    },
                    "destroyPoints": {
                        url: urlBase + '/users/:id/points/:fk',
                        method: 'DELETE'
                    },
                    /*
                    修改用户信息
                     */
                    "updateById": {
                        url: urlBase + '/users/:id',
                        method: 'PUT'
                    },
                    "findHealth": {
                        url: urlBase + '/users/:id/health',
                        method: 'GET'
                    },
                    "updateHealth": {
                        url: urlBase + '/users/:id/health',
                        method: 'PUT'
                    },
                    "findExamine": {
                        url: urlBase + '/users/:id/examine',
                        method: 'GET'
                    },
                    "updateExamine": {
                        url: urlBase + '/users/:id/examine',
                        method: 'PUT'
                    },
                    "findSchema": {
                        url: urlBase + '/users/:id/schema',
                        method: 'GET'
                    },
                    "updateSchema": {
                        url: urlBase + '/users/:id/schema',
                        method: 'PUT'
                    },
                    "findLog": {
                        url: urlBase + '/users/:id/log',
                        method: 'GET'
                    },
                    "updateLog": {
                        url: urlBase + '/users/:id/log',
                        method: 'PUT'
                    },
                    "findTopics": {
                        url: urlBase + '/users/:id/topics',
                        method: 'GET'
                    },
                    "destroyTopics": {
                        url: urlBase + '/users/:id/topics',
                        method: 'DELETE',
                    },
                    "findAnalysis": {
                        url: urlBase + '/users/:id/analysis',
                        method: 'GET',
                        isArray: true
                    }
                });
            R.modelName = "User";
            return R;
        }])
        .factory('Store', ['ExpressResource', function (Resource) {
            var R = Resource(
                urlBase + '/Users/:id',
                {'id': '@id'},
                {
                    "create": {
                        url: urlBase + "/goods",
                        method: "POST"
                    },
                    "find": {
                        url: urlBase + "/goods",
                        method: "GET"
                    },
                    "destroyMore": {
                        url: urlBase + "/goods",
                        method: "DELETE"
                    },
                    "findById": {
                        url: urlBase + "/goods/:id",
                        method: "GET"
                    },
                    "updateById": {
                        url: urlBase + "/goods/:id",
                        method: "PUT"
                    },
                    "destroyById": {
                        url: urlBase + "/goods/:id",
                        method: "DELETE"
                    },
                    "store": {
                        url: urlBase + "/goods/store",
                        method: "POST"
                    },
                    "createOrder": {
                        url: urlBase + "/goods/:id/orders",
                        method: "POST"
                    },
                    "orders": {
                        url: urlBase + "/orders",
                        method: "GET"
                    },
                    "destroyOrdersMore": {
                        url: urlBase + "/orders",
                        method: "DELETE"
                    },
                    "findOrderById": {
                        url: urlBase + "/orders/:id",
                        method: "GET"
                    },
                    "updateOrderById": {
                        url: urlBase + "/orders/:id",
                        method: "PUT"
                    },
                    "destroyOrderById": {
                        url: urlBase + "/orders/:id",
                        method: "DELETE"
                    }
                })
            R.modelName = "Store";
            return R;
        }])
        .factory('ExpressAuth', function () {
            var props = ['accessTokenId', 'currentUserId'];
            var propsPrefix = '$Express$';

            function ExpressAuth() {
                var self = this;
                props.forEach(function (name) {
                    self[name] = load(name);
                });
                this.rememberMe = undefined;
                this.currentUserData = null;
            }

            ExpressAuth.prototype.save = function () {
                var self = this;
                var storage = this.rememberMe ? window.localStorage : window.sessionStorage;
                props.forEach(function (name) {
                    save(storage, name, self[name]);
                });
            };

            ExpressAuth.prototype.setUser = function (accessTokenId, userId, userData) {
                this.accessTokenId = accessTokenId;
                this.currentUserId = userId;
                this.currentUserData = userData;
            };

            ExpressAuth.prototype.clearUser = function () {
                this.accessTokenId = null;
                this.currentUserId = null;
                this.currentUserData = null;
            };

            ExpressAuth.prototype.clearStorage = function () {
                props.forEach(function (name) {
                    save(sessionStorage, name, null);
                    save(localStorage, name, null);
                });
            };

            return new ExpressAuth();

            // Note: LocalStorage converts the value to string
            // We are using empty string as a marker for null/undefined values.
            function save(storage, name, value) {
                var key = propsPrefix + name;
                if (value == null) value = '';
                storage[key] = value;
            }

            function load(name) {
                var key = propsPrefix + name;
                return localStorage[key] || sessionStorage[key] || null;
            }
        })
        .config(['$httpProvider', function ($httpProvider) {
            $httpProvider.interceptors.push('ExpressAuthRequestInterceptor');
        }])
        .factory('ExpressAuthRequestInterceptor', ['$q', '$rootScope', 'ExpressAuth',
            function ($q, $rootScope, ExpressAuth) {
                return {
                    'request': function (config) {

                        // filter out non urlBase requests
                        if (config.url.substr(0, urlBase.length) !== urlBase) {
                            return config;
                        }
                        if (ExpressAuth.accessTokenId) {
                            config.params = config.params || {};
                            config.params.access_token = ExpressAuth.accessTokenId;
                            config.headers[authHeader] = ExpressAuth.accessTokenId;
                        } else if (config.__isGetCurrentUser__) {
                            // Return a stub 401 error for User.getCurrent() when
                            // there is no user logged in
                            var res = {
                                body: {error: {status: 401}},
                                status: 401,
                                config: config,
                                headers: function () {
                                    return undefined;
                                }
                            };
                            return $q.reject(res);
                        }
                        return config || $q.when(config);
                    },
                    'responseError': function (rejection) {
                        switch (rejection.status) {
                            case 401:
                                if (rejection.config.url !== "/api/WUsers/login")
                                    $rootScope.$broadcast('auth:loginRequired');
                                break;
                            case 500:
                                $rootScope.$broadcast('error:unknown', rejection);
                                break;
                        }
                        return $q.reject(rejection);
                    },
                };
            }])
        .provider('ExpressResource', function ExpressResourceProvider() {

            this.setAuthHeader = function (header) {
                authHeader = header;
            };
            this.setUrlBase = function (url) {
                urlBase = url;
            };
            this.getUrlBase = function () {
                return urlBase;
            };

            this.$get = ['$resource', function ($resource) {
                return function (url, params, actions) {
                    var resource = $resource(url, params, actions);
                    resource.prototype.$save = function (success, error) {
                        var result = resource.upsert.call(this, {}, this, success, error);
                        return result.$promise || result;
                    };
                    return resource;
                };
            }];
        });
})(window, window.angular);