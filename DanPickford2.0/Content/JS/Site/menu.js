﻿function randomNumberBetween (min, max) {
    return min + Math.random() * (max - min);
}

function menuDescriptor() {};
menuDescriptor.prototype.animateMenuDescription = function(a, fadeIn) {
    jQuery.each($('#headerContainer div'), function (i, l) {
        if (l.id != a) {
            $('#' + l.id).css("opacity", 0.2);
        }
    });
    jQuery.each($('#contentPlaceHolder div'), function (i, l) {
        if (l.id != a) {
            $('#c' + l.id).css("opacity", 0.2);
        }
    });


    clearInterval(controlTimer);
    if (fadeIn) {
        $('#c' + a).css('left', randomNumberBetween(5, 80) + '%');
        $('#c' + a).css('top', randomNumberBetween(15, 50) + '%');
        controlTimer = setInterval('fadeInConetent(' + a + ')', 100);
    } else {
        $('#' + a).css('opacity', 0.2);
        $('#c' + a).css('opacity', 0);
    }

}
//Responsible for fading in the description of each menu item and the menu item it's self.
function fadeInConetent(a) {
        var curMenuItemOpacity = parseFloat($('#' + a).css('opacity'));
        var curDescOpacity = parseFloat($('#c' + a).css('opacity'));
        if (curDescOpacity.toFixed(1) < 1) {
            $('#' + a).css('opacity', curMenuItemOpacity + 0.2);
            $('#c' + a).css('opacity', curDescOpacity + 0.2);
        } else {
            clearInterval(controlTimer);
        }
    }

    function clickDown(a, url) {
        switch (a) {
            case 1:
                clearInterval(col1);
                col1 = setInterval("flashOut(1,'" + url + "')", 100);
                break;
            case 2:
                clearInterval(col2);
                col2 = setInterval("flashOut(2,'" + url + "')", 100);
                break;
            case 3:
                clearInterval(col3);
                col3 = setInterval("flashOut(3,'" + url + "')", 100);
                break;
            case 4:
                clearInterval(col4);
                col4 = setInterval("flashOut(4,'" + url + "')", 100);
                break;
        }
    }

    function bugOut(a, url) {
        switch (a) {
            case 1:
                clearInterval(col1);
                break;
            case 2:
                clearInterval(col2);
                break;
            case 3:
                clearInterval(col3);
                break;
            case 4:
                clearInterval(col4);
                break;
        }
        if (url.indexOf("http") != -1) {
            if (url != "") { window.open(url) };
        } else {
            if (url != "") { window.location.href = url };
        }
    }

    function flashOut(a, s) {
        var located = -1;
        var endOfTail = -1;
        for (var i = 1; i < (totalLong + 1) ; i++) {
            var currentOpacity = parseFloat($('#' + i + a).css('opacity'));
            if (currentOpacity.toFixed(1) == '0.8') {
                located = i;
            }
            if (currentOpacity.toFixed(1) == '0.2') {
                endOfTail = i;
            }
        }

        if (located == -1) {
            $('#1' + a).css('opacity', '0.8');
        }
        if (located != -1 && located < totalLong) {
            $('#' + (located + 1) + a).css('opacity', '0.8');
            $('#' + located - a).css('opacity', '0.5');
            $('#' + (located - 1) + a).css('opacity', '0.2');
            $('#' + (located - 2) + a).css('opacity', 0);
            //alert("located:" + located);
        }
        if (located == totalLong && endOfTail < totalLong) {
            $('#' + (endOfTail + 1) + a).css('opacity', '0.2');
            $('#' + endOfTail + a).css('opacity', 0);
            //alert("endoftail:" + endOfTail);
        }
        if (located != -1 && endOfTail == (totalLong - 1)) {
            $('#' + (endOfTail + 1) + a).css('opacity', 0);
            bugOut(a, s);
        }
    }
    //Per page Script Menu Interactions
    var timerControl;
    var controlInt = 1;
    var intCount = 2;

    function MenuSplashDown() {
        $.each(menuItems, function (key, value) {
            $('#' + intCount + pageInt).css('opacity', '0.8');
            $('#' + intCount + pageInt).append('<div class="subMenuItem" onclick="clickDown(' + pageInt + ',' + value + ')">' + key + '</div>');
            intCount += 1;
        });
        intCount = 2;
        setInterval('testSubMenuIntegrity(' + pageInt + ')', 1000);
    }
    function testSubMenuIntegrity(colInt) {
        $.each(menuItems, function (key, value) {
            $('#' + intCount + colInt).css('opacity', '0.8');
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