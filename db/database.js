// Configuração do Banco de Dados
import mysql from 'mysql2';
import MySqlConfig from './mysql_config.js';

const connection = mysql.createConnection(MySqlConfig);

connection.connect(error=>{
    if(error){
        console.log(`Erro! :${error.stack}`);
    }else{
        console.log('MySql conectado com sucesso!!');
    }
})


export default connection;