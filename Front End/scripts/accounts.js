$(document).ready(function (event) {
    $.ajax({
        url: "/api/commands/retrieve",
        type: "GET",
        datatype:'json',
        success: console.log('nice'),
      })
      //So this took a WHILE to get working. It kept sending me the wrong information. The response is actually being sent from an sql call in the
      //back end. It comes in an array that is then looped through and each key value pair is stored in html tags and then displayed on the page.
                    //this is specifically the response
      .then(function(response){
          for (i=0; i < response.length; i++) {
        var trow = $('<td>')
        var trow2 = $('<td>')
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

        var date = $('<td>')
        date.text(response[i].date_created.substring(0, 10))
        $(contain).append(date)
            
        var row5 = $('<td>')
        $(contain).append(row5)

        var password = $('<input>')
        password.attr('type', 'password')
        password.attr('placeholder', response[i].password)
        password.attr('class', 'form-control')
        password.attr('id', "password"+i)

        $(row5).append(password)

        var deletebut = $('<button>')
        deletebut.text('Delete')
        deletebut.attr('val', response[i].name)
        deletebut.attr('class', 'delete'+i+' btn btn-primary')
        $(trow).append(deletebut)
        $(contain).append(trow)
        

        var updatebut = $('<button>')
        updatebut.text('Update')
        updatebut.attr('val', response[i].name)
        updatebut.attr('class', 'update'+i+' btn btn-primary button align-self-center')
        updatebut.attr('id', i)
        $(trow2).append(updatebut)
        $(contain).append(trow2)

        $('#Get').append(contain)
            delegate(i)
            delegated(i)
    
          }
      })
    })



//This is our update ajax call. It sends data thats taken from our form when the button with the id update is pressed.
//i will pseudocode anything new.
var updatebutton = $('.update')
function delegate(i){$('.update' + i).on("click", function (e) {
    event.preventDefault()
    var value = $(e.target).attr('val')
    var idval = $(e.target).attr('id')

    var update = {
        name: value,
        password: $("#password"+idval).val()
    };
    if (!update.name || !update.password) {
        alert('Input a name please and password please!')
    } else {
    $.ajax({
        //This call uses a PUT method as it is updating.
        type: "PUT",
        url: "/api/commands/update",
        data: update,
        success: console.log('success'),
        dataType: 'application/json'
      });
    }
    location.reload()
});}

//This is our delete ajax call. It sends data to be deleted thats taken from our form when the button with the id delete is pressed.
function delegated(i){$('.delete'+i).on("click", function (e) {
    var value = $(e.target).attr('val')
    console.log(value)
    var deleteN = {
        name: value,
    };
    console.log(deleteN.name)

    $.ajax({
        //This call uses DELETE as it is deleting
        type: "DELETE",
        url: "/api/commands/delete",
        data: deleteN,
        success: console.log('success'),
        dataType: 'application/json'
      });
    
    location.reload()
});}


// this is our ajax get call. It gets data from our back end and displays it on the page when it loads. In this case its our accounts table
// from our database.

