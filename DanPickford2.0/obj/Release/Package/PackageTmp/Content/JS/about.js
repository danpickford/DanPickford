var timerControl;
var controlInt = 1;
var intCount = 2;
var menuItems = { "Up-to-date CV": "'http://www.danpickford.com/Daniel Pickford - Curriculum Vitae.docx'" };

function MenuSplashDown() {
    $.each(menuItems, function (key, value) {
        $('#' + intCount + '1').css('opacity','0.8');
        $('#' + intCount + '1').append('<div class="subMenuItem" onclick="clickDown(1,' + value + ')">' + key + '</div>');
            intCount += 1;
    });
    intCount = 2;
    setInterval('testSubMenuIntegrity()', 1000);
}
function testSubMenuIntegrity() {
    $.each(menuItems, function (key, value) {
        $('#' + intCount + '1').css('opacity', '0.8');
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