const btn = document.getElementById("leftInputBtn");
      leftEmailInput = document.getElementById("leftEmailInput");
      emailErrMsg = document.getElementById("emailErrMsg");
      signUpDisplay = document.getElementById("signUpDisplay");
      successDisplay = document.getElementById("successDisplay");
      dismissMessageBtn = document.getElementById("dismissMessageBtn");
      
      
    btn.addEventListener("click", emailValid); 
    leftEmailInput.addEventListener("input", function() { // Burada inputa değer girilince stil değişir.
        emailErrMsg.style.display = "none";
        leftEmailInput.style.backgroundColor = "initial";
        leftEmailInput.style.color = "initial";
        leftEmailInput.style.borderColor = "initial";
    } );
    dismissMessageBtn.addEventListener("click", function() {
        signUpDisplay.style.display = "inline";
        successDisplay.style.display = "none";
        location.reload();
    } );

    function emailValid () {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if(leftEmailInput.value.match(emailPattern)) {
            emailErrMsg.style.display = "none";
            leftEmailInput.style.backgroundColor = "initial";
            leftEmailInput.style.color = "initial";
            leftEmailInput.style.borderColor = "initial";
            signUpDisplay.style.display = "none";           
            successDisplay.style.display = "inline";           
        } else {
            emailErrMsg.style.display = "inline";
            leftEmailInput.style.backgroundColor = "#FFE8E6";
            leftEmailInput.style.color = "var(--Tomato)";
            leftEmailInput.style.borderColor = "var(--Tomato)";           
            successDisplay.style.display = "none"; 
        }
    }

        

      