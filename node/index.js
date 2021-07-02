
const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};

const configRoot = {
    host: 'db',
    user: 'root',
    password: 'root'
}

const mysql = require('mysql')
let connection = mysql.createConnection(configRoot)


const create_database = `create database if not exists nodedb`;
connection.query(create_database);

connection = mysql.createConnection(config);

connection.query('drop table if exists people;')

const create_table = `create table if not exists people(id INT AUTO_INCREMENT PRIMARY KEY, name varchar(255))`

connection.query(create_table);

const sql = `INSERT INTO people(name) values('João')`

connection.query(sql)

let table;

connection.query("SELECT * FROM people", function (err, result, fields) {
    if (err) throw err;
    
    result.forEach(element => {
            console.log(element);
            table += `<tr><td>${element.name}</td></tr>`
    });
});

connection.end();


app.get('/', (req,res) => {
    res.send(

        `<div><h1>Code Education Rocks!</h1>`+
        `<table>
            <tr>
                <td><strong>Nome</strong></td>
            </tr>
            ${table}
        </table></div>`
    )
});

app.listen(port, ()=> {
    console.log(`Rodando na porta ${port}`)
})