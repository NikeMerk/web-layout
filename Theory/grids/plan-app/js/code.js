const monthList = ['Январь', 'Февраль', 
'Март', 'Апрель', 
'Май', 'Июнь', 'Июль', 
'Август', 'Сентябрь', 
'Октябрь', 'Ноябрь', 'Декабрь'];

const weekDaysList = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

const $calendar = document.getElementById('calendar');

console.log($calendar)
// шапка календаря

const $head = document.createElement('div');
const  $month = document.createElement('div');
const  $year = document.createElement('div');

$head.append($month);
$head.append($year);
$calendar.append($head);

$head.classList.add('calendar__head');
$month.classList.add('calendar__month');
$year.classList.add('calendar__year');

$month.textContent = 'hello world';
$year.textContent = 'my name';

// тело кален

const $body = document.createElement('div');
$body.classList.add('calendar__body');
$calendar.append($body);

// шапка с днями недели

for (let i = 0; i < weekDaysList.length; i++) {
	const $weekDayCell = document.createElement('div');
	$weekDayCell.classList.add('calendar__cell', 'calendar__cell-weekday-day');
	$weekDayCell.textContent = weekDaysList[i];
	if (i > 4) {
		$weekDayCell.classList.add('calendar__cell-weekend');
	}
	$body.append($weekDayCell);
}

// сетка календаря

for (let i = 0; i < weekDaysList.length * 6; i++) {
	const $dayCell = document.createElement('div');
	$dayCell.classList.add('calendar__cell');
	$dayCell.textContent = i;
	// if (i > 4) {
	// 	$weekDayCell.classList.add('calendar__cell-weekend');
	// }
	$body.append($dayCell);
}