const getInitData = () => (
    fetch('http://localhost:3000/init')
    .then(res => res.json())
);

export default getInitData;
