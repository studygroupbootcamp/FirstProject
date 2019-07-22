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
var newMessage = {
    fromId: localStorage.getItem('myid'),
    toId: localStorage.getItem('OID'),
    message: null
}
var messagefrom = {
    UIDFROM: localStorage.getItem('OID'),
    UIDTO: localStorage.getItem('myid'),
}

var messageto = {
  UIDFROM: localStorage.getItem('myid'),
  UIDTO: localStorage.getItem('OID')
}
var messages = []

var postinfo = {
  posterid: localStorage.getItem('OID')
}

$('#sendMessage').on('click', function(event){
  event.preventDefault()
  newMessage.message = $('#message').val()
  if (newMessage.message == ""){alert('please input a message')}
  else {
  $.ajax({
    url: "http://localhost:3001/message/sendMessage",
    type: "POST",
    datatype: "json",
    success: console.log('Message Sent: ' + newMessage),
    data: newMessage
  }) 
  location.reload() }
}) 


$.ajax({
  url: "http://localhost:3001/message/getFromMessage",
  type: "POST",
  datatype:'json',
  success: console.log('Got Messages'),
  data: messagefrom
}) .then(function(response){
  for (i=0;i<response.length;i++){
    messages.push(response[i])
  }

}) 
console.log(messageto)
$.ajax({
  url: "http://localhost:3001/message/getToMessage",
  type: "POST",
  datatype:'json',
  success: console.log('Got Messages'),
  data:messageto
}) .then(function(response){
  for (i=0;i<response.length;i++){
  messages.push(response[i])}
  messages.sort(function(a, b) { 
   return a.MessageID - b.MessageID;
  });
  for (i=0;i<messages.length; i++) {
    var tablerow = $('<tr>')

    var message = $('<td>')
    message.attr('scope', 'col')
    if(messages[i].UIDFROM == localStorage.getItem('OID')) {
    message.text(messages[i].COMMENT)
    }
    var message2 = $('<td>')
    if(messages[i].UIDTO == localStorage.getItem('OID')) {
    message2.text(messages[i].COMMENT)
    }
    $(tablerow).append(message)
    $(tablerow).append(message2)
    $('#messages').append(tablerow)
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
    })

  })
})
})