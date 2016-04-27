(function (window, angular) {
    var module = angular.module('api.tyq', ['ngResource']);
    var urlBase = "/api";
    var authHeader = 'authorization';
    module.factory(
        'Article',
        ['ExpressResource', 'LoopBackAuth', '$injector',
            function (Resource, LoopBackAuth, $injector) {
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
                            utl: urlBase + '/news/:id',
                            method: 'PUT'
                        },
                        "create": {
                            utl: urlBase + '/news',
                            method: 'POST'
                        }
                    });
                R.modelName = "Article";
                return R;
            }])
        .factory(
            'Topic',
            ['ExpressResource', 'LoopBackAuth', '$injector',
                function (Resource, LoopBackAuth, $injector) {
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
                                utl: urlBase + '/topics/:id',
                                method: 'PUT'
                            },
                            "create": {
                                utl: urlBase + '/topics',
                                method: 'POST'
                            }
                        });
                    R.modelName = "Topic";
                    return R;
                }])
        .factory(
            'User',
            ['ExpressResource', 'LoopBackAuth', '$injector',
                function (Resource, LoopBackAuth, $injector) {
                    var R = Resource(
                        urlBase + '/Users/:id',
                        {'id': '@id'},
                        {
                            "find": {
                                url: urlBase + '/Users',
                                method: 'GET'
                            },
                            "findById": {
                                url: urlBase + '/Users/:id',
                                method: 'GET'
                            },
                            "updateById": {
                                utl: urlBase + '/Users/:id',
                                method: 'PUT'
                            },
                            "findHealth": {
                                url: urlBase + '/Users/:id/health',
                                method: 'GET'
                            },
                            "updateHealth": {
                                url: urlBase + '/Users/:id/health',
                                method: 'PUT'
                            },
                            "findExamine": {
                                url: urlBase + '/Users/:id/examine',
                                method: 'GET'
                            },
                            "updateExamine": {
                                url: urlBase + '/Users/:id/examine',
                                method: 'PUT'
                            },
                            "findSchema": {
                                url: urlBase + '/Users/:id/schema',
                                method: 'GET'
                            },
                            "updateSchema": {
                                url: urlBase + '/Users/:id/schema',
                                method: 'PUT'
                            },
                            "findLog": {
                                url: urlBase + '/Users/:id/log',
                                method: 'GET'
                            },
                            "updateLog": {
                                url: urlBase + '/Users/:id/log',
                                method: 'PUT'
                            }
                        });
                    R.modelName = "User";
                    return R;
                }])
        .factory('LoopBackAuth', function () {
            var props = ['accessTokenId', 'currentUserId'];
            var propsPrefix = '$LoopBack$';

            function LoopBackAuth() {
                var self = this;
                props.forEach(function (name) {
                    self[name] = load(name);
                });
                this.rememberMe = undefined;
                this.currentUserData = null;
            }

            LoopBackAuth.prototype.save = function () {
                var self = this;
                var storage = this.rememberMe ? window.localStorage : window.sessionStorage;
                props.forEach(function (name) {
                    save(storage, name, self[name]);
                });
            };

            LoopBackAuth.prototype.setUser = function (accessTokenId, userId, userData) {
                this.accessTokenId = accessTokenId;
                this.currentUserId = userId;
                this.currentUserData = userData;
            };

            LoopBackAuth.prototype.clearUser = function () {
                this.accessTokenId = null;
                this.currentUserId = null;
                this.currentUserData = null;
            };

            LoopBackAuth.prototype.clearStorage = function () {
                props.forEach(function (name) {
                    save(sessionStorage, name, null);
                    save(localStorage, name, null);
                });
            };

            return new LoopBackAuth();

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
            $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
        }])
        .factory('LoopBackAuthRequestInterceptor', ['$q', '$rootScope', 'LoopBackAuth',
            function ($q, $rootScope, LoopBackAuth) {
                return {
                    'request': function (config) {

                        // filter out non urlBase requests
                        if (config.url.substr(0, urlBase.length) !== urlBase) {
                            return config;
                        }
                        if (LoopBackAuth.accessTokenId) {
                            config.params = config.params || {};
                            config.params.access_token = LoopBackAuth.accessTokenId;
                            config.headers[authHeader] = LoopBackAuth.accessTokenId;
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