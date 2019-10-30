var Validation =(function () {
    var nameError, mailError, messageError;
    var nameErrorMessage = "Please write your name";
    var mailErrorMessage = "Please write your email";
    var errorMessage = "Please write a message";
    nameError = document.getElementById("name").value;
    mailError = document.getElementById("mail").value;
    messageError = document.getElementById("message").value;
    function checkIfInputValueIsEmpty(inputValue, errorInputId, errorMessage) {
        if (inputValue === "") {
            document.getElementById(errorInputId).innerHTML = errorMessage;
        } else {
            document.getElementById(errorInputId).innerHTML = "";
        }
    }
    function checkIfInputValueIsNotEmpty(inputValue1, inputValue2, inputValue3) {
        if (inputValue1 !== "" && inputValue2 !== "" && inputValue3 !== "") {
            alert("Thank you! Your message has been sent successfully"); // can nu este gol niciun box afiseaza un message
            document.getElementById("myForm").reset(); //reseteaza formal cand dam click to alert message
        }
    }
    // checkIfInputValueIsEmpty(nameError, "nameErrorMessage", nameErrorMessage);
    // checkIfInputValueIsEmpty(mailError, "mailErrorMessage", mailErrorMessage);
    // checkIfInputValueIsEmpty(messageError, "errorMessage", errorMessage);
    // checkIfInputValueIsNotEmpty(nameError, mailError, messageError);
    this.emailvalidations = function (){
        var emailCheck = document.getElementById('mail').value;
        var pattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (pattern.test(emailCheck)){
            document.getElementById('emailValidationResult').innerHTML = "";
            document.getElementById("sendButton").disabled = false;
        }else{
            document.getElementById('emailValidationResult').innerHTML = "Email is not correct";
            document.getElementById("sendButton").disabled = true;
            return false;
        }
    };
    return this;
})();

//TODO: find a more suggestive variable name DONE
//TODO: call function with right params DONE
//TODO: email - for validation - use REGEX  ??????????? display before alert success message ???
//TODO: find a more suggestive error message name DONE
//TODO: WHY THE SAME LOGIC AND 2 DIFFERENT ACTIONS? DONE
//TODO: CREATE A FUNCTION DONE

// function validateEmail()
// {
//     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.email.value))
//     {
//         return (true)
//     }
//     document.getElementById("emailValidationResult").innerHTML = "You have entered an invalid email address!";
//     return (false)
// }
// validateEmail();


// if (messageError === "") {
    //     errorMessage = "Please write a message";
    //     document.getElementById("errorMessage").innerHTML = errorMessage;
    // } else{
    //     document.getElementById("errorMessage").innerHTML = "";
    // }

//     if (nameError !== "" && mailError !== "" && messageError !== ""){
//         alert("Thank you! Your message has been sent successfully");
//     }
//     if (nameError !== "" && mailError !== "" && messageError !== "") {
//         document.getElementById("myForm").reset();
//     }
// }
// window.open('mailto:'+inputValue2+'?subject=subject&body='+inputValue3);
