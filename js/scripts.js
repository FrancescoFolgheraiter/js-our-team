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

//creazione array- ho la possibilità di creare già l'array con gli oggetti ma preferisco
//usare la funzione per creare l'oggetto e richiarmarla ogni volta tramite un push
//per riempire l'array
let team = [];
//oggetto 0
team.push(createTeamObject("Wayne Barnett", "Founder & CEO", "wayne-barnett-founder-ceo.jpg"))
//oggetto 1
team.push(createTeamObject("Angela Caroll", "Chief Editor", "angela-caroll-chief-editor.jpg"))
//oggetto 2
team.push(createTeamObject("Walter Gordon", "Office Manager", "walter-gordon-office-manager.jpg"))
//oggetto 3
team.push(createTeamObject("Angela Lopez", "Social Media Manager", "angela-lopez-social-media-manager.jpg"))
//oggetto 4
team.push(createTeamObject("Scott Estrada", "Developer", "scott-estrada-developer.jpg"))
//oggetto 5
team.push(createTeamObject("Barbara Ramos", "Graphic Designer", "barbara-ramos-graphic-designer.jpg"))

//input di dove stampare gli oggetti nel DOM
let addContentDom = document.querySelector(".row");

//stampa in console di ogni membro del team(key-value)
//ciclo di lettura array
for (let i = 0; i < team.length; i++) {
    //variabile per salvarmi il percorso dell'immagine
    let arraySupport = [];
    //ciclo di lettura key value dell'oggetto tramite for in
    for (const key in team[i]) {
        //stampa in console la variabile key che contiene le key dell'oggetto con il suo valore
        console.log("-"+ key +": "+ team[i][key])
        arraySupport.push(team[i][key])
    }
    addContentDom.innerHTML += `
        <div class="col-4 text-center mb-3">
            <div class="my-card p-3">
                <div class="container-img mb-3">
                    <img src="./img/${arraySupport[2]}" alt="">
                </div>
                <div class="bottom-card p-2">
                    <h2>${arraySupport[0]}</h2>
                    <h3>${arraySupport[1]}</h3>
                </div>
            </div>
        </div> 
    `
}





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
