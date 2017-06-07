const getProductByType = (idType, idMax) => (
    fetch(`http://localhost:3000/productByCategory/${idType}/${idMax}`)
    .then(res => res.json())
);

export default getProductByType;
