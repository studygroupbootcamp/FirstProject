$(document).ready(function(){

    var friendSearch = {
        UIDFrom: localStorage.getItem('myid')
    }

    $.ajax({
        url: "http://localhost:3001/relationships/showFriends",
        type: "POST",
        datatype:'json',
        success: console.log('nice'),
        data: friendSearch
    }) .then(function(response){
        console.log(response)
        for (i=0; i<response.length; i++) {
            var friendName = response[i].name
            var row = $('<p>')
            row.attr('class', "bg-light mt-2")
            row.text(friendName)
            $('#main').append(row)
        }
    })
})