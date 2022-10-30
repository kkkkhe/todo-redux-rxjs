import { getDate } from "../../lib/getTodayDate/getDate"

export const Date = () => {
	const {getDay, getTodaysDate, getMonth} = getDate()
	return (
		<div className="flex items-end">
			<div className="font-bold text-[20px]">Сегодня</div>
			<div className="flex ml-[7px] text-[12px] gap-1 text-[#808080]">
				<p>{getDay}</p>
				<p>{getTodaysDate}</p>
				<p>{getMonth}</p>
			</div>
		</div>
	)
}