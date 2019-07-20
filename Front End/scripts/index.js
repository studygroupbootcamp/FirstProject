$("#Create").on("click", function (event) {
    event.preventDefault()
    var newPerson = {
        name: $("#nameC").val(),
        Favorite: $("#favoriteC").val()
    };
    console.log(newPerson.name)
    if (!newPerson.name || !newPerson.Favorite) {
        alert('Input a name please!')
    } else {
    $.ajax({
        type: "POST",
        url: "http://localhost:3001/commands/create",
        data: newPerson,
        success: console.log('success'),
        dataType: 'application/json'
      });
    }
    location.reload()
});

$("#update").on("click", function (event) {
    event.preventDefault()

    var update = {
        name: $("#nameU").val(),
        Favorite: $("#favoriteU").val()
    };
    console.log(update.name)
    if (!update.name || !update.Favorite) {
        alert('Input a name please!')
    } else {
    $.ajax({
        type: "PUT",
        url: "http://localhost:3001/commands/update",
        data: update,
        success: console.log('success'),
        dataType: 'application/json'
      });
    }
    location.reload()
});

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
        type: "DELETE",
        url: "http://localhost:3001/commands/delete",
        data: deleteN,
        success: console.log('success'),
        dataType: 'application/json'
      });
    }
    location.reload()
});


$(document).ready(function (event) {
$.ajax({
    url: "http://localhost:3001/commands/retrieve",
    type: "GET",
    datatype:'jsonp',
    success: console.log('nice'),
    headers: {
        'Access-Control-Allow-Origin': '*',
      }, 
  })
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

    var Fav = $('<td>')
    Fav.text(response[i].Favorite)
    $(contain).append(Fav)
    $('#Get').append(contain)

      }
  })
  })
