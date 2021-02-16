$(document).ready(function () {
    $("#addButton").click(function (event) {
        event.preventDefault();
        $.ajax({
            type: "GET",
            url: "http://vblog.test/v1/post",
            dataType: "jsonp",
            data: {
                api_token: $(".container").data('api_token'),
                title: $('#addTitle').val(),
                text: $('#postAddEditorArea').val()
            },
            jsonpCallback: "store",
            success: function (data) {
                alert("post added");
            }
        });
    });
});