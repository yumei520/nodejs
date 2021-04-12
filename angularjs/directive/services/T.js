angular.module('myApp').factory('T', ['$translate',function($translate){
    var T = {
        T:function(key) {
            if(key){
                return $translate.instant(key);
            }
            return key;
        }  
    }
    return T;
}])