$(document).ready(function () {
    $("#loginButton").click(function (event) {
        event.preventDefault();
        $.ajax({
            type: "GET",
            url: "http://vblog.test/v1/login",
            dataType: "jsonp",
            data: {username: $('#username').val(), password: $('#password').val()},
            jsonpCallback: "postLogin",
            success: function (data) {
                $(".container").data('api_token', data['api_token']);
                $("#formContent").hide();
                $("#adminPanel").show();
            }
        });
    });
});