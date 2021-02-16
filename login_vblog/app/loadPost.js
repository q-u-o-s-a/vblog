$(document).ready(function () {
    $(document).on("click", ".loadButton ", function (event) {
        event.preventDefault();

        $.ajax({
            type: "GET",
            url: "http://vblog.test/v1/post/show",
            dataType: "jsonp",
            data: {
                id: $(this).data('id'),
                api_token: $(".container").data('api_token')
            },
            jsonpCallback: "show",
            success: function (data) {
                $("#postEditEditorArea").val(data['text']);
                $("#postEditEditorArea").cleditor();
                $('#editTitle').val(data['title']);
                $("#editPost").attr("data-id",data['id']);
                $("#listPosts").hide();
                $("#editPost").show();
            }
        });
    });
});
