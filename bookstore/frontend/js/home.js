$( document ).ready(function() {
    getBookName();
    getAllBooks();
});

function getBookName(){
    $("#bookSearch").keyup(function(){
        var bookToSearch = $("#bookSearch").val();
        if( bookToSearch.length != 0){
            var url = "http://localhost:5555/getBookInfo/" + bookToSearch;
            $("#books").empty();
            $.ajax({url: url, success: function(data){
                if (data["result"] !== null){
                    $("#books").append(
                        '<div class="col-md-3">' +
                            '<div class="card">' +
                                '<img src="http://localhost:5555/'+ data["result"]["imageName"] +'" class="card-img-top" alt="...">'+
                                '<div class="card-body">' +
                                    '<h5 class="card-title">'+ data["result"]["bookName"] +'</h5>' +
                                    '<a href="'+ data["result"]["amazonUrl"] +'" target="_blank">Go to Amazon</a>'+
                                '</div>'+
                            '</div>' +
                        '</div> ');
                }
            }});
        }else{
            getAllBooks();
        }
        
    });
}

