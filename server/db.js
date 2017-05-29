const pg = require('pg');
// const { hash, compare } = require('bcrypt');

const config = {
    user: 'postgres',
    database: 'SHOP',
    password: 'khoapham',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000,
};

const pool = new pg.Pool(config);

function queryDB(sql, cb) {
    pool.connect((err, client, done) => {
        if (err) return cb(err, undefined);
        client.query(sql, (errQuery, result) => {
            done(errQuery);
            if (errQuery) return cb(errQuery, undefined);
            cb(undefined, result);
        });
    });
}

const getArrProductType = (cb) => {
    const sql = 'SELECT * FROM "ProductType"';
    queryDB(sql, (err, result) => {
        if (err) return cb(err);
        cb(undefined, result.rows);
    });
};

module.exports = { getArrProductType };

// signUp('asssdafdfs@gmail.com', '123', 'Pho', '92 LTR', '012348217', err => {
//     console.log(err);
// });

// signIn('Sasssdafdfs@gmail.com', '123', err => console.log(err));
