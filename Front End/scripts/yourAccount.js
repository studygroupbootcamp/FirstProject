$(document).ready(function(){

    var name = localStorage.getItem('name')
    var email = localStorage.getItem('email')
    var password = localStorage.getItem('password')
    var admin = localStorage.getItem('adminPass')

    if(admin == '32a64b') {
        var adpan = $('#adminPanel')
        var adbut = $('<button>')
        adbut.attr('id', 'gotoadmin')
        adbut.attr('class', 'btn btn-light m-1')
        adbut.text('Admin Panel')
        adpan.append(adbut)
    }
    $('#name').text(name)
    $('#email').text(email)
    $('#password').text(password)
    $('#gotoadmin').click(function(){
        window.location = './adminPanel.html'
    })
})

$("#signOut").click(function(){
    localStorage.setItem('name', '')
    localStorage.setItem('email', '')
    localStorage.setItem('password', '')
    localStorage.setItem('adminPass', "")
    window.location = '../index.html'
})