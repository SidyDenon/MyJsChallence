function numToGuess() {
    let playerGuess;
    const numberGuess = Math.floor(Math.random()* 11);
    prompt('Devinez le nombre compris entre 0 et 10 inclus')
    
    while(playerGuess != numberGuess) {
        playerGuess = prompt( 'Erreur!!! Essayez de deviner à nouveau le nombre compris entre 0 et 10 inclus')
    }
    
    alert(`Felicitation ! c´est bien le nbre ${numberGuess} qui étais à devinez` )
}

numToGuess();

// console.log(`${numberGuess}`)

// alert('hello! ');