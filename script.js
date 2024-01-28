const num= 10;
const je= document.querySelector('.b');
const tu= document.querySelector('.c');
const il= document.querySelector('.d');
je.addEventListener('click', envoie);
tu.addEventListener('click', ins);
il.addEventListener('click', sins);
function envoie(){
    if(num>0){
        return alert('Merci pour la contribution !');
    }
}
function ins(){
    if(num>0){
        return alert('Vous êtes bien connecté');
    }
}
function sins(){
    if(num>0){
        return alert('Compte créé avec succès');
    }
}
