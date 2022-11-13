const fetchService = async (url, method, content = '') => {
    let response;
    if(method !== 'GET') {
        response = await fetch(url, {
            method: method,
            headers: {'Content-type': 'application/json' },
            body: JSON.stringify(content)
        });
    } else {
        response = await fetch(url, {
            method: method,
            headers: {'Content-type': 'application/json' },
        });
    }

    return response;
}

export default fetchService