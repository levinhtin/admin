System.register(['@angular/core/testing', '../../../app/pipes/ellipsis.pipe'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, ellipsis_pipe_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (ellipsis_pipe_1_1) {
                ellipsis_pipe_1 = ellipsis_pipe_1_1;
            }],
        execute: function() {
            testing_1.describe('Pipe Ellipsis Tests', function () {
                var ellipsis;
                testing_1.beforeEach(function () {
                    ellipsis = new ellipsis_pipe_1.EllipsisPipe();
                });
                testing_1.it('Should be keep: "Hello world" when limit: 20', function () {
                    testing_1.expect(ellipsis.transform('Hello world', 20)).toEqual('Hello world');
                });
                testing_1.it('Should be keep: "Hello world" when limit: 0', function () {
                    testing_1.expect(ellipsis.transform('Hello world', 20)).toEqual('Hello world');
                });
                testing_1.it('Should be keep: "Hello world" when limit: undefined', function () {
                    testing_1.expect(ellipsis.transform('Hello world', undefined)).toEqual('Hello world');
                });
                testing_1.it('Should be cut: "Hello w..."', function () {
                    testing_1.expect(ellipsis.transform('Hello world', 7)).toEqual('Hello w...');
                });
            });
        }
    }
});
//# sourceMappingURL=ellipsis.spec.js.map