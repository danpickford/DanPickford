jQuery(document).ready(function() {
    $(document).mousemove(function(e) {
        //$('#status').html("&nbsp; Mouse positions: " + e.pageX + ', ' + e.pageY + "Max height " + $('#headerContainer').height());
        if (e.pageY < $('#headerContainer').height() & e.pageX < parseInt($('#menuSpace').width())) {
            $('#divBodyDay').css('opacity', e.pageX / parseInt($('#menuSpace').width()));
        }
    });
    $('#menuSpace').click(function (e) {
        //$('#status').html(e.pageX + ', ' + e.pageY);
        if (e.pageY < $('#headerContainer').height() & e.pageX < parseInt($('#menuSpace').width())) {
            $('#divBodyDay').css('opacity', e.pageX / parseInt($('#menuSpace').width()));
        }
    });
});