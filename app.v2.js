const http = new EasyHTTP();


// GET data
/* http.get('https://jsonplaceholder.typicode.com/users').then(data => console.log(data)).catch(err => console.log(err)); */



const data = {
    name: 'Amit Mishra',
    username: 'amitaakash',
    email: 'am@gmail.com'
}


// POST data
// http.post('https://jsonplaceholder.typicode.com/users', data).then(data => console.log(data)).catch(err => console.log(err));

// PUT data

// http.put('https://jsonplaceholder.typicode.com/users/1', data).then(data => console.log(data)).catch(err => console.log(err));

// Delete data
http.delete('https://jsonplaceholder.typicode.com/users/2', data).then(data => console.log(data)).catch(err => console.log(err));
