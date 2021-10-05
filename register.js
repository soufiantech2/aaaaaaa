
    function createAccount() { 
        var username = document.getElementById('username').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var userName = document.getElementById('username');
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {

    

            var user = firebase.auth().currentUser;
            user.emailVerified;
            user.sendEmailVerification();

            

            // Signed in 
            var user = userCredential.user;
            swal.fire(
                'Success',
                'Your account created',
                'success'
            )
                setInterval
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
            document.getElementById('passwordError').innerHTML ="<i class='fal fa-exclamation-circle'></i>"+ " " + error.message;

        });


    }

    // Check if input username is empty
    function usernameEmpty() {
        if(document.getElementById('username').value.length == 0){
            
            document.getElementById('passwordError').innerHTML ="<i class='fal fa-exclamation-circle'></i>"+ " " + "The user name is empty";

             
        }else{
            createAccount();
        }
    
    }
    // Check if input username is empty | End

