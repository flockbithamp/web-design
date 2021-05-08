$(document).ready(function() {
    getLoginCredentials();
});

function getLoginCredentials(){
    $("#login").click(function(event){
        event.preventDefault();
        var username = $("#floatingUsername").val();
        var password = $("#floatingPassword").val();
        var url = "http://localhost:5555/login/";
        var data = {"username": username, "password": password};
        $.post({url: url, data: data, success: function(data){
            console.log("data :>", data.result);
            if(data.result == true){
                alert("Login Success!!!!!");
                // $("body").load("index.html");
            }else{
                alert("Login Failed!!!!!");
            }
          }});
    });
}