$(document).ready(function(){

var search = {
    name: localStorage.getItem('search')
}




console.log(localStorage)
$.ajax({
  url: "http://localhost:3001/commands/nameSearch",
  type: "POST",
  datatype:'json',
  success: console.log('Got '+localStorage.getItem('search')+"'s Info"),
  data: search

}) .then(function(response){
  localStorage.setItem('OID', response[0].id)
  console.log(localStorage)
  $('#OtherName').text(response[0].name)
  $('#OtherEmail').text("Email " +response[0].email)
  $('#OtherDate').text("Date joined "+response[0].date_created.substring(0,10))
}) .then(function(){
  var relAdd = {
    FROMId: localStorage.getItem('myid'),
    TOId: localStorage.getItem('OID')
}
var checkFriends = {
  UIDFrom: localStorage.getItem('myid'),
  UIDTo: localStorage.getItem('OID')
}
var postinfo = {
  posterid: localStorage.getItem('OID')
}

$.ajax({
  url:"http://localhost:3001/relationships/checkFriend",
  type:"POST",
  datatype:"json",
  success: console.log('Checking if your friends'),
  data: checkFriends
}) .then(function(response){console.log(response)
if (response.length > 0) {
  $('#addfriendDiv').html('')
}
})

$.ajax({
  url:"http://localhost:3001/posts/getPostFromUser",
  type: "POST",
  datatype:"json",
  success: console.log('Got posts!'),
  data: postinfo
}) .then(function(response){

  for(i=0;i<response.length;i++){

  var outercard = $('<div>')
  outercard.attr('class', 'shadow bg-light card align-self-center h-auto w-50 mb-5')

  var cardbody = $('<div>')
  cardbody.attr('class', 'card-body')

  outercard.append(cardbody)

  var cardname = $('<p>')
  cardname.text(response[i].PosterName)
  cardbody.append(cardname)

  var cardhead = $('<h3>')
  cardhead.attr('class', 'card-title border-bottom pb-2')
  cardhead.text(response[i].Head)
  cardbody.append(cardhead)

  var cardtext = $('<p>')
  cardtext.attr('class', 'card-text mb-5')
  cardtext.text(response[i].Body)
  cardbody.append(cardtext)

  $('#posts').append(outercard)
  }

})


  $('#addF').on('click', function(){
    $.ajax({
      url: 'http://localhost:3001/relationships/addFriend',
      type: "POST",
      datatype:'json',
      success: console.log('Added'),
      data : relAdd
    }) .then(function(response){
      console.log(response)
      
    })
    location.reload()

  })
})
})