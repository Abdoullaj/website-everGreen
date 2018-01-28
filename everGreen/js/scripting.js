
var $body = $('body');
var $buttonMenu = $('.menu-button');
var MENU = 'menuOpened';

var _manageClass = function(classToggle) {
    $body.toggleClass(classToggle);
};

$buttonMenu.on('click', function() {
  _manageClass(MENU);
});
