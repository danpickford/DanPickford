$(window).resize(function () {
    setWindowBasedDimentions();
});

function andStartTheShow() {
    setWindowBasedDimentions();
    controlTimer = setInterval('streamers()', 100);
}
var col1;
var col2;
var col3;
var col4;

function setWindowBasedDimentions() {

}

var controlTimer;
var totalLong = 9;
var done = 0;
function streamers() {
    switch (done) {
        case 0:
            col1 = setInterval('colLight(1)', 100);
            break;
        case 1:
            col2 = setInterval('colLight(2)', 100);
            break;
        case 2:
            col3 = setInterval('colLight(3)', 100);
            break;
        case 3:
            col4 = setInterval('colLight(4)', 100);
            break;
        default:
            clearInterval(controlTimer);
    }
    done += 1;
}

function stopStreamersFlashMenu(a, up) {
    if (up == true) {
        switch (a) {
            case 1:
                clearInterval(col1);
                col1 = setInterval('FlashMenu(1,true,true)', 50);
                break;
            case 2:
                clearInterval(col2);
                col2 = setInterval('FlashMenu(2,true,true)', 50);
                break;
            case 3:
                clearInterval(col3);
                col3 = setInterval('FlashMenu(3,true,true)', 50);
                break;
            case 4:
                clearInterval(col4);
                col4 = setInterval('FlashMenu(4,true,true)', 50);
                break;
        }
    } else {
        switch (a) {
            case 1:
                clearInterval(col1);
                col1 = setInterval('FlashMenu(1,false,true)', 50);
                break;
            case 2:
                clearInterval(col2);
                col2 = setInterval('FlashMenu(2,false,true)', 50);
                break;
            case 3:
                clearInterval(col3);
                col3 = setInterval('FlashMenu(3,false,true)', 50);
                break;
            case 4:
                clearInterval(col4);
                col4 = setInterval('FlashMenu(4,false,true)', 50);
                break;
        }
    }
}

function colLight(a) {
    var located = -1;

    for (var i = 1; i < (totalLong + 1) ; i++) {
        var currentOpacity = parseFloat($('#' + i + a).css('opacity'));
        if (currentOpacity.toFixed(1) == '0.8') {
            located = i;
        }
    }

    if (located == -1) {
        $('#' + totalLong + a).css('opacity', '0.8');
    }
    if (located != -1 && located > 1) {
        $('#' + (located - 1) + a).css('opacity', '0.8');
        $('#' + located + a).css('opacity', '0.5');
        $('#' + (located + 1) + a).css('opacity', '0.2');
        $('#' + (located + 2) + a).css('opacity', 0);
    }
    if (located != -1 && located == 1) {
        $('#' + located + a).css('opacity', '0.5');
        $('#' + (located + 1) + a).css('opacity', '0.2');
        $('#' + (located + 2) + a).css('opacity', 0);
        stopStreamersFlashMenu(a, true);
    }

}

function FlashMenu(a, up, testForTail) {
    if (testForTail == true) { tailTidy(a); }
    var curMenuItemOpacity = parseFloat($('#' + a).css('opacity'));
    if (up == true) {
        if (curMenuItemOpacity < 1) {
            $('#' + a).css('opacity', curMenuItemOpacity + 0.2);
        } else {
            stopStreamersFlashMenu(a, false);
        }
    } else {
        if (curMenuItemOpacity > 0.4) {
            $('#' + a).css('opacity', curMenuItemOpacity - 0.2);
        } else {
            flashFinished(a);
        }
    }

}

function tailTidy(a) {
    var curOpacity = parseFloat($('#1' + a).css('opacity'));
    if (curOpacity.toFixed(1) == '0.2') {
        $('#1' + a).css('opacity', 0);
    }
    if (curOpacity.toFixed(1) == '0.5') {
        $('#1' + a).css('opacity', '0.2');
    }
    if (curOpacity.toFixed(1) == '0.2') {
        $('#2' + a).css('opacity', 0);
    }
}
var finished = 1;
function flashFinished(a) {
    switch (a) {
        case 1:
            clearInterval(col1);
            finished += 1;
            break;
        case 2:
            clearInterval(col2);
            finished += 1;
            break;
        case 3:
            clearInterval(col3);
            finished += 1;
            break;
        case 4:
            clearInterval(col4);
            finished += 1;
            break;
    }
    if (finished == 4) {
        MenuSplashDown();
        finished += 1;
        $('#1').attr("onmouseover", "tmenuDescriptor.animateMenuDescription(1,true);");
        $('#1').attr("onmouseout", "tmenuDescriptor.animateMenuDescription(1,false);");

        $('#2').attr("onmouseover", "tmenuDescriptor.animateMenuDescription(2,true);");
        $('#2').attr("onmouseout", "tmenuDescriptor.animateMenuDescription(2,false);");

        $('#3').attr("onmouseover", "tmenuDescriptor.animateMenuDescription(3,true);");
        $('#3').attr("onmouseout", "tmenuDescriptor.animateMenuDescription(3,false);");

        $('#4').attr("onmouseover", "tmenuDescriptor.animateMenuDescription(4,true);");
        $('#4').attr("onmouseout", "tmenuDescriptor.animateMenuDescription(4,false);");
        
    }
}

function isDivisable(a, b) {
    if (a % b == 0) {
        return true
    } else {
        return false
    }

}
