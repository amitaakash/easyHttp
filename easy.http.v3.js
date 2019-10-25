/**
 * EasyHttp library
 * library for making request of HTTP
 * 
 * @version 2.0.0
 * @author Amit Mishra
 * @license MIT
 * @example async and await functionality in javascript
 * 
 **/


 

class EasyHTTP {

    // HTTP GET request
    async get(url) {

        const resposeData = await fetch(url);
        const data = await resposeData.json();

        return data;

    }

    // HTTP POST request
    async post(url, request) {

        const resposeData = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(request)
        });
        const data = await resposeData.json();

        return data;

    }

    // HTTP PUT request
    async put(url, request) {

        const resposeData = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(request)
        });
        const data = await resposeData.json();

        return data;

    }

    // HTTP PUT request
    async delete(url) {

        const resposeData = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        });
        let data = null;
        if(resposeData.status === 200){
            data = 'Resource deleted...';
        }
        return data;

    }
    
}