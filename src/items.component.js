(function() {
    'use strict'
    angular.module("Data")
        .component("items", {
            templateUrl: "src/template/items.html",
            bindings: {
                items: "<"
            }
        })

})()
