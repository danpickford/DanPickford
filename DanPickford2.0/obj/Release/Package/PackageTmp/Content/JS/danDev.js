var timerControl;
var controlInt = 1;
var intCount = 2;


function MenuSplashDown() {
    $.each(menuItems, function (key, value) {
        $('#' + intCount + '3').css('opacity', '0.8');
        $('#' + intCount + '3').append('<div class="subMenuItem" onclick="clickDown(3,' + value + ')">' + key + '</div>');
        intCount += 1;
    });
    intCount = 2;
    setInterval('testSubMenuIntegrity()', 1000);
}
function testSubMenuIntegrity() {
    $.each(menuItems, function () {
        $('#' + intCount + '3').css('opacity', '0.8');
        intCount += 1;
    });
    intCount = 2;
}

function stopAndMoveOn(a) {
    if (intCount == controlInt) {
        clearInterval(timerControl);
    } else {

    }
}