(function() {
    'use strict'
    angular.module("MenuApp")
        .controller("itemDetailStateController", itemDetailStateController)

    itemDetailStateController.$inject = ["item"]

    function itemDetailStateController(item) {
        var itemDetailState = this;     
        console.log(item); 
        itemDetailState.items = item.menu_items;
       
        
    }

})()
