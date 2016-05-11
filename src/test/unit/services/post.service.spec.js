System.register(['@angular/core/testing', '../../../app/services/post.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, post_service_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            }],
        execute: function() {
            testing_1.describe('Post service', function () {
                testing_1.beforeEachProviders(function () { return [post_service_1.PostService]; });
                // beforeEachProviders(() => [
                //   // BaseRequestOptions,
                //   // MockBackend,
                //   provide(Http, {
                //     useFactory: (backend: any, defaultOptions: any): any => {
                //       return new Http(backend, defaultOptions);
                //     }
                //     // deps: [MockBackend, BaseRequestOptions]
                //   }),
                //   PostService
                // ]);
                testing_1.it('Should be greater than 10 items', testing_1.async(testing_1.inject([post_service_1.PostService], function (service) {
                    service.getPosts().then(function (posts) {
                        console.log(posts.length);
                        testing_1.expect(posts.length).toBeGreaterThan(10);
                    });
                })), 0);
                // it('Should be greater than 10 items', inject([PostService], (postSrv: PostService) => {
                //     return postSrv.getPosts()
                //         .then((res: any) => {
                //           console.log(res.length);
                //           expect(res.length).toBeGreaterThan(10);
                //         });
                // }));
            });
        }
    }
});
//# sourceMappingURL=post.service.spec.js.map