/*
CONSEGNA
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l'array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

SVOLGIMENTO
1)crea un array contenente gli oggetti che rappresentao i membri del team
    -ogni membro del team (object) ha le seguenti proprietà
        *nome
        *ruolo
        *foto
2)stampo in console ogni membro del team (con la propria coppia key-value)
    -nome:...
    -ruolo:...
    -foto: stringa
3)stampo all'interno del dom quello che ho visualizzato in console
*/

//creazione array
let team = [];


//FUNCTION
//-creazione oggetto cone le seguenti proprità: nome; ruolo; foto;
function createTeamObject(nome, ruolo, foto){
    const newMember ={
        nome: nome,
        ruolo: ruolo,
        foto: foto,
    };
    return newMember
}
