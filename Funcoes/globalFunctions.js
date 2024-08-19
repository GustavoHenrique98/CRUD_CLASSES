import connection from "../db/database.js";

// Ler os dados de qualquer tabela no banco de dados (Organização, Estrategia, Evento);

export function createAll(entidade,ID_estrategia,ID_evento){
    const Organizacao = entidade.constructor.name ==="Organizacao";
    const Estrategia = entidade.constructor.name ==="Estrategia";
    const Evento = entidade.constructor.name ==="Evento";
    const Estrategias_eventos = entidade.constructor.name === "Estrategias_eventos";
    
    if(!(Organizacao || Estrategia || Evento || Estrategias_eventos)){
        console.log('Entidade inválida para a operação!');
        console.log('Operação interrompida!');
        return;
    }
    
    
    if(Organizacao){
        connection.query('INSERT INTO Organizacao (cnpj,responsavel,nome_organizacao,localizacao_organizacao) VALUES (?,?,?,?)',
            [entidade.cnpj,entidade.responsavel,entidade.nome_organizacao,entidade.localizacao_organizacao],(err,rows)=>{
            if(!err){
                console.log('Dados inseridos com sucesso!')
            }else{
                console.log(`ERROR! : ${err.message}`);
            }
        });
    }

    if(Estrategia){
        connection.query('INSERT INTO Estrategia (descricao_estrategia,tipo_estrategia,efetividade) VALUES (?,?,?)',
            [entidade.descricao_estrategia,entidade.tipo_estrategia,entidade.efetividade],(err,rows)=>{
            if(!err){
                console.log('Dados inseridos com sucesso!')
            }else{
                console.log(`ERROR! : ${err.message}`);
            }
        });
    }

    if(Evento){
        connection.query('INSERT INTO Evento (nome_evento, descricao_evento , data_evento, localizacao_evento, ID_organizacao) VALUES(?,?,?,?,?)',
            [entidade.nome_evento , entidade.descricao_evento , entidade.data_evento , entidade.localizacao_evento , entidade.ID_organizacao ],(err,rows)=>{
            if(!err){
                console.log('Dados inseridos com sucesso!')
            }else{
                console.log(`ERROR! : ${err.message}`);
            }
        });
    }

    if(Estrategias_eventos){
        connection.query('INSERT INTO Estrategias_eventos (ID_estrategia,ID_evento) VALUES(?,?)',
        [ID_estrategia,ID_evento],(err,rows)=>{
            if(!err){
                console.log('Dados inseridos com sucesso!')
            }else{
                console.log(`ERROR! ${err.message}`);
            }
        })
    }
}

export function readAll(entidade){
    if(entidade === "Organizacao"){
        connection.query('SELECT * FROM Organizacao',(err,rows)=>{
            if(!err){
                console.log(rows);
            }else{
                console.log(`ERROR! : ${err.message}`);
            }
        });
    }

    if(entidade ==="Estrategia"){
        connection.query('SELECT * FROM Estrategia',(err,rows)=>{
            if(!err){
                console.log(rows);
            }else{
                console.log(`ERROR! : ${err.message}`);
            }
        });
    }

    if(entidade ==="Evento"){
        connection.query('SELECT * FROM Evento',(err,rows)=>{
            if(!err){
                console.log(rows);
            }else{
                console.log(`ERROR! : ${err.message}`);
            }
        });
    }

    
}

export function read(entidade,ID){ 
    if(entidade === 'Organizacao'){
        connection.query('SELECT * FROM Organizacao WHERE ID = ?',[ID],(err,rows)=>{
            if(!err){
                if(rows.length > 0 ){
                    console.log(rows);
                }else{
                    console.log(`ERROR! ID  organização inválido!`);
                }
            }else{
                console.log(`ERROR! : ${err.message}`);
            }
        });
    }

    if(entidade === 'Estrategia'){
        connection.query('SELECT * FROM Estrategia WHERE ID = ?',[ID],(err,rows)=>{
            if(!err){
                if(rows.length > 0 ){
                    console.log(rows);
                }else{
                    console.log(`ERROR! ID da estratégia inválido`);
                }
            }else{
                console.log(`ERROR! : ${err.message}`);
            }
        });
    }

    if(entidade === 'Evento'){
        connection.query('SELECT * FROM Evento WHERE ID = ?',[ID],(err,rows)=>{
            if(!err){
                if(rows.length > 0 ){
                    console.log(rows);
                }else{
                    console.log(`ERROR! ID do evento inválido`);
                }
            }else{
                console.log(`ERROR! : ${err.message}`);
            }
        });
    }
}


export function updateAll(entidade,ID){  
    if(entidade.constructor.name ==="Organizacao"){
        connection.query('UPDATE Organizacao SET cnpj = ? , responsavel = ? , nome_organizacao = ? ,localizacao_organizacao = ? WHERE ID = ?',
            [entidade.cnpj , entidade.responsavel , entidade.nome_organizacao , entidade.localizacao_organizacao , ID],(err,rows)=>{
            if(!err){
                if(rows.affectedRows>0){
                    console.log("Dados da Organização atualizados com sucesso!!!");
                }else{
                    console.log('O ID da organização não consta no banco de dados!');
                };
            }else{
                console.log(`ERROR! : ${err.message}`);
            }
        });
    }

    if(entidade.constructor.name ==="Estrategia"){
        connection.query('UPDATE Estrategia SET descricao_estrategia = ? , tipo_estrategia = ? , efetividade = ? WHERE ID = ?',
            [entidade.cnpj , entidade.descricao_estrategia , entidade.tipo_estrategia , entidade.efetividade , ID],(err,rows)=>{
            if(!err){
                if(rows.affectedRows>0){
                    console.log("Dados da estrategia atualizados com sucesso!!!");
                }else{
                    console.log('O ID da estrategia não consta no banco de dados!');
                }
            }else{
                console.log(`ERROR! : ${err.message}`);
            }
        });
    }

    if(entidade.constructor.name ==="Evento"){
        connection.query('UPDATE Evento SET nome_evento = ? , descricao_evento = ? , data_evento = ? , localizacao_evento = ? , ID_organizacao = ? WHERE ID = ?',
         [entidade.nome_evento , entidade.descricao_evento , entidade.data_evento , entidade.localizacao_evento , entidade.ID_organizacao , ID],(err,rows)=>{
            if(!err){
                if(rows.affectedRows>0){
                    console.log("Dados do evento atualizados com sucesso!!!");
                }else{
                    console.log('O ID do evento não consta no banco de dados!');
                }
            }else{
                console.log(`ERROR! : ${err.message}`);
            };
        });
    }
}

export function deleteAll(entidade,ID){
    
    if(entidade.constructor.name ==="Organizacao"){
        connection.query('DELETE FROM Organizacao WHERE ID = ?',[ID],(err,rows)=>{
            if(!err){
                if(rows.affectedRows > 0){
                    console.log('Dados da organização deletados com sucesso!!!');
                }else{
                   console.log("ERRO! ID da organização inválido!! "); 
                }
            }else{
                console.log(`ERROR! : ${err.message}`);
            }
        });
    }

    if(entidade.constructor.name ==="Estrategia"){
        connection.query('DELETE FROM Estrategia WHERE ID = ?',[ID],(err,rows)=>{
            if(!err){
                if(rows.affectedRows > 0){
                    console.log('Dados da organização deletados com sucesso!!!');
                }else{
                   console.log("ERRO! ID da estrategia inválido!! "); 
                }
            }else{
                console.log(`ERROR! : ${err.message}`);
            }
        });
    }

    if(entidade.constructor.name ==="Evento"){
        connection.query('DELETE FROM Evento WHERE ID = ?',[ID],(err,rows)=>{
            if(!err){
                if(rows.affectedRows > 0){
                    console.log('Dados do evento deletados com sucesso!!!');
                }else{
                   console.log("ERRO! ID do evento inválido!! "); 
                }
            }else{
                console.log(`ERROR! : ${err.message}`);
            }
        });
    }

}


export function teste(){
    connection.query(`SELECT organizacao.ID,
    organizacao.cnpj,
    organizacao.responsavel,
    organizacao.nome_organizacao,
    organizacao.localizacao_organizacao,
    evento.ID,
    evento.nome_evento,
    evento.descricao_evento,
    evento.localizacao_evento,
    evento.ID_organizacao 
    FROM Organizacao
    INNER JOIN  Evento on Evento.ID_organizacao = Organizacao.ID;`,(err,rows)=>{
        if(!err){
            console.log(rows);
        }else{
            console.log(`ERROR! ${err.stack}`);
        }
    })
}
