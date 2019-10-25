console.log('App started...');
const http = new EasyHTTP();

// get data

http.get('https://jsonplaceholder.typicode.com/users').then(data => console.log(data)).catch(err => console.log(err));



const data = {
    name: 'Amit Mishra',
    username: 'amitaakash',
    email: 'am@gmail.com'
}

// post data
http.post('https://jsonplaceholder.typicode.com/users', data).then(data => console.log(data)).catch(err => console.log(err));

// put data

http.put('https://jsonplaceholder.typicode.com/users/1', data).then(data => console.log(data)).catch(err => console.log(err));

// Delete data

http.delete('https://jsonplaceholder.typicode.com/users/1', data).then(data => console.log(data)).catch(err => console.log(err));