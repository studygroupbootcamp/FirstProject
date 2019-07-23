$(document).ready(function () {

    search = {
        name: localStorage.getItem('search')
    }
    $.ajax({
        url: "/api/commands/nameSearch",
        type: "POST",
        datatype: 'json',
        success: console.log('Got ' + localStorage.getItem('search') + "'s Info"),
        data: search

    }).then(function (response) {
        console.log(response)
        for (i = 0; i < response.length; i++) {
            
            var container = $('<div>')
            container.attr('class', 'card w-25 mb-5 mt-5 rounded shadow-lg')

            var innerContain = $('<div>')
            innerContain.attr('class', 'card-body')
            $(container).append(innerContain)

            var title = $('<h1>')
            title.text(response[i].name)
            title.attr('class', 'card-title')

            var email = $('<p>')
            email.text(response[i].email)

             var button = $('<button>')
            button.attr('val', response[i].name)
            button.text("Go To Page")
            button.attr('class', 'btn btn-primary')
            button.attr('id', 'id' + i)

            $(innerContain).append(title)
            $(innerContain).append(email)
            $(innerContain).append(button)
            $('#posts').append(container)

            delegatesearch(i)
        }
    })

    

 function delegatesearch(i) {
        $('#id' + i).on('click', function (e) {
            localStorage.setItem('search', $(e.target).attr('val'))
            window.location = './otherUser.html'
        })
    }
})