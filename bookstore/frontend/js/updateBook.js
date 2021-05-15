$( document ).ready(function() {
    getAllBooks();
    updateBook();
});

function showTableBasedOnId(id){
    $("#updateBookTable").hide();
    $("#updateBookForm").show();
    var url = "http://localhost:5555/getBookInfoBasedOnId/" + id;
    $("#books").empty();
    $.ajax({url: url, success: function(data){
        var result = data["result"];
        if (result !== null){
            $("#updateBookName").val(result['bookName']);
            $("#updateAmazonUrl").val(result['amazonUrl']);
            $("#updateBookFormId").val(result['id']);
        }
    }});
}

function updateBook(){
    $("#uploadBookById").click(function(){
        var bookName = $("#updateBookName").val();
        var amazonUrl = $("#updateAmazonUrl").val();
        var bookId = $("#updateBookFormId").val();
        console.log("bookId :>", bookId)
        var url = "http://localhost:5555/updateBook/" + bookId;
        var data = {"bookName": bookName, "amazonUrl": amazonUrl};
        $.post({url: url, data: data, success: function(data){
            if(data.result == true){
                alert("Book Updated!");
                location.href="updateBook.html";
            }else{
                alert("Book Updation Failed!");
            }
          }});
    });
}