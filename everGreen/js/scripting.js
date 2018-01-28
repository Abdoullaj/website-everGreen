
var $body = $('body');
var $nav = $('.navBarBlocked');
var $buttonMenu = $('.menu-button');
var $dropFirst = $('.dropDownButton');
var $dropSecond = $('.dropSecondInside')
var $sideButton = $('.rightSideBar');

var MENU = 'menuOpened';
var MOVEMENU = 'menuMoved';
var DROP = 'fristDropped';
var DROP2 = 'secondDropped';

var _manageClass = function(classToggle) {
    $body.toggleClass(classToggle);
};

$buttonMenu.on('click', function() {
  _manageClass(MENU);
});

$sideButton.on('click', function (){
    _manageClass(MOVEMENU);
});

$dropFirst.on('click', function (){
    _manageClass(DROP);
});


$dropSecond.on('click', function (){
    _manageClass(DROP2);
});
