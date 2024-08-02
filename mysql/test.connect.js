import mysql from 'mysql2';
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Rongcute2504*',
    port: 3309,
});
connection.connect();
connection.query('SELECT 1 + 1 AS solution', (err, rows) => {
    if (err) throw err;
    console.log('The solution is: ', rows[0].solution); // 2: OK
});
connection.end();   