$(document).ready(function () {
    $("#editButton").click(function (event) {
        event.preventDefault();
        $.ajax({
            type: "GET",
            url: "http://vblog.test/v1/post/update",
            dataType: "jsonp",
            data: {
                api_token: $(".container").data('api_token'),
                id: $('#editPost').data('id'),
                title: $('#editTitle').val(),
                text: $('#postEditEditorArea').val()
            },
            jsonpCallback: "update",
            success: function (data) {
                alert("post changed");
            }
        });
    });
});