document.body.addEventListener('keyup', function (e){
    if(e.keyCode === 190){
        var newPost = document.getElementsByClassName('new-post-activity');
        if(newPost[0]){
            newPost[0].click();
        }
    }
}, false);