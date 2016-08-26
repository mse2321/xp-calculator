var demo = angular.module("demo", ['ngMaterial']);

demo.controller("ctrl", function($scope){
    $scope.name = "";
    $scope.level = "";
    $scope.nextLevel = 0;
    $scope.lvThreshold = 0;
    $scope.xpValues = [0,1000,3000,6000,10000,15000,21000,28000,36000,45000,55000,66000,78000,91000,105000,120000,136000,153000,171000,190000];
    $scope.xp = "";
    $scope.newXp = "";
    $scope.neededXp = 0;
    $scope.totalXp = 0;
    $scope.levelMessage = 'ng-hide';
    $scope.errorFound = '';

    $scope.submit = function(){
        $scope.checkErrors = function(){
            if ($scope.name === null || $scope.name === ''){
                alert("Please type in a character name.");
                $scope.errorFound = true;
            } else if ($scope.level > 20 || !$scope.level){
                alert("Please put in an appropriate character level.");
                $scope.errorFound = true;
            } else if ($scope.xp <= 0 || !$scope.xp){
                alert("Please put in an XP value.");
                $scope.errorFound = true;
            } else if ($scope.newXp <= 0 || !$scope.newXp){
                alert("Please put in a newly earned XP value.");
                $scope.errorFound = true;
            } else {
                $scope.errorFound = false;
                $scope.calculate($scope.errorFound);                            
            }
        };

        $scope.checkErrors();

        $scope.calculate = function(errorFound){
            if($scope.errorFound) {
                $scope.levelMessage = 'ng-hide';
                $scope.totalXp = 0;
                return false; 
            }

            $scope.newXpTotal = Number($scope.newXp);
            $scope.totalXp = Number($scope.xp) + Number($scope.newXpTotal);
            $scope.nextLevel = Number($scope.level) + 1;
            $scope.nextLevelValue = $scope.xpVales[$scope.nextLevel - 1];
            $scope.neededXp = Number($scope.nextLevelValue) - Number($scope.totalXp);
            $scope.levelMessage = 'ng-show';
            $scope.xp = $scope.totalXp;
            $scope.newXp = 0;

        };
    };

    $scope.showInstructions = function() {
        $("#instructions").toggle("slide");
    };

    $scope.pageAnimate = function(){
        $(window).load(function() {
            $('#container').show();
            $('.loading').hide();
        });
    };
    $scope.pageAnimate();

});