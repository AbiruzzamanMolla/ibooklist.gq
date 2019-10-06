$(document).ready(function () {
    $.getJSON('tbl_books.json', function (data) {
        $('#example').DataTable({
            "data": data,
            "paging": true,
            "columns": [{
                    data: "id", title: "ID"
                },
                {
                    data: "name", title: "Name"
                },
                {
                    data: "author", title: "Author"
                },
                {
                    data: "publisher", title: "Publisher"
                },
                {
                    data: "page", title: "Page"
                },
                {
                    data: "price", title: "Price"
                },
                {
                    data: "tags", title: "Tags"
                }
            ]
        });

    });
});