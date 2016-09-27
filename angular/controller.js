//Controller for AngularJS application
//with injection of mathService service

myApp.controller('appController', function($scope, mathService){

    var number_1 = 0;               //first opeation value
    var number_2 = 0;               //second operation value
    var operator = "";              //selected operation
    $scope.result = 0;              //variable to store calulation value (accessible from view)

    //selects a proper action for a given value (accessible from view)
    $scope.operation = function(value){

        if (!isNaN(value)){         // if is a number concatenate whit previous value
            $scope.result = ($scope.result+value)*1;
        }else if(value!="="){       // if not a equal sign stores the chosed operation
            number_1 = $scope.result;
            $scope.result = 0;
            operator = value;
        }else{                      // is a equal sign, so perform a operation
            number_2 = $scope.result;
            doOperation(operator, number_1, number_2);
        }

    }

    //perform a chosed operation or call it from service (mathService)
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
