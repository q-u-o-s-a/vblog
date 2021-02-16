$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "http://vblog.test/v1/posts",
        dataType: "jsonp",
        jsonpCallback: "index",
        success: function (data) {
            $.each(data, function (key, value) {
                $("#posts").append($.templates.myTemplate(value));
            });
        }
    });
});