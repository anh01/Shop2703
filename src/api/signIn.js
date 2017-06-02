const signIn = (email, password) => (
    fetch('http://localhost:3000/dangnhap', {// eslint-disable-line
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(res => res.json())
);

export default signIn;
