jQuery(document).ready(function() {
    $(document).mousemove(function(e) {
        //$('#status').html("&nbsp; Mouse positions: " + e.pageX + ', ' + e.pageY + "Max height " + $('#headerContainer').height());
        if (e.pageY < $('#headerContainer').height() & e.pageX < parseInt($('#menuSpace').width())) {
            $('#divBodyDay').css('opacity', e.pageX / parseInt($('#menuSpace').width()));
            if (dontLetTheSliderLeaveMan(e.pageX, $('#brightnessSlider').width())) {
                $('#brightnessSlider').css('left', e.pageX - $('#brightnessSlider').width());
            } else {
                $('#brightnessSlider').css('left', 0);
            }
        }
    });
    $('#menuSpace').click(function (e) {
        $('#status').html(e.pageX + ', ' + e.pageY);
        if (e.pageY < $('#headerContainer').height() & e.pageX < parseInt($('#menuSpace').width())) {
            $('#divBodyDay').css('opacity', e.pageX / parseInt($('#menuSpace').width()));
        }
    });
});

function dontLetTheSliderLeaveMan(mouseX, sliderWidth) {
    if (mouseX - sliderWidth > 0) {
        return true;
    }
    return false;
}