$.views.converters("upper", function (val) {
    const newDate = new Date(val);
    return (newDate.toLocaleDateString('de-DE'));
});

$.templates("myTemplate",
    "<h2 style='color: #e60000;'>{{:title}}</h2>" +
    "<p>{{:text}}</p>" +
    "<span class='badge'>{{upper:created_at}}</span>" +
    "<hr>");