const express = require('express');
const jsonParser = require('body-parser').json();
const { getArrProductType } = require('./db');

const app = express();

app.use(express.static('public'));

app.get('/init', (req, res) => {
    getArrProductType((err, arrProductType) => {
        if (err) return res.send(err);
        res.send(arrProductType);
    });
});

app.listen(3000, () => console.log('Server started'));

//Man hinh dang ky
//Man hinh dang nhap
//Man hinh public
//Man hinh private
