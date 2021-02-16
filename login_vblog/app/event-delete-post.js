$(document).ready(function () {
    $(document).on("click", ".deleteButton ", function (event) {
        event.preventDefault();

        $.ajax({
            type: "GET",
            url: "http://vblog.test/v1/post/delete/",
            dataType: "jsonp",
            data: {
                id: $(this).data('id'),
                api_token: $(".container").data('api_token')
            },
            jsonpCallback: "destroy",
            success: function (data) {
                loadPosts();
            }
        });
    });
});