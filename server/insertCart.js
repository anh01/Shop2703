const pg = require('pg');

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

const getClient = () => (
    new Promise((resolve, reject) => {
        pool.connect((err, client, done) => {
            if (err) return reject(err);
            resolve({ client, done });
        });
    })
);

const query = (client, sql) => (
    new Promise((resolve, reject) => {
        client.query(sql, (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    })
);

const insertCart = async (email, arrayCart) => {
    try {
        const createBillSQL = `INSERT INTO public."Bill"("emailUser", date, status)
	        VALUES ('${email}', NOW(), false) RETURNING id;`;
        const { client } = await getClient();
        const billId = (await query(client, createBillSQL)).rows[0].id;
        const arraySQL = arrayCart.map(e => `INSERT INTO public."BillDetail"("idBill", "idProduct", quantity)
	        VALUES (${billId}, ${e.idProduct}, ${e.quantity})`);
        const bigSQL = arraySQL.join(';\n');
        await query(client, bigSQL);
        const updateTotalSQL = `UPDATE "Bill" SET total = (
            SELECT SUM("Product"."price" * "BillDetail".quantity) FROM "BillDetail"
            INNER JOIN "Product"
            ON "Product".id = "BillDetail"."idProduct"
            WHERE "BillDetail"."idBill" = ${billId}
            )
            WHERE "id" = ${billId}`;
        return await query(client, updateTotalSQL);
    } catch (e) {
        console.log(e);
    }
};

insertCart('pho@gmail.com', [{ idProduct: 1, quantity: 3 }, 
{ idProduct: 2, quantity: 3 }, 
{ idProduct: 3, quantity: 3 }]);

// const main = async () => {
//     const { client, done } = await getClient();
//     const result = await query(client, 'SELECT * FROM "ProductType"');
//     const users = (await query(client, 'SELECT * FROM "User"')).rows;
//     console.log(users);
//     done();
// };

// main();

/*

[
    { idProduct: ?, quantity: ? },
    { idProduct: ?, quantity: ? },
    { idProduct: ?, quantity: ? },
    { idProduct: ?, quantity: ? }
]

*/
