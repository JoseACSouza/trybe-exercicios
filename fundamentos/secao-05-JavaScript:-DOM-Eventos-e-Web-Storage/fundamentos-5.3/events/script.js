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
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    const createDays = () =>{
    const addIdDays = document.querySelector('#days');

    for (let index = 0; index < decemberDaysList.length; index +=1){
    
    const createLi = document.createElement('li');
    createLi.className = 'day';
    createLi.innerHTML = decemberDaysList[index];
    addIdDays.appendChild('createLi');

    if( decemberDaysList[index] === 24 || decemberDaysList[index] === 31 ){
      createLi.classList.add('holiday');
    } else if (decemberDaysList[index] === 4|| decemberDaysList[index] === 11 || decemberDaysList[index] === 18 ){
      createLi.classList.add('friday');
    } else if (decemberDaysList[index] === 25){
    createLi.classList.add('friday', 'holiday');
    }
  }
}