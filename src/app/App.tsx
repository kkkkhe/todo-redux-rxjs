import { useState } from 'react'
import { getDate } from '../shared/lib/getTodayDate/getDate'
import { DisplayButton } from '../shared/ui/buttons/display'
import {Date} from '../shared/ui/date'
import { DropDown } from '../shared/ui/drop-down'
function App() {
  const [isOpen, setOpen] = useState<boolean>(false)
  return (
    <div className="max-w-[800px] container">
      <div>
        <div className='flex justify-between'>
          <Date/>
          <div className='relative'>
            <DisplayButton setOpen={setOpen}/>
            <DropDown isOpen={isOpen}>
                <div>sda</div>
            </DropDown>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
