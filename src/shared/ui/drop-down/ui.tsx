import { PropsWithChildren, ReactNode } from "react"

interface IProps {
	children: ReactNode
	isOpen: boolean
}

export const DropDown = ({children, isOpen}: IProps) => {
	return (
		<div className={`rounded-[3px] border-[1px] border-[#ddd] absolute w-[300px] shadow-[0_1px_8px_0_rgb(0,0,0,0.1)] -translate-x-1/3 ${!isOpen && 'hidden'}`}>
			<div className="font-bold text-sm p-3">Сортировка</div>
			<div className="px-3 pb-3">
				{children}
			</div>
		</div>
	)
}