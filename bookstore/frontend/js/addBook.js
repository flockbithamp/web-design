$( document ).ready(function() {
    addBook();
});

function addBook(){
    $("#uploadBook").click(function(){
        var bookName = $("#bookName").val();
        var amazonUrl = $("#amazonURL").val();
        var form_data = new FormData();
        var img = $('#bookImage')[0].files;
        if (img.length > -1){
            form_data.append("bookName", bookName);
            form_data.append("amazonUrl", amazonUrl);
            form_data.append("img", img);
            var url = "http://localhost:5555/addBook/";
            $.post({url: url, data: form_data, contentType: false, processData: false, success: function(data){
                if(data.result == true){
                    alert("Book is added successfully!");
                    location.href="home.html";
                }else{
                    alert("There is some error while adding new book.");
                }
            }});
        }else{
            alert("Image is also required!");
        }
        
    });
}
