const createDaysOfTheWeek = () => {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  

  // Escreva seu código abaixo.

// Parte 1
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    const createDays = () =>{
    const addIdDays = document.getElementById('days');

    for (let index = 0; index < decemberDaysList.length; index +=1){
    
    let day = decemberDaysList[index];
    let createLi = document.createElement('li');
    createLi.className = 'day';

    if( day === 24 || day === 31 ){
      createLi.classList.add('holiday');
    } else if (day === 4|| day === 11 || day === 18 ){
      createLi.classList.add('friday');
    } else if (day === 25){
    createLi.classList.add('friday', 'holiday');
   }
   createLi.innerHTML = day;
   addIdDays.appendChild(createLi);
  }
}
createDays();

//Parte 2
  const createHolidayButton = (feriados) => {
    const button = document.getElementsByClassName('buttons-container')[0];
    let newButton = document.createElement('button');
    newButton.id = 'btn-holiday';
    newButton.innerHTML = feriados;
    button.appendChild(newButton);
  }
  createHolidayButton('Feriados');

//Parte 3
const addHolidayFunction = () =>{
const btnHoliday = document.getElementById('btn-holiday');
let btnStatus = true;
btnHoliday.addEventListener('click',(event)=>{
  const classHoliday = document.getElementsByClassName('holiday');
  if (btnStatus){
  for(let index = 0; index < classHoliday.length; index += 1){
  classHoliday[index].style.backgroundColor = 'cyan';
  }
  btnStatus = false;
} else {
  for(let index = 0; index < classHoliday.length; index += 1){
  classHoliday[index].style.backgroundColor = 'rgb(238,238,238)';
}
  btnStatus = true;}
}) 
}
addHolidayFunction();

//Parte 4
const createFridayButton = (sextaFeira) => {
  const buttonFriday = document.getElementsByClassName('buttons-container')[0];
  let fridayButton = document.createElement('button');
  fridayButton.id = 'btn-friday';
  fridayButton.innerHTML = sextaFeira;
  buttonFriday.appendChild(fridayButton);
}
createFridayButton('Sexta-Feira');

//Parte 5
const addFridayFunction = () =>{
  const btnFriday = document.getElementById('btn-friday');
  let btnFridayStatus = true;
  btnFriday.addEventListener('click',(event)=>{
  const classFriday = document.getElementsByClassName('friday');
  
  if (btnFridayStatus){
    for(let index = 0; index < classFriday.length; index += 1){
    classFriday[index].style.backgroundColor = 'lime';
    }
    btnFridayStatus = false;
  } else {
    for(let index = 0; index < classFriday.length; index += 1){
    classFriday[index].style.backgroundColor = 'rgb(238,238,238)';
  }
    btnFridayStatus = true;}
  }) 
  }
  addFridayFunction();
