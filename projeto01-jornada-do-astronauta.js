//Projeto 1 - A história do astronauta que viaja para os principais planetas da Via Láctea que a Ciência descobriu ser mais distante do sol.

var prompt = require("prompt-sync")();

console.log("\n\tUm astronauta viaja pela Via Láctea para visitar os planetas mais afastados do sol. \n\tPara a viagem triunfar, ele precisa visitar o maior número desses planetas que a Ciência descobriu e continuar vivo. \n\tNesse caso, você acha que ele descobriu quais planetas abaixo? \n\tATENÇÃO - Digite 1 para Sim ou 0 para Não nas perguntas abaixo.\n\t");

const sim = 1;
const não = 0;

let q1 = +prompt("O astronauta visitou Marte? ");
let q2 = +prompt("O astronauta visitou Júpiter? ");
let q3 = +prompt("O astronauta visitou Saturno? ");
let q4 = +prompt("O astronauta visitou Urano? ");
let q5 = +prompt("O astronauta visitou Netuno? ");

let cont = q1 + q2 + q3 + q4 +q5;

if(cont == 5) {
    console.log("\n\tO astronauta triunfou de maneira inquestionável e seus feitos serão lembrados por muitas gerações.\n\t");
} else if(cont == 4) {
    console.log("\n\tO astronauta, depois de muito esforço, conquistou seu objetivo, embora não de maneira perfeita, porque faltou apenas 1 planeta\n\t");
} else if(cont == 3) {
    console.log("\n\tO austronauta chegou perto de seu objetivo, está vivo e pode tentar novamente, mas falhou por pouco.\n\t");
} else if(cont <= 2 && cont != 0) {
    console.log("\n\tO astronauta falhou, mas está vivo e pode tentar novamente.\n\t");
} else {
    console.log("\n\tGame Over - O astronauta falhou miseravelmente.\n\t");
}