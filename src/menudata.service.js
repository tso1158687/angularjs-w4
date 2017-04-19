(function() {
    'use strict'
    angular.module("Data")
        .service("MenuDataService", MenuDataService)

    MenuDataService.$inject = ["$http"];

    function MenuDataService($http) {
        var service = this;
        //取得類別
        service.resultCategories = [];

        service.getAllCategories = function() {
            var response = $http({
                method: "GET",
                url: "https://davids-restaurant.herokuapp.com/categories.json"
            });

            return response;
        };


        var a = service.getAllCategories();
        a.then(function(response) {
            service.categories = response.data;

            for (var i = 0; i < service.categories.length; i++) {


                var pushItems = {
                    name: service.categories[i].name,
                    short_name: service.categories[i].short_name,
                    special_instructions: service.categories[i].special_instructions
                };
                service.resultCategories.push(pushItems);

            };



        });

        service.getResultCategories = function() {
            return service.resultCategories;
        };


        //取得細目

        service.getDetailedResultItems = function(categoryShortName) {
            return $http({
                    method: 'GET',
                    url: "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName
                })
                .then(function(response) {
                    return response.data;
                });
        };
    }

})()
