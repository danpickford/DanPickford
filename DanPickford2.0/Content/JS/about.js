var timerControl;
var controlInt = 1;
var intCount = 1;
var menuItems = { "Test": "Test.com", "Test1": "http://www.test1.com" };

function MenuSplashDown() {
    $.each(menuItems, function (key, value) {
            $('#2' + intCount).append('<div>'+ key+'</div>');
            intCount += 1;
    });
}

function stopAndMoveOn(a) {
    if (intCount == controlInt) {
        clearInterval(timerControl);
    } else {

    }
}

function FlashMenu(a, up) {
    var curMenuItemOpacity = parseFloat($('#' + a).css('opacity'));
    if (up == true) {
        if (curMenuItemOpacity < 1) {
            $('#' + a).css('opacity', curMenuItemOpacity + 0.2);
        } else {
            stopAndMoveOn(a, false);
        }
    } else {
        if (curMenuItemOpacity > 0.4) {
            $('#' + a).css('opacity', curMenuItemOpacity - 0.2);
        } else {
            stopAndMoveOn(a);
        }
    }

}
