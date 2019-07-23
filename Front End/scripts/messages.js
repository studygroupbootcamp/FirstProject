$(document).ready(function(){

    var friendSearch = {
        UIDFrom: localStorage.getItem('myid')
    }
    $('#messageFriendN').text(localStorage.getItem('MFN'))
    

    $.ajax({
        url: "/api/relationships/showFriends",
        type: "POST",
        datatype:'json',
        success: console.log('nice'),
        data: friendSearch
    }) .then(function(response){
        console.log(response)
        for (i=0; i<response.length; i++) {
            var friendName = response[i].name
            var button = $('<button>')
            button.attr('class', "w-100 btn btn-light border-top border-bottom")
            button.attr('id', 'messageFriend'+i)
            button.attr('val', response[i].id)
            button.text(friendName)
            $('#friends').append(button)
            delegate(i)
        }
    })
    var MID = localStorage.getItem('MID')
    var messagefrom = {
        UIDFROM: MID,
        UIDTO: localStorage.getItem('myid'),
    }
    
    var messageto = {
      UIDFROM: localStorage.getItem('myid'),
      UIDTO: MID
    }
    var messages = []
    $.ajax({
        url: "/api/message/getFromMessage",
        type: "POST",
        datatype:'json',
        success: console.log('Got Messages'),
        data: messagefrom
      }) .then(function(response){
        for (i=0;i<response.length;i++){
          messages.push(response[i])
        }})
        $.ajax({
            url: "/api/message/getToMessage",
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
              message.attr('class', 'border-right')
              if(messages[i].UIDFROM == localStorage.getItem('MID')) {
              message.text(messages[i].COMMENT)
              }
              var message2 = $('<td>')
              if(messages[i].UIDTO == localStorage.getItem('MID')) {
              message2.text(messages[i].COMMENT)
              }
              $(tablerow).append(message)
              $(tablerow).append(message2)
              $('#messages').append(tablerow)
            }
          })
      }) 
    $('#sendMessage').on('click', function(event,){
        event.preventDefault()
        var newMessage = {
            fromId: localStorage.getItem('myid'),
            toId: localStorage.getItem('MID'),
            message: null
        }
        if(toId=""){}
        newMessage.message = $('#message').val()
        if (newMessage.message == ""){alert('please input a message')}
        else {
        $.ajax({
          url: "/api/message/sendMessage",
          type: "POST",
          datatype: "json",
          success: console.log('Message Sent: ' + newMessage),
          data: newMessage
        }) 
        location.reload() }
      }) 
function delegate(i) {
    $('#messageFriend' + i).on("click", function (e) {
        localStorage.setItem('MFN', $(e.target).text())
        $('#messages').text('')
        
        localStorage.setItem('MID', $(e.target).attr('val'))
        var MID = localStorage.getItem('MID')
        var messagefrom = {
            UIDFROM: MID,
            UIDTO: localStorage.getItem('myid'),
        }
        
        var messageto = {
          UIDFROM: localStorage.getItem('myid'),
          UIDTO: MID
        }
        var messages = []
        $.ajax({
            url: "/api/message/getFromMessage",
            type: "POST",
            datatype:'json',
            success: console.log('Got Messages'),
            data: messagefrom
          }) .then(function(response){
            for (i=0;i<response.length;i++){
              messages.push(response[i])
            }})
            $.ajax({
                url: "/api/message/getToMessage",
                type: "POST",
                datatype:'json',
                success: console.log('Got Messages'),
                data:messageto
              }) .then(function(response){
                $('#messageFriendN').text(localStorage.getItem('MFN'))
                for (i=0;i<response.length;i++){
                messages.push(response[i])}
                messages.sort(function(a, b) { 
                 return a.MessageID - b.MessageID;
                });
                for (i=0;i<messages.length; i++) {
                  var tablerow = $('<tr>')
              
                  var message = $('<td>')
                  message.attr('scope', 'col')
                  message.attr('class', 'border-right')
                  if(messages[i].UIDFROM == localStorage.getItem('MID')) {
                  message.text(messages[i].COMMENT)
                  }
                  var message2 = $('<td>')
                  if(messages[i].UIDTO == localStorage.getItem('MID')) {
                  message2.text(messages[i].COMMENT)
                  }
                  $(tablerow).append(message)
                  $(tablerow).append(message2)
                  $('#messages').append(tablerow)
                } 
              })
    })}
