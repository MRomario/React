export const HttpSignIn = (email: string, password: string) => {
    const url = 'http://localhost:3000/users/singin';
    return fetch(url, {
        method: 'POST',
        mode: 'cors', // no-cors, cors, *same-origin
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: email,
            password: password
        })
    }).then(response => response.json());
}