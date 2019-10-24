console.log('app started...');

const http = new easyHTTP();

//get posts
/* http.get('https://jsonplaceholder.typicode.com/posts/', function(err, posts){
    if(!err){
        console.log(posts);
    }else{
        console.log(err);
    }
    
});
 */
// get single post
/* http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, posts){
    if(!err){
        console.log(posts);
    }else{
        console.log(err);
    }
    
}); */

// Create post
const data = {
    title: 'custom post',
    body: 'this is a custom post'
}

/* http.post('https://jsonplaceholder.typicode.com/posts/', data, function(err, post){
    if(!err){
        console.log(post);
    }else{
        console.log(err);
    }
}); */

// Update Post

http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post){
    if(!err){
        console.log(post);
        console.log('post updated')
    }else{
        console.log(err);
    }
}); 


//Delete Post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, post){
    if(!err){
        console.log('post deleted')
    }else{
        console.log(err);
    }
});