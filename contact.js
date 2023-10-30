$(document).ready(function () {
        let name, email, number, message;

        $("#fullname").change(function () {
                name = this.value;
        });

        $("#email").change(function () {
                email = this.value;
        });

        $("#number").change(function () {
                number = this.value;
        });
    
        $("#message").change(function () {
                message = this.value;
        });
    
        $("form").submit(function (event) {
                event.preventDefault(); 
    
                check_Input(name, email, number, message);
            });
});

function check_Input(name, email, number, message) {
        let invalidInput = 0;

        if(!name) {
                invalidInput++;
                alert("Please enter your name.")
        } 
        if(!email) {
                invalidInput++;
                alert("Please enter your email address.")
        } 
        if(!number) {
                invalidInput++;
                alert("Please enter your phone number.")
        } 
        if(!message) {
                invalidInput++;
                alert("Please enter a message.")
        }
        if(invalidInput === 0) {
                $('#formSubmit').html('<p>Form Received! You Will Hear From Us Shortly.</p>');
        }
}
