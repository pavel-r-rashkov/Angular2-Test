System.register(['angular2/platform/browser', './testcomp'], function(exports_1) {
    var browser_1, testcomp_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (testcomp_1_1) {
                testcomp_1 = testcomp_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(testcomp_1.TestComp);
        }
    }
});
//# sourceMappingURL=boot.js.map