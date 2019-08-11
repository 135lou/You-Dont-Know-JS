var MyModules = (function Manager() {
    var modules = {};

    function define(name, deps, imp) {
        for (var i = 0; i < deps.length; i++) {
            deps[i] = modules[deps[i]];
        }
        modules[name] = imp.apply(imp, deps);
    }

    function get(name) {
        return modules[name];
    }

    return {
        define: define,
        get: get
    }
})();

MyModules.define("foo", ["bar"], function () {
    function hello(who) {
        return "let me" + who;
    }

    return {
        hello: hello
    }
});

MyModules.define('foo',["bar"], function (bar) {
    var hungry =
})
