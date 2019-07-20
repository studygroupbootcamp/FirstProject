$(document).ready(function(){

    var name = localStorage.getItem('name')
    var email = localStorage.getItem('email')
    var password = localStorage.getItem('password')


    $('#name').text(name)
    $('#email').text(email)
    $('#password').text(password)

})

$("#signOut").click(function(){
    localStorage.setItem('name', '')
    localStorage.setItem('email', '')
    localStorage.setItem('password', '')
    window.location = '../index.html'
})