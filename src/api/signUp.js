const signIn = (email, password, address, name, phone) => (
    fetch('http://localhost:3000/dangky', {// eslint-disable-line
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password, address, name, phone })
    })
    .then(res => res.text())
);

export default signIn;
