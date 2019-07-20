$(document).ready(function(){
    $('#head').load('./HeaderAndFooter/header.html')



    $('#foot').load('./HeaderAndFooter/footer.html')

var name = localStorage.getItem('name')
var email = localStorage.getItem('email')
var password = localStorage.getItem('password')

    if(!name || !email || !password) {
    $('#main').load('./accounts/SignInForm.html')
    } else {
        url = "./accounts/yourAccount.html"
        window.location = url
    }
})




//This is our create ajax call. It sends data thats taken from our form when the button with the id Create is pressed.

$("#Create").on("click", function (event) {
    //this stops the buttons from taking you to a new page
    //this is our new person. It is creating an object from the values typed into the input fields in form. It uses the inputs id to 
    // grab the value.
    var newPerson = {
        name: $("#nameC").val(),
        email: $("#emailC").val(),
        password: $("#passwordC").val()
    };

    //here we check to make sure the user has actually put in all required information. It checks to make sure none of the fields are empty
    //and if none of them are it then proceeds with the ajax call.
    if (!newPerson.name || !newPerson.email || !newPerson.password) {
        //For now this just sends an alert. I would like to change this to a pop up box above the form eventaully.
        alert('Fill out all fields please!')
    } else {
    $.ajax({
        type: "POST",
        //This url is pointing to an express endpoint we have set up in the back. Its specifically pulling the create command.
        url: "http://localhost:3001/commands/create",
        //this is telling ajax to specifically send the object newPerson as the data being sent.
        data: newPerson,
        //When our call is succesfull it will log it so that you can check
        success: console.log('success'),
        //this makes sure that the type of data stays as a json. Since we work in mainly javascript its generally a good idea to always have this.
        dataType: 'application/json'
      });
    }
    //This is so that the window reloads after the user is done. It will refresh the table at the bottom of the page and empty all the forms
    //This is to stop a user from clicking a button numerous times and sending a large amount of unnesecary (i cant spell) requests
    location.reload()
});