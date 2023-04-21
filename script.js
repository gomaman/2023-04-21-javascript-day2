

// let originalPassword ='   aasss#k'
// let trimedPassword = originalPassword.trim()
// let passLength = trimedPassword.length
// console.log (passLength)


// if (!trimedPassword.includes('#')) {
//     console.log ('Neturi hash')
// }  if (passLength >= 20) { 
//     console.log ('Password length - OK')
// }


// if (kodo taisykle) {ka turi padaryti ismetus taisykles rezultata}

// Pagal amžiu surašyti į kurią klasė eina mokinys:

// 1. Iki 6 metų į mokyklą neina.

// 2. 7-10 metų eina į pradinę klasę.

// 3. 11-14 metų eina į pagrindinę.

// 4. 15-18 metų eina į gimnaziją.

// 5. 19+ mokyklą baigė.

// 7.1. Jeigu amžius yra 6 metai, tai parašyti: "Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas."
// 7.2. Jeigu amžius yra 10 metai, tai parašyti: "Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas."
// 7.3. Jeigu amžius yra 14 metai, tai parašyti: "Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas."
// 7.3. Jeigu amžius yra 18 metai, tai parašyti: "Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.


let personAge = prompt('Iveskite savo amziu');

if (isNaN (personAge)) {
    console.log ('Irasyk skaiciu')
}   else if (personAge <0 ) {
    console.log ('Ivestas amzius per mazas')
}   else if (personAge <6 ) {
    console.log ('Iki 6 metų į mokyklą neina.' )
}   else if (personAge <7 )   {
    console.log ('Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.')
}   else if(personAge  <10)  {
    console.log ('7-10 metų eina į pradinę klasę.')
}   else if(personAge  <11)   {
    console.log ('Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.')
}   else if(personAge  <14)  {
    console.log ('11-14 metų eina į pagrindinę.')
}   else if(personAge  <15)   {
    console.log ('Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.')
}   else if(personAge  <19)  {
    console.log ('15-18 metų eina į gimnaziją.')
}   else if(personAge  <20)   {
    console.log ('Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.')
}   else if(personAge  <121)  {
    console.log ('19+ mokyklą baigė.')
}   else                      {
    console.log ('Ivestas amzius per didelis')
}








