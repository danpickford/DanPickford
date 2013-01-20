function animateMenuDescription(a, fadeIn) {
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
            controlTimer = setInterval('fadeInConetent(' + a + ')', 100);
        } else {
            $('#' + a).css('opacity', 0.2);
            $('#c' + a).css('opacity', 0);
        }

    }

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
            window.location.href = url;
            break;
        case 2:
            clearInterval(col2);
            window.location.href = url;
            break;
        case 3:
            clearInterval(col3);
            window.location.href = url;
            break;
        case 4:
            clearInterval(col4);
            window.location.href = url;
            break;
    }
}

function flashOut(a, s) {
    var located = -1;
    for (var i = 1; i < (totalLong + 1) ; i++) {
        var currentOpacity = parseFloat($('#' + i + a).css('opacity'));
        if (currentOpacity.toFixed(1) == '0.8') {
            located = i;
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
    }
    if (located != -1 && located == totalLong) {
        $('#' + located - a).css('opacity', '0.5');
        $('#' + (located - 1) + a).css('opacity', '0.2');
        $('#' + (located - 2) + a).css('opacity', 0);
        bugOut(a, s);
    }
}