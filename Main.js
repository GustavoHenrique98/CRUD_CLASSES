import Organizacao from "./entidades/organizacao.js";
import Evento from "./entidades/eventos.js";
import Estrategia from "./entidades/estrategias.js";

import {createAll , readAll , especificReading , updateAll , deleteAll } from "./Funcoes/globalFunctions.js";



const organizacao = new Organizacao('12.345.678/0001-90','Ana Costa','EcoEvento','São Paulo, SP');
const evento = new Evento('Dia do Meio Ambiente','Evento dedicado à promoção de práticas sustentáveis.','2024-09-15','Parque Ibirapuera, SP',1);
const estrategia = new Estrategia('Reciclagem','Coleta e separação de materiais recicláveis como papel, plástico e vidro','Ótimo');

//Criando novas organizações utilizando classes para adicionar Linhas;
// createAll(organizacao);
// createAll(evento);
// createAll(estrategia);

//Lendo todas as organizações,eventos e estrategias individualmente
//Organizacoes
// readAll(organizacao);
// readAll(evento);
// readAll(estrategia);

//Lendo uma organização específica
// especificReading(organizacao,1) // organizacao com o id = 1
// especificReading(evento,1) // evento com o id = 1
// especificReading(estrategia,1) // estrategia com o id = 1


//Atualizando qualquer uma das entidades de maneira especifica.
updateAll(organizacao,1); // É so passar o objeto e o ID da linha da tabela que quer mudar que ele já identifica o nome da classe e manipula de maneira dinâmica.

//Deletando qualquer uma das entidades de maneira específica.
deleteAll(estrategia,1);
