const signIn = (email, password, name) => (
    fetch('http://localhost:3000/dangky', {// eslint-disable-line
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password, name })
    })
    .then(res => res.text())
);

export default signIn;
