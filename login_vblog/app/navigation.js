$(document).ready(function () {
    $("#navigationAddPost").click(function (event) {
        event.preventDefault();
        $("#addPost").show();
        $("#listPosts").hide();
        $("#editPost").hide();
        $("#postAddEditorArea").cleditor();
    });

    $("#navigationListPosts").click(function (event) {
        event.preventDefault();
        $("#listPosts").show();
        $("#addPost").hide();
        $("#editPost").hide();
        loadPosts();
    });
});