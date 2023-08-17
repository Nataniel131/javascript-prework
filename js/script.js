const playGame = function(playerInput){
    /** GetMoveName
     * To jest funkcja, która przekształca wybór gracza który jest liczbą i zwraca wartość tekstową
     * @param playerInput Wybór gracza (liczbowy: 1, 2, 3)
     * @return Przekształcony wybór gracza (tesktowy: paper, rock, scissors)
     * @example playGame(3); // 'scissors'
     */
    const getMoveName = function(argMoveId){
        if(argMoveId == 1)
            return 'kamień';
        if(argMoveId == 2)
            return 'papier';
        if(argMoveId == 3)
            return 'nożyce';
    }

    /** DisplayResult
     * To jest funkcja, która przymuje wybory gracza i komputera, a potem pokazuje w HTML wynik tej rundy.
     * @param computerMove Wybór komputera (liczbowy: 1, 2, 3)
     * @param playerMove Wybór gracz (tesktowy: paper, rock, scissors)
     * @return wynik rundy
     * @example displayResult(1, 'paper'); // 'win'
     */
    const displayResult = function(computerMove, playerMove){
            console.log('moves:', computerMove, playerMove);
            printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);
            if(computerMove == 'kamień' && playerMove == 'papier' || computerMove == 'papier' && playerMove == 'nożyce' || computerMove == 'nożyce' && playerMove == 'kamień'){
                printMessage('Ty wygrywasz!');
            } else if (computerMove == playerMove){
                printMessage('Remis!');
            } else {
                printMessage('Ja wygrywam!');
            }
        }

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);

    const computerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + computerMove);

    const playerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + playerMove);

    displayResult(computerMove, playerMove);
}

document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
});
