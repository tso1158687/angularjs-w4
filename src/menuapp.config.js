(function() {
    'use strict'
    angular.module("MenuApp", ["ui.router", "Data"])
    angular.module("MenuApp")
        .config(MenuAppConfig);

        // ps:the pictures of this restaurant looks very terrible and not healthy,
        // I am a Taiwanese,and I can tell you that it is not real Chinese dishes
        // they are just american chinese dishes

    MenuAppConfig.$inject = ["$stateProvider", "$urlRouterProvider"];

    function MenuAppConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state("categories", {
                url: '/categories',
                templateUrl: "src/router/categories.html",
                controller: "CategoryStateController as CategoryState",
                resolve: {
                    categories: ["MenuDataService", function(MenuDataService) {
                        return MenuDataService.getResultCategories();
                    }]
                }

            })
            .state("itemDetail", {
                url: "/item-detail/{itemId}",
                templateUrl: "/src/router/itemsdetail.html",
                controller: "itemDetailStateController as itemDetailState",
                resolve: {
                    item: ["$stateParams", "MenuDataService", function($stateParams, MenuDataService) {
                        return MenuDataService.getDetailedResultItems($stateParams.itemId)
                            .then(function(result) {
                                console.log($stateParams);
                                console.log($stateParams.itemId);
                                console.log(result);
                                return result;
                            });
                    }]
                }
            })


    }

})()
