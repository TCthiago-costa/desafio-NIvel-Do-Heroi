let heroName = "Caco Master";
let heroXp = 20000;
let heroLevel = "";


if (heroXp <= 1000) {
    heroLevel = "Ferro"
    console.log (`O heroi de nome ${heroName} está no nível de ${heroLevel}`);
}else if (heroXp >= 1001 && heroXp <= 2000){
    heroLevel = "Bronze"
    console.log (`O heroi de nome ${heroName} está no nível de ${heroLevel}`);
}else if (heroXp >= 2001 && heroXp <= 5000){
    heroLevel = "Prata"
    console.log (`O heroi de nome ${heroName} está no nível de ${heroLevel}`);
}else if (heroXp >= 5001 && heroXp <= 6000){
    heroLevel = "Ouro"
    console.log (`O heroi de nome ${heroName} está no nível de ${heroLevel}`);
}else if (heroXp >= 6001 && heroXp <= 7000){
    heroLevel = "Platina"
    console.log (`O heroi de nome ${heroName} está no nível de ${heroLevel}`);
}else if (heroXp >= 7001 && heroXp <= 8000){
    heroLevel = "Ascendente"
    console.log (`O heroi de nome ${heroName} está no nível de ${heroLevel}`);
}else if (heroXp >= 8001 && heroXp <= 10000){
    heroLevel = "Imortal"
    console.log (`O heroi de nome ${heroName} está no nível de ${heroLevel}`);
}else {
    heroLevel = "Radiante"
    console.log(`O heroi de nome ${heroName} está no nível de ${heroLevel}`);
}
