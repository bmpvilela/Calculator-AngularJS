//service declaration
myApp.service('mathService', function() {
    this.add = function(val1, val2) {
        return val1+val2;
    };

    this.subtract  = function(val1, val2) {
        return  val1-val2;
    };

    this.multiply  = function(val1, val2) {
        return  val1*val2;
    };

    this.divide  = function(val1, val2) {
        return val1/val2;
    };
});
