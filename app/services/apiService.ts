const apiService = {
    get: async function (url: string): Promise<any> {
        console.log('get', url)
        return new Promise((resolve, reject) => {
            fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
                .then(response => response.json())
                .then((json) => {
                    // the resolve function is called when the promise is resolved and the data is returned
                    resolve(json)
                })
                .catch((error) => {
                    console.error('error:', error)
                    reject(error)
                });
        })
    }

}

export default apiService;