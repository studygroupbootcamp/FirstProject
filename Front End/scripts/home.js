$(document).ready(function(){

    var friendSearch = {
        UIDFrom: localStorage.getItem('myid')
    }

    var newpost = {
        postername: localStorage.getItem('name'),
        posterid: localStorage.getItem('myid'),
        head: null,
        body: null
    }

    $('#makePost').on('click', function(){
        newpost.head = $('#postHead').val()
        newpost.body = $('#postBody').val()

        $.ajax({
            url: "http://localhost:3001/posts/makePost",
            type: "POST",
            datatype: "json",
            success: console.log("Post made! Thank you "+localStorage.getItem('name')),
            data: newpost
        })
        location.reload()

    })


     $.ajax({
            url: "http://localhost:3001/posts/getFriendsPost",
            type:"POST",
            datatype:'json',
            success: console.log('got all friends posts with ID:'+ console.log()),
            data:friendSearch
    
        }) .then(function(response){
            console.log(response)
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
})
