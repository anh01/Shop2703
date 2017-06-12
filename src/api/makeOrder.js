const makeOrder = (token, arrayCart) => (
    fetch('http://localhost:3000/check', {// eslint-disable-line
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token, arrayCart })
    })
    .then(res => res.json())
);

export default makeOrder;
