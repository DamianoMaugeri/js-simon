// variabili

const maxNumber = 50 

const startButton = document.getElementById('start-button')

const numberList = document.getElementById('numbers-list')

const answerForm = document.getElementById('answers-form')



// al primo evento generare un countdown ,generare array di numeri che vengono visti come list item  alla fine del countdown mttere tutto d-none

startButton.addEventListener('click',() =>{
    startButton.disabled = true;

    // mi creo l'array 

    const arrayNum = []; 


    for (let i=0; i < 5 ; i++){
        let arrayElement = randomIntFromOneTo(maxNumber)
        arrayNum.push(arrayElement)

        const liElement = document.createElement('li')
        liElement.innerHTML = arrayElement
        numberList.appendChild(liElement)


    }
    console.log(arrayNum)

    // mettere il form in d-flex
    setTimeout(displayChange, 5000)

})




// ricere gli input dal form 








// controllare se gli input corrispondono a valori nell'array e in caso salvarli  e far accrescere un contatore risposte giuste 
// stampare le risposte giuste ed il contatore








// funzione per generare i numeri casuali 

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
