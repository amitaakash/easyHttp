/**
 * EasyHttp library
 * library for making request of HTTP
 * 
 * @version 2.0.0
 * @author Amit Mishra
 * @license MIT
 * 
 **/
class EasyHTTP {

    // HTTP GET request
    get(url){
        const promise = new Promise((resolve, reject) => {
            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
        })
        return promise;
    }

    // HTTP POST request

    post(url){
        const promise = new Promise((resolve, reject) => {
            fetch(url, 
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    }
                    )
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
        })
        return promise;
    }

    // HTTP PUT request

    put(url){
        const promise = new Promise((resolve, reject) => {
            fetch(url, 
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    }
                    )
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
        })
        return promise;
    }

    // HTTP DELETE request

    delete(url){
        const promise = new Promise((resolve, reject) => {
            fetch(url, 
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                        }
                    }
                    )
            .then(res => res.json())
            .then(() => resolve('Resource Deleted...'))
            .catch(error => reject(error));
        })
        return promise;
    }
    
}