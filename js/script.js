// variabili

const maxNumber = 50 

const startButton = document.getElementById('start-button')

const numberList = document.getElementById('numbers-list')

const answerForm = document.getElementById('answers-form')

const countdownEl = document.getElementById('countdown');

const numeroInserito1 = document.getElementById('n1')
const numeroInserito2 = document.getElementById('n2')
const numeroInserito3 = document.getElementById('n3')
const numeroInserito4 = document.getElementById('n4')
const numeroInserito5 = document.getElementById('n5')

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
let numeriV ='';
let soluzioniX = 0;
let numeriX ='';


// al primo evento generare un countdown ,generare array di numeri che vengono visti come list item  alla fine del countdown mttere tutto d-none

startButton.addEventListener('click',() =>{
    startButton.disabled = true;

    // mi creo l'array 



    for (let i=0; i < 5 ; i++){
        let arrayElement = randomIntFromOneTo(maxNumber)
        arrayNum.push(arrayElement)

        const liElement = document.createElement('li')
        liElement.innerHTML = arrayElement
        numberList.appendChild(liElement)


    }
    console.log(arrayNum)

    // mettere il form in d-flex
    setTimeout(displayChange, 30 * 1000);

    let number = 30;
    const intervalId = setInterval(() => {        
        number--;
        countdownEl.innerHTML = number;
        if (number === 0) {
            clearInterval(intervalId);
        } 
    }, 1000);


})




// ricere gli input dal form 

answerForm.addEventListener('submit', function(event){
    event.preventDefault();
    
    const n1 = parseInt(numeroInserito1.value)
    const n2 = parseInt(numeroInserito2.value)
    const n3 = parseInt(numeroInserito3.value)
    const n4 = parseInt(numeroInserito4.value)
    const n5 = parseInt(numeroInserito5.value)

    
    // controllare se gli input corrispondono a valori nell'array e in caso salvarli  e far accrescere un contatore risposte giuste 

    if(arrayNum.includes(n1)){
        soluzioniV ++ ;
        arraysoluzioniV.push(n1);

    }else{
        soluzioniX ++;
        arraysoluzioniX.push(n1);
    }


    if(arrayNum.includes(n2)){
        soluzioniV ++ ;
        arraysoluzioniV.push(n2);

    }else{
        soluzioniX ++;
        arraysoluzioniX.push(n2);
    }


    if(arrayNum.includes(n3)){
        soluzioniV ++ ;
        arraysoluzioniV.push(n3);

    }else{
        soluzioniX ++;
        arraysoluzioniX.push(n3);
    }


    if(arrayNum.includes(n4)){
        soluzioniV ++ ;
        arraysoluzioniV.push(n4);
    

    }else{
        soluzioniX ++;
        arraysoluzioniX.push(n4);

    }


    if(arrayNum.includes(n5)){
        soluzioniV ++ ;
        arraysoluzioniV.push(n5);
    
    }else{
        soluzioniX ++;
        arraysoluzioniX.push(n5);

    }

    numeriV = arraysoluzioniV.join()
    numeriX = arraysoluzioniX.join();
    
    // stampare le risposte giuste ed il contatore

    if(isNaN(n1)||isNaN(n2)||isNaN(n3)||isNaN(n4)||isNaN(n5)){

        error.classList.remove('d-none')
        error.classList.add('d-flex')
        error.append('INSERISCI I DATI CORRETTI')
        

    }else{
        counterV.append(`soluzioni corrette: ${soluzioniV}`)
        messageV.append(`${numeriV}`)
        counterX.append(`soluzioni sbagliate: ${soluzioniX}`)
        messageX.append(`${numeriX}`)

    }



})











// funzioni


function randomIntFromOneTo(maxNumber) {
	const randomInt = Math.floor(Math.random() * maxNumber) + 1
    
    	return randomInt
}


function displayChange(){
    numberList.classList.add('d-none')
    numberList.classList.remove('d-flex')
    answerForm.classList.add('d-block')
    answerForm.classList.remove('d-none')


}
