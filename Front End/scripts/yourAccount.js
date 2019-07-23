$(document).ready(function(){

    $('#friends').on('click', function(){
        window.location = './friends.html'
    })

    var name = localStorage.getItem('name')
    var email = localStorage.getItem('email')
    var password = localStorage.getItem('password')
    var admin = localStorage.getItem('adminPass')

    var info = {
        email: email
    }
    $.ajax({
        url: "http://localhost:3001/commands/retrieveAccount",
        type: "POST",
        datatype:'json',
        success: console.log('nice'),
        data: info
      })
      //So this took a WHILE to get working. It kept sending me the wrong information. The response is actually being sent from an sql call in the
      //back end. It comes in an array that is then looped through and each key value pair is stored in html tags and then displayed on the page.
                    //this is specifically the response
      .then(function(response){
          localStorage.setItem('myid', response[0].id)
    if(admin == '32a64b') {
        var adpan = $('#adminPanel')
        var adbut = $('<button>')
        adbut.attr('id', 'gotoadmin')
        adbut.attr('class', 'btn btn-light m-1')
        adbut.text('Admin Panel')
        adpan.append(adbut)
    }
    console.log(response[0].id)
    $('#name').text(response[0].name)
    $('#email').text(response[0].email)
    $('#password').text(response[0].password)
    $('#DateJoined').text(response[0].date_created.substring(0, 10))
    $('#gotoadmin').click(function(){
        window.location = './adminPanel.html'
    })
})
})
$("#signOut").click(function(){
    localStorage.setItem('name', '')
    localStorage.setItem('email', '')
    localStorage.setItem('password', '')
    localStorage.setItem('adminPass', "")
    localStorage.setItem('myid', '')
    localStorage.setItem('OID', '')
    localStorage.setItem('search', '')
    window.location = '../index.html'
})
