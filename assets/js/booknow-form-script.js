
$(document).on("click",".book-a-room",function(event) {
    
        event.preventDefault();
        submitForm();
    
});


function submitForm(){
    var firstName = $("#firstName").val();
    var lastName=$("#lastName").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var noOfAdults = $("#noOfAdults").val();
	var noOfKids = $("#noOfKids").val();
    var DOA = $("#DOA").val();
    var DOD = $("#DOD").val();
    $.ajax({
        type: "POST",
        url: "../assets/php/booknow-form-process.php",
        data: "&firstName=" + firstName + "&lastName="+ lastName + "&email=" + email + "&phone=" + phone + "&noOfAdults=" + noOfAdults + "&noOfKids=" + noOfKids  + "&DOA=" + DOA + "&DOD=" + DOD,
        success : function(text){
            if (text == "success"){
                formSuccess();
            } else {
                formError();
            }
       }
    });
}

function formSuccess(){
    $("#booknowform")[0].reset();
}

function formError(){

}
