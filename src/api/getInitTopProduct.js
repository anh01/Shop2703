const getInitData = () => (
    fetch('http://localhost:3000/initTopProduct')
    .then(res => res.json())
);

export default getInitData;
