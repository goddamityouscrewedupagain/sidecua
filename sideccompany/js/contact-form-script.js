$("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "Czy wszystko jest wpisane poprawnie?");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});


function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#inputName").val();
    var email = $("#inputEmail").val();
    var message = $("#inputMessage").val();


    $.ajax({
        type: "POST",
        url: "php/form-process.php",
        data: "name=" + name + "&email=" + email + "&message=" + message,
        success : function(text){
            if (text == "success"){
                formSuccess();
            } else {
                formError();
                submitMSG(false,text);
            }
        }
    });
}

function formSuccess(){
    $("#contactForm")[0].reset();
    submitMSG(true, "Wiadomość wysłana!")
}

function formError(){

}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "h6 centered text-success";
    } else {
        var msgClasses = "h6 centered text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}
