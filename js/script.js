// variabili

const maxNumber = 50;

const minNumber = 1;

const startButton = document.getElementById('start-button')

const numberList = document.getElementById('numbers-list')

const answerForm = document.getElementById('answers-form')

const countdownEl = document.getElementById('countdown');

const numeriInseriti = document.querySelectorAll('#input-group input')

/*
const numeroInserito1 = document.getElementById('n1')
const numeroInserito2 = document.getElementById('n2')
const numeroInserito3 = document.getElementById('n3')
const numeroInserito4 = document.getElementById('n4')
const numeroInserito5 = document.getElementById('n5')
*/

const counterV = document.getElementById('message-n-v')
const messageV = document.getElementById('message-v')
const counterX = document.getElementById('message-n-x')
const messageX = document.getElementById('message-x')

const error = document.getElementById('error')


const arrayNum = [];
const arrayuser = [];
const arraysoluzioniV = [];
const arraysoluzioniX = [];
let soluzioniV = 0;
let numeriV = '';
let soluzioniX = 0;
let numeriX = '';

const numeriCasualiDaGenerare = 5


// al primo evento generare un countdown ,generare array di numeri che vengono visti come list item  alla fine del countdown mttere tutto d-none

startButton.addEventListener('click', () => {
    startButton.disabled = true;

    // mi creo l'array 


/*
    for (let i = 0; i < numeriCasualiDaGenerare; i++) {
        let arrayElement = randomIntFromOneTo(minNumber,maxNumber)
        arrayNum.push(arrayElement)

        const liElement = document.createElement('li')
        liElement.innerHTML = arrayElement
        numberList.appendChild(liElement)


    }
    console.log(arrayNum)

*/

while(arrayNum.length < numeriCasualiDaGenerare){
    let arrayElement = randomIntFromOneTo(minNumber,maxNumber)
    
    if(!arrayNum.includes(arrayElement)){
        arrayNum.push(arrayElement)
        const liElement = document.createElement('li')
        liElement.innerHTML = arrayElement
        numberList.appendChild(liElement)

    }
}

console.log(arrayNum)


    // mettere il form in d-flex
    // setTimeout(displayChange, 30 * 1000);

    let timerNumber = 3;
    const intervalId = setInterval(() => {
        timerNumber--;
        countdownEl.innerHTML = timerNumber;
        if (timerNumber === 0) {
            displayChange()
            clearInterval(intervalId);
        }
    }, 1000);


})


// ricere gli input dal form 

answerForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // validazione dei numeri

    const risposreUtente = []

    for (let i = 0; i < numeriInseriti.length; i++) {
        const currentElement = parseInt(numeriInseriti[i].value);
    
        if (
          !isNaN(currentElement) && 
          currentElement >= minNumber && 
          currentElement <= maxNumber && 
          !risposreUtente.includes(currentElement) 
        ) {
          risposreUtente.push(currentElement);
        }
      }

      if (risposreUtente.length < numeriCasualiDaGenerare){

        error.classList.remove('d-none')
        error.classList.add('d-flex')
        error.append('INSERISCI I DATI CORRETTI')


      } else{

        for (let i=0; i<risposreUtente.length; i++){
            
            if (arrayNum.includes(risposreUtente[i])){

                soluzioniV++;
                arraysoluzioniV.push(risposreUtente[i]);

            } else{
                soluzioniX++;
                arraysoluzioniX.push(risposreUtente[i])

            }
        }

        numeriV = arraysoluzioniV.join();
        numeriX = arraysoluzioniX.join();

        counterV.append(`soluzioni corrette: ${soluzioniV}`)
        messageV.append(`${numeriV}`)
        counterX.append(`soluzioni sbagliate: ${soluzioniX}`)
        messageX.append(`${numeriX}`)

      }

    });





// funzioni


function randomIntFromOneTo(min,max) {
   // const randomInt = Math.floor(Math.random() * maxNumber) + 1

    const randomInt = Math.floor(Math.random() * (max - min+ 1)) + min;


    return randomInt
}


function displayChange() {
    numberList.classList.add('d-none')
    numberList.classList.remove('d-flex')
    answerForm.classList.add('d-block')
    answerForm.classList.remove('d-none')

}
