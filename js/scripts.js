console.log("Hello World!");
var clients =[];

function submitForm(){
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        console.log(email,password);

        var temp = {
          email: email,
          password: password
        };

        clients.push(temp);
        // console.log(clients);
        // document.getElementById("content").appendChild(clients);

        // for (var i = 0; i < clients.length; i++) {
        //   console.log(clients[i].email);
          var emailHTML = document.createElement("p")
          var passwordHTML = document.createElement("p")
          emailHTML.innerHTML = clients[clients.length-1].email;
          passwordHTML.innerHTML = clients[clients.length-1].password;

          document.getElementById("content").appendChild(emailHTML);
          document.getElementById("content").appendChild(passwordHTML);

}
