$(document).ready(function () {
    $.getJSON('tbl_books.json', function (data) {
        var resData = data;
        var table = "";
        
        $.each(resData, function (key, value) {
            var id = value.id;
            var name = value.name;
            var author = value.author;
            var publisher = value.publisher;
            var page = value.page;
            var price = value.price;
            var tags = value.tags;
            var buy_link = value.buy_link;

            table += "<tr><td>" + id + "</td>";
            table += "<td>" + name + "</td>";
            table += "<td>" + author + "</td>";
            table += "<td>" + publisher + "</td>";
            table += "<td>" + page + "</td>";
            table += "<td>" + price + "</td>";
            table += "<td>" + tags + "</td>";
            table += "<td><a href='" + buy_link + "'>Buy here</a></td></tr>";

        });
         $('#example tbody').html(table);
    });
});
$(document).ready(function () {
    $('#example').DataTable({
        "paging": true
    });
});
