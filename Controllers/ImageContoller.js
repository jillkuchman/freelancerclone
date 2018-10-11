freelancer.controller('ImageController', function ImageController($scope) {
    $scope.images = ['../img/rainbow-nebula.jpeg'

                    ];
    $scope.background = '../img/rainbow-nebula.jpeg';
    // $scope.imageChange = function() {
    //
    //
    // };
//Hacktoberfest
    $scope.changeBG() = function() {
        //array of backgrounds
        now = (now+1) % array.length ;
        $('.home').css('background-image', 'url("' + images[now] + '")');
    }

    $scope.now = 0;
    $scope.int = setInterval("changeBG()", 1000);
    // actually need to call int in the main page, this is what is actually going to be cycling through the images. changeBG is just what sets the BG image


});
