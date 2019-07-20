//This is our create ajax call. It sends data thats taken from our form when the button with the id Create is pressed.

$("#Create").on("click", function (event) {
    //this stops the buttons from taking you to a new page
    event.preventDefault()
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

//This is our update ajax call. It sends data thats taken from our form when the button with the id update is pressed.
//i will pseudocode anything new.
$("#update").on("click", function (event) {
    event.preventDefault()

    var update = {
        name: $("#nameU").val(),
        password: $("#passwordU").val()
    };
    if (!update.name || !update.password) {
        alert('Input a name please and password please!')
    } else {
    $.ajax({
        //This call uses a PUT method as it is updating.
        type: "PUT",
        url: "http://localhost:3001/commands/update",
        data: update,
        success: console.log('success'),
        dataType: 'application/json'
      });
    }
    location.reload()
});

//This is our delete ajax call. It sends data to be deleted thats taken from our form when the button with the id delete is pressed.

$("#delete").on("click", function (event) {
    event.preventDefault()

    var deleteN = {
        name: $("#nameD").val(),
    };
    console.log(deleteN.name)
    if (!deleteN.name) {
        alert('Input a name please!')
    } else {
    $.ajax({
        //This call uses DELETE as it is deleting
        type: "DELETE",
        url: "http://localhost:3001/commands/delete",
        data: deleteN,
        success: console.log('success'),
        dataType: 'application/json'
      });
    }
    location.reload()
});

// this is our ajax get call. It gets data from our back end and displays it on the page when it loads. In this case its our accounts table
// from our database.
$(document).ready(function (event) {
$.ajax({
    url: "http://localhost:3001/commands/retrieve",
    type: "GET",
    datatype:'json',
    success: console.log('nice'),
  })
  //So this took a WHILE to get working. It kept sending me the wrong information. The response is actually being sent from an sql call in the
  //back end. It comes in an array that is then looped through and each key value pair is stored in html tags and then displayed on the page.
                //this is specifically the response
  .then(function(response){
      for (i=0; i<response.length; i++) {

    var contain = $('<tr>')

    var row = $('<th>')
    row.attr('scope', 'row')
    row.text(response[i].id)
    $(contain).append(row)

    var name = $('<td>')
    name.text(response[i].name)
    $(contain).append(name)

    var email = $('<td>')
    email.text(response[i].email)
    $(contain).append(email)

    var password = $('<td>')
    password.text(response[i].password)
    $(contain).append(password)
    $('#Get').append(contain)

      }
  })
  })
