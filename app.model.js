const sqlite3 = require("sqlite3").verbose();
const sqlite = require("sqlite");
let db;

//connect to users table
async function makeConnection1()
{
    db = await sqlite.open({
        filename: "table1.db",
        driver: sqlite3.Database
    })
}

//connect to products table
async function makeConnection2()
{
    db = await sqlite.open({
        filename: "table2.db",
        driver: sqlite3.Database
    })
}

//connect to stores table
async function makeConnection3()
{
    db = await sqlite.open({
        filename: "table3.db",
        driver: sqlite3.Database
    })
}

module.exports = {makeConnection1, makeConnection2, makeConnection3};
