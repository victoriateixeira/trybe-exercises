function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function createsDaysOfTheMonth() {
let listOfDays = document.querySelector("#days");
for (let i=0; i<decemberDaysList.length;i+=1) {
    let dayOfMonth = decemberDaysList[i];
    let dayOfMonthListItem = document.createElement("li");
    dayOfMonthListItem.classList.add = "day";
    if (dayOfMonth===24 || dayOfMonth === 25 || dayOfMonth ===31) {
        dayOfMonthListItem.classList.add = 'holiday';
    }
    if (dayOfMonth === 4 || dayOfMonth === 11 || dayOfMonth === 18 || dayOfMonth === 25 ){
        dayOfMonthListItem.classList.add = 'friday';
    }    
    dayOfMonthListItem.innerHTML = dayOfMonth;

    listOfDays.appendChild(dayOfMonthListItem);
};
  }
  createsDaysOfTheMonth();