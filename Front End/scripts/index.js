$(document).ready(function(){
    $('#head').load('./HeaderAndFooter/header.html')



    $('#foot').load('./HeaderAndFooter/footer.html')

var name = localStorage.getItem('name')
var email = localStorage.getItem('email')
var password = localStorage.getItem('password')

    if(!name || !email || !password) {
    $('#main').load('./accounts/SignInForm.html')
    } else {
        url = "./accounts/yourAccount.html"
        window.location = url
    }
})