import Organizacao from "./entidades/organizacao.js";
import Evento from "./entidades/eventos.js";
import Estrategia from "./entidades/estrategias.js";
import Estrategias_eventos from "./entidades/estrategias_eventos.js";
import {createAll , readAll , read , updateAll , deleteAll } from "./Funcoes/globalFunctions.js";


const organizacao = new Organizacao('12.345.678/0001-90','Ana Costa','EcoEvento','São Paulo, SP');
const evento = new Evento('Dia do Meio Ambiente','Evento dedicado à promoção de práticas sustentáveis.','2024-09-15','Parque Ibirapuera, SP',1);
const estrategia = new Estrategia('Reciclagem','Coleta e separação de materiais recicláveis como papel, plástico e vidro','Ótimo');
const estrategias_eventos = new Estrategias_eventos(1,1);

// createAll(estrategias_eventos,1,1);
teste();
