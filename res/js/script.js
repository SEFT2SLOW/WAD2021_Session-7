



// Task number 1 + number 2
$(function() {
    $.get("https://jsonplaceholder.typicode.com/posts", function(posts) {
        for (post of posts) {
            let div = $('<div class= "post">');
            let title = $('<h1>').text(post.title);
            let body = $('<p>').text(post.body);

            div.append(title);
            div.append(body);

            $('body').append(div)
        }

    })


}); 



// Task number 3 adding a "title" class to h1
$(function() {
    $.get("https://jsonplaceholder.typicode.com/posts", function(posts) {
        for (post of posts) {
            let div = $('<div class= "post">');
            let title = $('<h1 class= "title">').text(post.title);
            let body = $('<p>').text(post.body);

            div.append(title);
            div.append(body);

            $('body').append(div)
        }

    })
}); 



// Task number 4 + number 5 is creating the json file
$(function() {
    $.get("res/json/posts.json", function(posts) {
        for (post of posts) {
            let div = $('<div class= "post">');
            let title = $('<h1 class= "title">').text(post.title);
            let body = $('<p>').text(post.body);

            div.append(title);
            div.append(body);

            $('body').append(div)
        }

    })
}); 




// Task number 6-8
$(function() {
    $('#send').click(function() {
        let title = $('form input').val()
        let body = $('form textarea').val()

        //create a Json object composed of these two values
        let data = {
            "title": title,
            "body": body,
        }

        $.post('https://jsonplaceholder.typicode.com/posts', data, function(response) {
            //to show the object to be send we output the result to the console
            console.log(response)
        })


    })

}); 