const updateInfo = (token, name, address, phone) => (
    fetch('http://localhost:3000/changeInfo', {// eslint-disable-line
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token, name, address, phone })
    })
    .then(res => res.text())
);

export default updateInfo;
