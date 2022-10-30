const dates = ['Вс','Пн','Вт','Ср','Чт','Пт','Сб']
const month = ['Янв' , 'Фев' , 'Мар' , 'Апр' , 'Май' , 'Июнь' , 'Июль' , 'Авг' , 'Сен' , 'Окт' , 'Ноя' , 'Дек']
export const getDate = () => {
	const getDay = new Date().getDay()
	const getTodaysDate = new Date().getDate()
	const getMonth = new Date().getMonth()
	return {getDay: dates[getDay], getTodaysDate, getMonth: month[getMonth]}
}

