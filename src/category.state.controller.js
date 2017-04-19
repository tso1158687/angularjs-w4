(function() {
    'use strict'
    angular.module("MenuApp")
        .controller("CategoryStateController", CategoryStateController)

    CategoryStateController.$inject = ["categories"]

    function CategoryStateController(categories) {
        var CategoryState = this;      
        CategoryState.category = categories;
        
    }

})()
