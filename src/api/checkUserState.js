const checkUserState = (token) => (
    fetch('http://localhost:3000/check', {// eslint-disable-line
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token })
    })
    .then(res => res.json())
);

export default checkUserState;
