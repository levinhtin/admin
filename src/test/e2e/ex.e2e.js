System.register(['@angular/core/testing', '@angular/compiler/testing', '@angular/core', '@angular/router/testing', '@angular/router-deprecated', '@angular/common', '@angular/router-deprecated/src/router', '@angular/common/testing', '../../app/components/home/home.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, testing_2, core_1, testing_3, router_deprecated_1, common_1, router_1, testing_4, home_component_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (testing_2_1) {
                testing_2 = testing_2_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (testing_3_1) {
                testing_3 = testing_3_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (testing_4_1) {
                testing_4 = testing_4_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            }],
        execute: function() {
            // setBaseTestProviders(TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);
            testing_1.describe('Home Page', function () {
                var builder;
                testing_1.beforeEachProviders(function () { return [
                    router_deprecated_1.RouteRegistry,
                    testing_3.ROUTER_FAKE_PROVIDERS,
                    core_1.provide(common_1.Location, { useClass: testing_4.SpyLocation }),
                    { provide: common_1.LocationStrategy, useClass: common_1.PathLocationStrategy },
                    core_1.provide(router_deprecated_1.Router, { useClass: router_1.RootRouter }),
                    core_1.provide(router_deprecated_1.ROUTER_PRIMARY_COMPONENT, { useValue: home_component_1.HomeComponent })
                ]; });
                testing_1.beforeEach(testing_1.inject([testing_2.TestComponentBuilder], function (tcb) {
                    builder = tcb;
                }));
                // it('should correctly home page title', () => {
                //     // browser.sleep(5000);
                //     expect(browser.getTitle()).toEqual('Angular 2 QuickStart');
                // });
                testing_1.it('should change title', testing_1.async(function () {
                    builder.createAsync(home_component_1.HomeComponent).then(function (fixture) {
                        fixture.detectChanges();
                        fixture.debugElement.componentInstance.title = 'New Title';
                        fixture.detectChanges();
                        var compiled = fixture.debugElement.nativeElement;
                        // expect(1).toEqual(1);
                        testing_1.expect(compiled.querySelector('h3')).toHaveText('New Title');
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=ex.e2e.js.map