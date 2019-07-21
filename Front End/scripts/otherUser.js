$(document).ready(function(){

var search = {
    name: localStorage.getItem('search')
}
var relAdd = {
    FROMId: localStorage.getItem('myid'),
    TOId: localStorage.getItem('OID')
}
$.ajax({
    url: "http://localhost:3001/commands/nameSearch",
    type: "POST",
    datatype:'json',
    success: console.log('nice'),
    data: search

  }) .then(function(response){
    localStorage.setItem('OID', response[0].id)
    $('#OtherName').text(response[0].name)
    $('#OtherEmail').text("Email " +response[0].email)
    $('#OtherDate').text("Date joined "+response[0].date_created.substring(0,10))
  })
  $('#addF').on('click', function(){
    $.ajax({
      url: 'http://localhost:3001/relationships/addFriend',
      type: "POST",
      datatype:'json',
      success: console.log('added'),
      data : relAdd
    })

  })
})