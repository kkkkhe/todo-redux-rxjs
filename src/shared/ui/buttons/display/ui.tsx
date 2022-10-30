interface IProps{
	setOpen: (state: (state: boolean) => boolean) => void
}

export const DisplayButton = ({setOpen}:IProps) => {
	return (
		<button className="" onClick={() => setOpen((state:boolean) => !state)}>
			Отображение
		</button>
	)
}