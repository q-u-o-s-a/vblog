function loadPosts() {
        $("#listPosts").html("");
        $.ajax({
            type: "GET",
            url: "http://vblog.test/v1/posts",
            dataType: "jsonp",
            jsonpCallback: "index",
            success: function (data) {
                $.each(data, function (key, value) {
                    $("#listPosts").append(
                        "<div class='row'>"+
                        "<div class='col-md-4'>"+
                        "<p class=\"text-center\">Title: " + value['title'] + "</p>"+
                        "</div>" +
                        "<div class='col-md-5'>"+
                        "<p class=\"text-center\">Inhalt: " + value['text'].substr(0, 20) +"</p>"+
                        "</div>" +
                        "<div class='col-md-3'>"+
                        "<button data-id=\"" + value['id'] + "\" type=\"button\" class=\"deleteButton btn btn-danger\">Delete</button>" +
                        "<button data-id=\"" + value['id'] + "\" type=\"button\" class=\"loadButton btn btn-primary\">Edit</button>" +
                        "</div>" +
                        "</div>" +
                        "");
                });
            }
        });
    };