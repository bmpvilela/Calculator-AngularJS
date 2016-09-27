myApp.controller('appController', function($scope, mathService){

    var number_1 = 0;
    var number_2 = 0;
    var operator = "";

    $scope.result = 0;

    $scope.operation = function(value){

        if (!isNaN(value)){
            $scope.result = ($scope.result+value)*1;
        }else if(value!="="){
            number_1 = $scope.result;
            $scope.result = 0;
            operator = value;
        }else{
            number_2 = $scope.result;
            doOperation(operator, number_1, number_2);
        }
        
    }

    doOperation = function(operator, val1, val2) {

        switch(operator){
            case "+":
                $scope.result = mathService.add(val1,val2);
                break;
            case "-":
                $scope.result = mathService.subtract(val1,val2);
                break;
            case "*":
                $scope.result = mathService.multiply(val1,val2);
                break;
            case "/":
                $scope.result = mathService.divide(val1,val2);
                break;
            case "C":
                $scope.result = undefined;
                break;
        }
    }
});

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
